const request = require("supertest");
const app = require("../app");
const db = require("../db/connection");

describe("GET - Status 200 codes for Task 1 - 5", ()=>{
  test("GET 200 from /api/topics", async () => {
    const res = await request(app).get("/api/topics");
    expect(res.status).toBe(200);
  });
  test("GET 200 from /api/articles", async () => {
    const res = await request(app).get("/api/articles");
    expect(res.status).toBe(200);
  });
  test("GET 200 from /api/users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.status).toBe(200);
  });
  test("GET 200 from /api/:article_id", async () => {
    const res = await request(app).get("/api/articles/:article_id");
    expect(res.status).toBe(200);
  });
  test("GET 200 from /api/articles/:article_id/comments", async () => {
    const res = await request(app).get("/api/articles/:article_id/comments");
    expect(res.status).toBe(200);
  });
});

describe("POST - /api/articles/:article_id/comments", ()=>{

    test("201: posts a comment (in test db)", async ()=>{
        const newComment = {
            username: "user-101",
            body: "This is a test comment in the db"
        }

        const res = await request(app)
        .post("/api/articles/1/comments")
        .send(newComment);

        expect(res.status).toBe(201);
        expect(res.body.comment).toEqual({
            article_id: "1",
            author: "user-101",
            body: "This is a test comment in the db"
        });
    });
});

describe("PATCH /api/articles/:article_id", () => {
  test("200: updates votes of an article", async () => {
    const res = await request(app)
      .patch("/api/articles/1")
      .send({ inc_votes: 10 });

    expect(res.status).toBe(200);
    expect(res.body.article).toEqual({
      article_id: 1,
      votes: 10
    });
  });
});

describe("DELETE /api/comments/:comment_id", () => {
  test("204: responds with no content when deleting a comment", async () => {
    const res = await request(app)
      .delete("/api/comments/1"); // can use any comment_id for now

    expect(res.status).toBe(204);
    expect(res.body).toEqual({}); // No content is returned
  });
});

// Task 9

describe("GET /api/articles with queries", () => {
  test("200: accepts sort_by and order queries", async () => {
    const res = await request(app)
      .get("/api/articles")
      .query({ sort_by: "title", order: "asc" }); // optional query

    expect(res.status).toBe(200);
    expect(res.body.articles).toEqual([]); // placeholder
  });
});

// Task 10

describe("GET /api/articles with topic query", () => {
  test("200: accepts topic query without error", async () => {
    const res = await request(app)
      .get("/api/articles")
      .query({ topic: "coding" }); // example topic

    expect(res.status).toBe(200);
    expect(res.body.articles).toEqual([]); // placeholder
  });
});
