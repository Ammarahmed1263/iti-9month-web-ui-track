const { expect } = require("chai");
const { fetchPosts } = require("../index");

describe("Fetch Posts API Test Suite", function () {
  let response = {};

  before(async function () {
    response = await fetchPosts();
  });

  it("should return an array of posts", async function () {
    expect(response).to.be.an("object");
    expect(response).to.have.property("posts").that.is.an("array");
  });

  it("should return more than 0 posts", async function () {
    const posts = response.posts;

    expect(posts).to.be.an("array");
    expect(posts.length).to.be.greaterThan(0);
  });
});
