import React from "react";
import Task from "./components/task";
import Input from "./components/input";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { id: 0, title: 'Create React app "TodoList"', done: false },
        { id: 1, title: "Drink a cup of tea", done: true },
        { id: 2, title: "Do a phone call", done: false },
      ],
    };
  }

  addTask = (task) => {
    this.setState((state) => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        title: task,
        done: false,
      });
      return tasks;
    });
  };

  doneTask = (id) => {
    const index = this.state.tasks.map((task) => task.id).indexOf(id);
    this.setState((state) => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = (id) => {
    let task_index = this.state.tasks.map((task) => task.id).indexOf(id);
    this.setState((state) => {
      let { tasks } = state;
      tasks.splice(task_index, 1);
      return tasks;
    });
  };

  // Другой вариант deleteTask через метод delete.

  // deleteTask = (id) => {
  //   const index = this.state.tasks.map((task) => task.id).indexOf(id);
  //   this.setState((state) => {
  //     let { tasks } = this.state;
  //     delete tasks[index];
  //     return tasks;
  //   });
  // };

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);

    return (
      <div className="App">
        <h1 className="app-header">Active tasks: {activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map((task) => (
          <Task
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
            task={task}
            key={task.id}
          ></Task>
        ))}
        <Input addTask={this.addTask}></Input>
      </div>
    );
  }
}

export default App;
