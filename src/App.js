import React, { Component } from 'react';
import TaskForm from "./TaskForm";

class App extends Component {
  state = {
    task: "",
    taskList: []
  }

  _changeHandler = (event) => {
    // Capture user input directly to state
    this.setState({task: event.target.value});
  }
  _submitHandler = (event) => {

    // 1. Make a copy of state taskList
    const taskList = [...this.state.taskList];
    // 2. Push in new value to state task
    taskList.push(this.state.task);
    // 3. Update taskList array with new values pushed to state task
    this.setState ({ taskList });

    // Prevent form's default behavior
    event.preventDefault();
  }

  _deleteHandler = (event) => {
    // Create variable to store clicked element
    const clicked = event.target;
    // Go up the DOM tree to parent element
    const parentNode = clicked.parentNode;
    // Use parentNode's properties (id) to know which array value has to be deleted.
    const parentNodeId = parentNode.id;
    const taskList = [...this.state.taskList];
    const newArray = taskList.filter(task =>  task !== parentNodeId);
    this.setState ({ taskList:newArray });
  }

  _renderTaskList = (tasks) => {
    const items = tasks.map((task, index) => {
      // Assign dynamic ID Values to link DOM data to array. **To know which one to delete from array**
      return <li id={task} key={index}>{task}<span onClick={this._deleteHandler} className="delete-task">&#10007;</span></li> 
    }) 
    return items;
  }
  


  render() {
    const tasks = this.state.taskList;
    const items = this._renderTaskList(tasks);
    return (
     <React.Fragment>
        <div className="task-list">
        <h2 className="sub-title">Your tasks are:</h2>
          <ul>{items}</ul>
          {/* {tasks.map((task, index) => <li key={index}>{task}</li>)} */}
        </div>
        <TaskForm
          task = {this.props.task}
          changeHandler = {this._changeHandler}
          submitHandler = {this._submitHandler}
        />
      </React.Fragment>
    );
  }
}

export default App;

