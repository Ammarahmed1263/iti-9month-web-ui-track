export const typeDefs = `#graphql
  type User {
    id: ID!
    username: String!
    name: String!
    email: String!
    posts: [Post]
    comments: [Comment]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User
    comments: [Comment]
  }

  type Comment {
    id: ID!
    comment: String!
    post: Post
    user: User
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    getAllUsers: [User]
    getAllPosts: [Post]
    getUserById(id: ID!): User
    getPostById(id: ID!): Post
    getAllComments: [Comment]
    getCommentById(id: ID!): Comment
    getPostComments(id: ID!): [Comment]
  }

  type Mutation {
    register(username: String!, password: String!, name: String!, email: String!): User
    login(username: String!, password: String!): AuthPayload!
    addUser(username: String!, password: String!, name: String!, email: String!): User
    addPost(title: String!, content: String!, authorId: ID): Post
    updateUser(id: ID!, username: String, name: String, email: String): User
    updatePost(id: ID!, title: String, content: String): Post
    deleteUser(id: ID!): User
    deletePost(id: ID!): Post
    addComment(comment: String!, postId: ID!, userId: ID): Comment
  }
`;
