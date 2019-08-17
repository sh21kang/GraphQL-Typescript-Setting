export const typeDefs = ["type Query {\n  posts: [Post!]!\n}\n\ntype Mutation {\n  createPost(title: String!, desc: String!, author: String!): Boolean!\n}\n\n# Schema Types\ntype Post {\n  id: String!\n  title: String!\n  desc: String!\n  author: String!\n  createdOn: String!\n}\n"];
/* tslint:disable */

export interface Query {
  posts: Array<Post>;
}

export interface Post {
  id: string;
  title: string;
  desc: string;
  author: string;
  createdOn: string;
}

export interface Mutation {
  createPost: boolean;
}

export interface CreatePostMutationArgs {
  title: string;
  desc: string;
  author: string;
}
