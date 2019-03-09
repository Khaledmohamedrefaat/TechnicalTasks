const Todo = require("../models/Todo");

class TodoController {
    constructor(app){
        app.post('/todo', this.createTodo);
        app.get('/todo', this.getTodos);
        app.post('/deleteTodo/:id', this.deleteTodo);
        app.post('/updateTodo/:id', this.updateTodo);
    };
    createTodo(req, res){
        const body = req.body;
        let todo = new Todo({name:body.name, finished: false});
        todo.save((err, obj)=>{
            if(err){
                console.log(err);
            }
            console.log(obj);
            res.status(201).json(obj);
        });
    }
    getTodos(req, res){
        Todo.find({}).then((todos)=>{
            res.status(200).json(todos);
        });
    }
    deleteTodo(req, res){
        const body = req.body;
        const ID = req.params.id;
        Todo.deleteOne({_id:ID}, (err, obj)=>{
            if ( err ){
                console.log(err);
                console.log(obj);
            }
            res.status(200).send("Successful");
        });
    }
    updateTodo(req, res){
        const body = req.body;
        const ID = req.params.id;
        Todo.updateOne({_id:ID},{ name:body.newname },(err, obj)=>{
            if ( err ){
                console.log(err);
                console.log(obj);
            }
            res.status(200).send("Successful");
        });
    }
};

module.exports = TodoController;