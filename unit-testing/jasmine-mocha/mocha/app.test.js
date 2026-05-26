const { expect } = require("chai");
const request = require("supertest");

describe("Async/Await Multi-Endpoint Test Suite", function () {
  let server;

  before(() => {
    server = require("../app");
  });

  it("should fetch get and validate the response", async function () {
    const res = await request(server).get("/").expect(200);
    expect(res.body).to.have.property("success", true);
    expect(res.body).to.have.property("message", "Data fetched successfully");
  });

  it("should create a new resource and validate the response", async function () {
    const res = await request(server)
      .post("/")
      .send({ name: "Testing Name" })
      .expect(201);
    expect(res.body).to.have.property("created", true);
    expect(res.body).to.have.property("name", "Testing Name");
  });
});
