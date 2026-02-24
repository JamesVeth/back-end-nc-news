const request = require("supertest");
const app = require("../app");
const db = require("../db/connection");

/* 
// TASK 1 - 3: GET status 200 codes
describe("GET - Status 200 codes for Task 1 - 3", () => {
  test("TASK 1: GET 200 from /api/topics", async () => {
    const res = await request(app).get("/api/topics");
    expect(res.status).toBe(200);
  });

  test("TASK 2: GET 200 from /api/articles", async () => {
    const res = await request(app).get("/api/articles");
    expect(res.status).toBe(200);
  });

  test("TASK 3: GET 200 from /api/users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.status).toBe(200);
  });
});

// TASK 4 + TASK 11: GET article by ID (includes comment_count)
describe("GET - /api/articles/:article_id", () => {
  test("TASK 4: GET 200 from /api/articles/:article_id", async () => {
    const res = await request(app).get("/api/articles/1");
    expect(res.status).toBe(200);
  });

  test("TASK 11: 200 responds with article including comment_count", async () => {
    const res = await request(app).get("/api/articles/1");
    expect(res.status).toBe(200);
    expect(res.body.article).toHaveProperty("comment_count");
  });
});

// TASK 5: GET comments for an article
describe("GET - /api/articles/:article_id/comments", () => {
  test("TASK 5: GET 200 from /api/articles/:article_id/comments", async () => {
    const res = await request(app).get("/api/articles/1/comments");
    expect(res.status).toBe(200);
  });
});

// TASK 6: POST comment to an article
describe("POST - /api/articles/:article_id/comments", () => {
  test("TASK 6: 201: posts a comment", async () => {
    const newComment = {
      username: "user-101",
      body: "This is a test comment in the db"
    };

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

// TASK 7: PATCH votes for an article
describe("PATCH /api/articles/:article_id", () => {
  test("TASK 7: 200: updates votes of an article", async () => {
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

// TASK 8: DELETE a comment
describe("DELETE /api/comments/:comment_id", () => {
  test("TASK 8: 204: responds with no content when deleting a comment", async () => {
    const res = await request(app).delete("/api/comments/1");
    expect(res.status).toBe(204);
    expect(res.body).toEqual({});
  });
});

// TASK 9: GET /api/articles with sort_by and order queries
describe("GET /api/articles with sort_by and order queries", () => {
  test("TASK 9: 200: accepts sort_by and order queries", async () => {
    const res = await request(app)
      .get("/api/articles")
      .query({ sort_by: "title", order: "asc" });

    expect(res.status).toBe(200);
    expect(res.body.articles).toEqual([]);
  });
});

// TASK 10: GET /api/articles with topic query
describe("GET /api/articles with topic query", () => {
  test("TASK 10: 200: accepts topic query without error", async () => {
    const res = await request(app)
      .get("/api/articles")
      .query({ topic: "coding" });

    expect(res.status).toBe(200);
    expect(res.body.articles).toEqual([]);
  });
});
 */