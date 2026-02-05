const express = require("express"); // Load the Express module (gives us the express() function)
const app = express(); // Create a new Express object for our app

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
    res.status(201).send({ comment: {} }); // placeholder for newly posted comment
});


module.exports = app;