import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';
import fetch from 'node-fetch';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      fetch,
    };
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server Listening on url ${url}`);
});
