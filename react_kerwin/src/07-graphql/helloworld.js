const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        hello: {
          type: GraphQLString,
          resolve: () => 'hello world',
        },
      },
    }),
  });

const app = express();

app.use('/graphql', createHandler({ schema }));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
