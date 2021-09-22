// import {Todo} from "../models/todo"

const { reject } = require("lodash");
const Todo = require("../models/todo")

const resolvers = {
    Query: {
        getAllTodo:(root) => {
            return new Promise((resolve,reject) => {
                Todo.find((err,todos) => {
                    if(err) reject(err)
                    else resolve(todos)
                })
            })
        }, 
        getTodoById:(root,{input}) => {
            console.log(input.id)
            return new Promise((resolve,reject) => {
                Todo.findById(input.id).exec((err, todo) => {
                    if(err) reject(err)
                    else resolve(todo)
                })
            })
        }
    },
    Mutation:{
        createTodo: ((root,{ input }) => {
            const todo = input.todoString
            console.log({input})
            const newTodo = new Todo(input)
            return new Promise((resolve,reject) => {
                newTodo.save((err) => {
                    if(err) reject(err)
                    else resolve(newTodo)
                })
            })
        }),
        deleteTodoById: ((root,{input}) => {
            return new Promise((resolve,reject) => {
                Todo.findByIdAndRemove(input.id).exec((err,todo) => {
                    if(err) reject(err)
                    else resolve(todo)
                })
            })
        })

    }
};

module.exports.resolvers = resolvers
// export {resolvers}