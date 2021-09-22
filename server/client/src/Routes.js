import React,{Component} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import App from "./App"
import Todos from "./Components/Todos"
import { ApolloProvider, InMemoryCache,ApolloClient} from '@apollo/client'




const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:8080/graphql"
})
 



const Routes = () => {
    return(
        <ApolloProvider client = {client}>
            <Router>               
                <Route exact path = "/" component = {App}/>
            </Router>
        </ApolloProvider>
    )
}
  export default Routes;