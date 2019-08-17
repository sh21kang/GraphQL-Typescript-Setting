import { GraphQLServer } from 'graphql-yoga';
import { startDB, models } from './db';

import schema from './schema';
const db = startDB({
  db: 'graphqlYoga',
  url: 'localhost:27017'
});

const context = {
  models,
  db
};

const Server = new GraphQLServer({
  schema,
  context
});

// options
const opts = {
  port: 4000
};

Server.start(opts, () => {
  console.log(`Server is running on http://localhost:${opts.port}`);
});
