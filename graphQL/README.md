# GraphQL API Server

A robust, type-safe backend API server designed for managing database collections like Users, Posts, and Comments. It leverages GraphQL to provide flexible queries and mutations, reducing over-fetching while enabling robust authentication.

## Technologies Used

- **Runtime & Language**: Node.js and TypeScript (`typescript`, `tsx` execution)
- **API Server**: Apollo Server v4 (`@apollo/server`, `graphql`)
- **Database ODM**: Mongoose (`mongoose`) with MongoDB
- **Security & Auth**: JWT (`jsonwebtoken`) and hashing with Bcrypt (`bcryptjs`)

## Main Features

- Unified GraphQL endpoint for querying and mutating data.
- Relational schema modeling for Users, Posts, and Comments.
- Token-based JWT Authentication middleware for securing mutations.
- Database modeling with MongoDB schema enforcement.
