import React, { Component } from "react";
import AddTask from "./components/addTask";
import Task from "./components/task";

class App extends Component{
  
  constructor() {
    super();

    this.state = {
      tasks: [],
    };

    this.createTask = this.createTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  createTask(newTask) {
    const { tasks } = this.state; 
    this.setState({
      tasks: [...tasks, newTask],
    });
  }

  removeTask(id){
    const {tasks} = this.state;
    const upedatedTasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: upedatedTasks,
    });
  }
  

  render(){
    const { tasks } = this.state;
      return(
        <>
          <AddTask onCreate={this.createTask}/>
          { tasks.map((task)=> (
            <Task 
            key={task.id} 
            data={task}
            onRemove={this.removeTask}
             />
          )) }
        </>
      );
  }
}

export default App;
