import React from "react"
import Todos from "./Components/Todos"
import 'bootstrap/dist/css/bootstrap.min.css'
import AddTodo from "./Components/AddTodo"

const App = () => {
  return(
    <div>
    <div>Welcome to ToDo</div>
    
    <AddTodo/>
    </div>
    
  )
}

export default App