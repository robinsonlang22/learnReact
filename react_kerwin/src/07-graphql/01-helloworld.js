const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            hello: {
                type: GraphQLString,
                resolve: () => 'hello world',
            },
            getName: {
                type: GraphQLString,
                resolve: () => 'Kerwin',
            },
            getAge: {
                type: GraphQLInt,
                resolve: () => 18,
            },
            getAllName: {
                type: new GraphQLList(GraphQLString),
                resolve: () => ['Kerwin', 'John', 'Jane'],
            },
            getAccountInfo: {
                type: new GraphQLObjectType({
                    name: 'AccountInfo',
                    fields: {
                        name: { type: GraphQLString },
                        age: { type: GraphQLInt },
                        gender: { type: GraphQLString },
                    },
                }),
                resolve: () => ({
                    name: 'Kerwin',
                    age: 18,
                    gender: 'male',
                }),
            },  
        },
    }),
});

const app = express();

app.use('/graphql', createHandler({ schema }));

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
