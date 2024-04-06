const todos = require("../models/todos.model")
const todosRoutes = require("../routes/todos.routes")



let task = 4
exports.getToDos = (req,res)=>{
    res.status(200).send(todos)

}

exports.getToDosBasedOnTask =(req,res)=>{
    todos_task = req.params.task

    if(todos[todos_task]){
        res.status(200).send(todos[todos_task])
    }else{
        res.status(404).send({
            message: "toDo with given task is not found"
        })
    }

}
exports.createTask = (req,res)=>{
    todos_object = req.body
    task++
    todos_object["task"] = task
    todos[task] = todos_object
  res.status(201).send(todos_object)
}
