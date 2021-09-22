import React,{Fragment} from "react"
// import gql from 'apollo-boost'
import {gql, useQuery} from "@apollo/client"
import ShowTodo from "./ShowTodo"
// import gql from "graphql-tag"


const TODOS_QUERY = gql`
    query Query {
        getAllTodo {
            id
            todoString
        }
    }
`


const Todos = () => {

    const {loading,error,data} = useQuery(TODOS_QUERY)
    // console.log(error)
    if(loading) return <p>Loading...</p>
    return(
        <Fragment>
            {data.getAllTodo.map(todo => (
                <ShowTodo key = {todo.id} todo = {todo}/>
            ))}
            
        </Fragment>
    )
}

export default Todos