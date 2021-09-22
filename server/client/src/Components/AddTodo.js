import React,{useRef,useEffect,useState} from "react"
import {gql, useMutation,useQuery} from "@apollo/client"
import Todos from "./Todos"

const ADDTODO_QUERY = gql`
    mutation Mutation($createTodoInput: todoInput) {
        createTodo(input: $createTodoInput) {
            id
            todoString
        }
    }
`
const TODOS_QUERY = gql`
    query Query {
        getAllTodo {
            id
            todoString
        }
    }
`

const AddTodo = () => {

    const [todo, setTodo] = useState([])

    // const {loading,error,data} = useQuery(TODOS_QUERY)

    

    // const todo = useRef("")
    

    const handleSubmit = (event) => {
        let todoString = ""
        event.preventDefault()
        console.log(todo?.current?.value)
        todoString = todo?.current?.value 
        console.log(todoString)
        addTodo({variables: {createTodoInput: {
            todoString
        }}})
        window.location.reload()
        
    }

    const [addTodo, {loading1,error1,data1}] = useMutation(ADDTODO_QUERY)

    return(
        <div>
            
            <Todos/>
            <form onSubmit = {handleSubmit}>
                <div className = "form-group">
                    <label>New Todo</label>
                    <input className = "form-control" ref = {todo}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo