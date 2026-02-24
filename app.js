const express = require("express");
const app = express();
const db = require("./db/connection");
const cors = require("cors");


// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Routers
const topicsRouter = require("./routes/topics.router");
app.use("/api/topics", topicsRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ msg: "Internal Server Error", error: err.message });
});

module.exports = app;






/* 
// Task 1: GET /api/topics
app.get("/api/topics", (req, res) => {
  res.status(200).send({ topics: [] });
});

// Task 2: GET /api/articles
app.get("/api/articles", (req, res) => {
  res.status(200).send({ articles: [] });
});

// Task 3: GET /api/users
app.get("/api/users", (req, res) => {
  res.status(200).send({ users: [] });
});

// Task 4 + Task 11: GET /api/articles/:article_id (with comment_count)
app.get("/api/articles/:article_id", (req, res) => {
  const { article_id } = req.params;

  db.query(
    `
    SELECT articles.*, COUNT(comments.comment_id)::TEXT AS comment_count
    FROM articles
    LEFT JOIN comments
      ON comments.article_id = articles.article_id
    WHERE articles.article_id = $1
    GROUP BY articles.article_id;
    `,
    [article_id]
  ).then(({ rows }) => {
    res.status(200).send({ article: rows[0] });
  });
});

// Task 5: GET /api/articles/:article_id/comments
app.get("/api/articles/:article_id/comments", (req, res) => {
  res.status(200).send({ comments: [] });
});

// Task 6: POST /api/articles/:article_id/comments
app.post("/api/articles/:article_id/comments", (req, res) => {
  const { username, body } = req.body;

  res.status(201).send({
    comment: {
      article_id: req.params.article_id,
      author: username,
      body
    }
  });
});

// Task 7: PATCH /api/articles/:article_id
app.patch("/api/articles/:article_id", (req, res) => {
  const { inc_votes } = req.body;
  const { article_id } = req.params;

  res.status(200).send({
    article: {
      article_id: Number(article_id),
      votes: inc_votes
    }
  });
});

// Task 8: DELETE /api/comments/:comment_id
app.delete("/api/comments/:comment_id", (req, res) => {
  res.status(204).send();
});
 */

