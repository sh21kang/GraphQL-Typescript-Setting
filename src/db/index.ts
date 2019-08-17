import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', PostSchema);

// SET UP Mongoose Promises.
mongoose.Promise = global.Promise;

export const startDB = ({ url, db }) =>
  mongoose.connect(`mongodb://${url}/${db}`, {
    useNewUrlParser: true,
    useCreateIndex: true
  });

export const models = {
  Post
};
