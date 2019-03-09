import React, { Component } from 'react';
import Particles from 'react-particles-js';
import InputForm from '../components/InputForm';
import TaskList from '../components/TaskList';
import axios from 'axios';
import './HomePage.css';
class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputText : "",
            tasks : []
        }
    }
    reload = () => {
        axios.get('http://localhost:3000/todo').then((res)=>{
            this.setState ({ tasks : res.data });
        });
    }
    componentDidUpdate = () => {
        this.reload();   
    }
    componentDidMount = () => {
        this.reload();   
    }
    onChange = (event) => {
        this.setState ({inputText : event.target.value});   
    }
    onSubmit = (event) => {
       /* axios */
       axios.post('http://localhost:3000/todo',{name:this.state.inputText} );
       document.getElementById("nameTextBox").value = "";
       this.reload();
    }

    deleteTask = (event) => {
        axios.post('http://localhost:3000/deleteTodo/' + event.target.id);
        this.reload();
    }
    updateTask = (event) => {
        const tmp = prompt('Enter The Edited Name ');
        axios.post('http://localhost:3000/updateTodo/' + event.target.id, {newname : tmp});
        this.reload();
    }

    finishTask = (event) => {
        console.log(event.target);
        let elem = document.getElementById(event.target.id);
        elem.classList.toggle('finished');
        this.reload();
    }
    render(){
        return(
            <div>
                <InputForm onChange = {this.onChange} onSubmit = {this.onSubmit} />
                <TaskList 
                    tasks = {this.state.tasks} 
                    deleteTask = {this.deleteTask} 
                    updateTask = {this.updateTask} 
                    finishTask = {this.finishTask}
                />
            </div>
        );
    }
}

export default HomePage;