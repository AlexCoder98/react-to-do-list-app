import React from "react";

import AddTask from "./AddTask";
import Header from "./Header";
import TaskList from "./TaskList";
import "./App.css";
import "./Header.css";
import "./AddTask.css";
import "./TaskList.css";
import "./Task.css";

class App extends React.Component {
  counter = 5;
  state = {
    tasks: [
      {
        id: 0,
        title: "Uczyć się Reacta i JavaScript",
        date: "27-01-2022",
        active: true,
        priority: true,
        finishDate: null,
      },
      {
        id: 1,
        title: "Wysłać swoje CV",
        date: "28-01-2022",
        active: true,
        priority: false,
        finishDate: null,
      },
      {
        id: 2,
        title: "Przygotować kolację",
        date: "29-01-2022",
        active: true,
        priority: true,
        finishDate: null,
      },
      {
        id: 3,
        title: "Obejrzeć filmik po angielsku",
        date: "30-01-2022",
        active: true,
        priority: true,
        finishDate: null,
      },
      {
        id: 4,
        title: "Kupić coś",
        date: "31-01-2022",
        active: true,
        priority: false,
        finishDate: null,
      },
    ],
  };

  removeTask = (id) => {
    let tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (value, priority, date) => {
    const newTask = {
      id: this.counter,
      title: value,
      date: date,
      active: true,
      priority: priority,
      finishDate: null,
    };
    this.counter++;

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  render() {
    return (
      <div className="ToDoApp">
        <Header />
        <AddTask addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          removeTask={this.removeTask}
          changeTaskStatus={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
