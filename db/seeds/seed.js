const db = require("../connection");

const seed = async ({ topicData, userData, articleData, commentData }) => {

    await db.query(`DROP TABLE IF EXISTS comments;`);
    await db.query(`DROP TABLE IF EXISTS articles;`);
    await db.query(`DROP TABLE IF EXISTS users;`);
    await db.query(`DROP TABLE IF EXISTS topics;`);
  // 1. Create topics table
  await db.query(`
    CREATE TABLE IF NOT EXISTS topics (
      slug VARCHAR(255) PRIMARY KEY,
      description VARCHAR(255) NOT NULL,
      img_url VARCHAR(1000)
    );
  `);
  console.log("Topics table created");

  // 2. Insert topic data
  for (const topic of topicData) {
    await db.query(
      `INSERT INTO topics (slug, description, img_url)
       VALUES ($1, $2, $3)
       ON CONFLICT (slug) DO NOTHING;`,
      [topic.slug, topic.description, topic.img_url]
    );
  }
  console.log("Topics data inserted");

  // 3. Create users table
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      username VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      avatar_url VARCHAR(1000)
    );
  `);
  console.log("Users table created");

  // 4. Insert user data
  for (const user of userData) {
    await db.query(
      `INSERT INTO users (username, name, avatar_url)
       VALUES ($1, $2, $3)
       ON CONFLICT (username) DO NOTHING;`,
      [user.username, user.name, user.avatar_url]
    );
  }
  console.log("Users data inserted");

  // 5. Create articles table
  await db.query(`
    CREATE TABLE IF NOT EXISTS articles (
      article_id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      topic VARCHAR(255) REFERENCES topics(slug),
      author VARCHAR(255) REFERENCES users(username),
      body TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      votes INT DEFAULT 0,
      article_img_url VARCHAR(1000)
    );
  `);
  console.log("Articles table created");

  // 6. Insert article data
  for (const article of articleData) {
    await db.query(
      `INSERT INTO articles (title, topic, author, body, created_at, votes, article_img_url)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT (article_id) DO NOTHING;`,
      [
        article.title,
        article.topic,
        article.author,
        article.body,
        article.created_at,
        article.votes,
        article.article_img_url
      ]
    );
  }
  console.log("Articles data inserted");

  // 7. Create comments table
  await db.query(`
    CREATE TABLE IF NOT EXISTS comments (
      comment_id SERIAL PRIMARY KEY,
      author VARCHAR(255) REFERENCES users(username),
      article_id INT NOT NULL REFERENCES articles(article_id),
      votes INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      body TEXT NOT NULL
    );
  `);
  console.log("Comments table created");

  // 8. Insert comments data

  // Build a lookup map from article title -> article_id
  const articleLookup = {};
  const { rows: insertedArticles } = await db.query(`SELECT article_id, title FROM articles;`);
  insertedArticles.forEach(article => {
    articleLookup[article.title] = article.article_id;
  });

  // Insert each comment, mapping article_title to article_id
  for (const comment of commentData) {
    await db.query(
      `INSERT INTO comments (author, article_id, votes, created_at, body)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (comment_id) DO NOTHING;`,
      [
        comment.author,
        articleLookup[comment.article_title], // use article_title from your commentData
        comment.votes,
        comment.created_at,
        comment.body
      ]
    );
  }
  console.log("Comments data inserted");
};

module.exports = seed;
