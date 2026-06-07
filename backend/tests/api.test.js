const request = require("supertest");
const app = require("../src/app");

describe("Portfolio Backend API", () => {
  test("GET / returns running message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("success", true);
    expect(res.body).toHaveProperty("message");
  });

  test("GET /api/v1 returns 404 for root of API router", async () => {
    const res = await request(app).get("/api/v1");
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("success", false);
    expect(res.body).toHaveProperty("message", "Resource not found");
  });
});
