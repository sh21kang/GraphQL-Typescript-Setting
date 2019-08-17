import { Post } from '../../types/graph';
import { Resolvers } from '../../types/resolvers';

const resolvers: Resolvers = {
  Query: {
    posts: async (parent, args, { models }): Promise<Post> => {
      const Posts = await models.Post.find({});
      console.log(Posts);
      return Posts;
    }
  },
  Mutation: {
    createPost: async (
      parent,
      { title, desc, author },
      { models }
    ): Promise<Boolean> => {
      const Post = await models.Post.findOne({ title });

      if (Post) {
        throw new Error('Please provide a unique title.');
      }

      // create a new post
      const newPost = new models.Post({
        title,
        desc,
        author
      });

      // save the post
      try {
        await newPost.save();
      } catch (e) {
        throw new Error('Cannot Save Post!!!');
      }

      return true;
    }
  }
};
export default resolvers;
