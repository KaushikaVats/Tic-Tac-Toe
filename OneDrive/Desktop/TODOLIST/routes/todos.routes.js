const toDo_controller = require("../controllers/todos.controller")

module.exports =(app)=>{
    app.get("/toDoApp/api/v1/todosList" ,toDo_controller.getToDos)
    
    app.get("/toDoApp/api/v1/todosList/:task" , toDo_controller.getToDosBasedOnTask)
    app.post("/toDoApp/api/v1/todosList" , toDo_controller.createTask)
    app.put("/toDoApp/api/v1/todosList/:task" , toDo_controller.updateTask)

   // app.post("/toDoApp/api/v1/todosList" , toDo_controller.createToDoTask)
}