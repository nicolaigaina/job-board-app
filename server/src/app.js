const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const JobsApi = require("./graphql/datasources/api");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      jobsApi: new JobsApi(),
    };
  },
  playground: {
    endpoint: "/graphql",
  },
});

server.listen(3500).then(({ url }) => console.log(`Server running at ${url}`));
