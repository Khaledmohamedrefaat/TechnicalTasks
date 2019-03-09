import React from 'react'
import './TaskList.css'
const TaskList = (props) => {
    return (
        <div>
            <h1 class="f3 bold center mw3 ">Tasks</h1>
            <ul class="list pl0 ml0 center mw5 ba b--light-silver br3" >
                {
                    props.tasks.map((obj, ind)=>{
                        return(
                            <div>
                                <div class="flex justify-around">
                                    <li class=" w-50 ph3 pv2 bb b--light-silver center"
                                        id = {obj._id} 
                                        onClick = {props.finishTask} 
                                    >{obj.name}</li> 
                                    <button 
                                        class=" w-25 center no-underline f6 tc pv2 bg-animate bg-black-70 hover-bg-dark-blue white br2"
                                        id = {obj._id} 
                                        onClick = {props.updateTask} 
                                    >Edit</button> 
                                    <button
                                        class=" w-25 center no-underline f6 tc pv2 bg-animate bg-black-70 hover-bg-dark-blue white br2"
                                        id = {obj._id} 
                                        onClick = {props.deleteTask}
                                    >Delete</button>
                                </div>
                            </div>
                        );
                    })
                }
            </ul>
        </div>  
    );
}

export default TaskList;
