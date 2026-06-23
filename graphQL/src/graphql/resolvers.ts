import { GraphQLError } from "graphql";
import { User, Post, Comment } from "../models/index.js";
import { hashPassword, comparePassword, generateToken } from "../auth.js";

interface Context {
  user?: {
    id: string;
    username: string;
  };
}

export const resolvers = {
  Query: {
    getAllUsers: async () => {
      return await User.find();
    },
    getAllPosts: async () => {
      return await Post.find();
    },
    getUserById: async (_: any, { id }: { id: string }) => {
      return await User.findById(id);
    },
    getPostById: async (_: any, { id }: { id: string }) => {
      return await Post.findById(id);
    },
    getAllComments: async () => {
      return await Comment.find();
    },
    getCommentById: async (_: any, { id }: { id: string }) => {
      return await Comment.findById(id);
    },
    getPostComments: async (_: any, { id }: { id: string }) => {
      return await Comment.find({ post: id });
    },
  },

  User: {
    posts: async (parent: any) => {
      return await Post.find({ author: parent.id || parent._id });
    },
    comments: async (parent: any) => {
      return await Comment.find({ user: parent.id || parent._id });
    },
  },

  Post: {
    author: async (parent: any) => {
      return await User.findById(parent.author);
    },
    comments: async (parent: any) => {
      return await Comment.find({ post: parent.id || parent._id });
    },
  },

  Comment: {
    post: async (parent: any) => {
      return await Post.findById(parent.post);
    },
    user: async (parent: any) => {
      return await User.findById(parent.user);
    },
  },

  Mutation: {
    register: async (
      _: any,
      { username, password, name, email }: any
    ) => {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        throw new GraphQLError("Username already exists", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      const hashedPassword = await hashPassword(password);
      const user = new User({
        username,
        password: hashedPassword,
        name,
        email,
      });

      await user.save();
      return user;
    },

    login: async (
      _: any,
      { username, password }: any
    ) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new GraphQLError("Invalid credentials", {
          extensions: { code: "UNAUTHENTICATED" },
        });
      }

      const isMatch = await comparePassword(password, user.password);
      if (!isMatch) {
        throw new GraphQLError("Invalid credentials", {
          extensions: { code: "UNAUTHENTICATED" },
        });
      }

      const token = generateToken({
        id: user._id.toString(),
        username: user.username,
      });

      return {
        token,
        user,
      };
    },

    addUser: async (
      _: any,
      { username, password, name, email }: any
    ) => {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        throw new GraphQLError("Username already exists", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      const hashedPassword = await hashPassword(password);
      const user = new User({
        username,
        password: hashedPassword,
        name,
        email,
      });

      await user.save();
      return user;
    },

    addPost: async (
      _: any,
      { title, content, authorId }: any,
      context: Context
    ) => {
      if (!context.user) {
        throw new GraphQLError("Authentication required", {
          extensions: { code: "UNAUTHENTICATED" },
        });
      }

      const author = authorId || context.user.id;
      const post = new Post({
        title,
        content,
        author,
      });

      await post.save();
      return post;
    },

    updateUser: async (
      _: any,
      { id, username, name, email }: any,
      context: Context
    ) => {
      if (!context.user) {
        throw new GraphQLError("Authentication required", {
          extensions: { code: "UNAUTHENTICATED" },
        });
      }

      const user = await User.findById(id);
      if (!user) {
        throw new GraphQLError("User not found", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      if (username) user.username = username;
      if (name) user.name = name;
      if (email) user.email = email;

      await user.save();
      return user;
    },

    updatePost: async (
      _: any,
      { id, title, content }: any,
      context: Context
    ) => {
      if (!context.user) {
        throw new GraphQLError("Authentication required", {
          extensions: { code: "UNAUTHENTICATED" },
        });
      }

      const post = await Post.findById(id);
      if (!post) {
        throw new GraphQLError("Post not found", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      if (title) post.title = title;
      if (content) post.content = content;

      await post.save();
      return post;
    },

    deleteUser: async (
      _: any,
      { id }: any,
      context: Context
    ) => {
      if (!context.user) {
        throw new GraphQLError("Authentication required", {
          extensions: { code: "UNAUTHENTICATED" },
        });
      }

      const user = await User.findByIdAndDelete(id);
      if (!user) {
        throw new GraphQLError("User not found", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      return user;
    },

    deletePost: async (
      _: any,
      { id }: any,
      context: Context
    ) => {
      if (!context.user) {
        throw new GraphQLError("Authentication required", {
          extensions: { code: "UNAUTHENTICATED" },
        });
      }

      const post = await Post.findByIdAndDelete(id);
      if (!post) {
        throw new GraphQLError("Post not found", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      return post;
    },

    addComment: async (
      _: any,
      { comment, postId, userId }: any,
      context: Context
    ) => {
      if (!context.user) {
        throw new GraphQLError("Authentication required", {
          extensions: { code: "UNAUTHENTICATED" },
        });
      }

      const user = userId || context.user.id;
      const newComment = new Comment({
        comment,
        post: postId,
        user,
      });

      await newComment.save();
      return newComment;
    },
  },
};
