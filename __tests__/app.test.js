const request = require("supertest");
const app = require("../app");
const db = require("../db/connection");

describe("Get status 200 codes for Task 1 - 5", ()=>{
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



