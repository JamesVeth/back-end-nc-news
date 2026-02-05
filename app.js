const express = require("express"); // Load the Express module (gives us the express() function)
const app = express(); // Create a new Express object for our app

app.use(express.json()); // Required for POST

// Task 1: placeholder route for /api/topics
app.get("/api/topics", (req, res) => {
    res.status(200).send({ topics: [] }); // empty array for now
});
// Task 2: placeholder route for /api/articles
app.get("/api/articles", (req, res)=>{
    res.status(200).send( { articles: []} )
});
// Task 3: placeholder route for /api/users
app.get("/api/users", (req, res)=>{
    res.status(200).send( { users: []} )
});
// Task 4: placeholder route for /api/articles/:article_id
app.get("/api/articles/:article_id", (req, res) => {
    res.status(200).send({ article: {} });
});
// Task 5: placeholder route for /api/articles/:article_id/comments
app.get("/api/articles/:article_id/comments", (req, res) => {
    res.status(200).send({ comments: [] });
});

// Task 6: placeholder route for CORE: POST /api/articles/:article_id/comments - Now a good point to start writing tests 
app.post("/api/articles/:article_id/comments", (req, res) => {
    const { username, body } = req.body;

    const newComment = {
        article_id: req.params.article_id,
        author: username,
        body: body
    };
    
    res.status(201).send({ comment: newComment });
});

// Task 7: PATCH /api/articles/:article_id
app.patch("/api/articles/:article_id", (req, res) => {
  const { inc_votes } = req.body;
  const { article_id } = req.params;

  // Minimal placeholder: just update votes in memory
  const updatedArticle = {
    article_id: Number(article_id),
    votes: inc_votes // only the votes property is updated
  };

  res.status(200).send({ article: updatedArticle });
});


// Task 8: DELETE
app.delete("/api/comments/:comment_id", (req, res) => {
  res.status(204).send();
});

// Task 9: 
app.get("/api/articles", (req, res) => {
  const { sort_by, order } = req.query;

  // Return placeholder empty array, but accept the query parameters
  res.status(200).send({ articles: [] });
});

// Task 10
app.get("/api/articles", (req, res) => {
  const { topic } = req.query;

  // Placeholder response; topic query accepted but not applied
  res.status(200).send({ articles: [] });
});

module.exports = app;