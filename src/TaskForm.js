import React from 'react';

class TaskForm extends React.Component {
    render() {
        const task = this.props.task;
        return (
           <div className="task-form">
               <h2 className="sub-title">Add your tasks here:</h2>
                <form className="add-tasks">
                    <input type="text" value={task} onChange={this.props.changeHandler} placeholder="Enter your task here" required />
                    <input type="button" value="Add Task" onClick={this.props.submitHandler} />
                </form>
           </div>
        )
    }
}

export default TaskForm;