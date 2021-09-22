// import {gql} from "@apollo/client"
const {gql} = require("apollo-server-express")

const typeDefs = gql`
    type todo{
        id: ID
        todoString: String
    }
    input todoInput{
        id: ID
        todoString: String
    }
    input todoIdInput{
        id: ID
    }
    type Query{
        getAllTodo: [todo],
        getTodoById(input:todoIdInput): todo

    }
    type Mutation{
        createTodo(input:todoInput):todo
        deleteTodoById(input:todoIdInput):todo
    }
`;
module.exports.typeDefs = typeDefs
// export {typeDefs}