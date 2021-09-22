require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');
const { resolvers } = require('./resolvers/resolvers');
const { typeDefs } = require('./schema/schema');
const { ApolloServer } = require('apollo-server')



const server = new ApolloServer({typeDefs,resolvers})
// console.log(server)

const app = express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB connected")
    return server.listen({ port: 8080 }, () => {
        console.log(`Server is running at http://localhost:8080${server.graphqlPath}`);
    })
}).catch(() => {
    console.log("DB not connected")
})

// server.applyMiddleware({app})

// app.get('/', (req, res) => {
//     console.log("Apollo GraphQL Express server is ready");
// });

// app.listen({ port: 8080 }, () => {
//     console.log(`Server is running at http://localhost:8080${server.graphqlPath}`);
// });

