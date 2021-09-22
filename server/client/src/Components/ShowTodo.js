import React,{useRef} from "react"
import {gql, useMutation} from "@apollo/client"

const DELETE_TODO_QUERY = gql`
    mutation Mutation($deleteTodoByIdInput: todoIdInput) {
        deleteTodoById(input: $deleteTodoByIdInput) {
            id
            todoString
        }
    }
`


const ShowTodo = ({todo : {todoString,id}}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        deleteTodo({variables: {deleteTodoByIdInput: {
            id
        }}})
        window.location.reload()

    }

    const [deleteTodo, {loading,error,data}] = useMutation(DELETE_TODO_QUERY)
    return(
        <div className = "card card-body mb-3">
            <div className = "row">
                <div className = "col-md-9">
                    Todo: {todoString}
                </div>
                <div className = "col-md-3">
                    <button type="submit" className="btn btn-danger" onClick = {handleSubmit}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ShowTodo