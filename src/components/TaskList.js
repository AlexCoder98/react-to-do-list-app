import React from "react";
import Task from "./Task";

const doDoes = "The amount of tasks to do: ";
const dones = "The amount of done tasks: ";
const CONGRATULATIONS = "Congratulations! You have done all your tasks!";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      if (a.finishDate > b.finishDate) {
        return -1;
      }
      return 0;
    });
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.title.toLowerCase();
      b = b.title.toLowerCase();

      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  }

  const activeTaskElement = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      removeTask={props.removeTask}
      changeTaskStatus={props.changeTaskStatus}
    />
  ));
  const doneTaskElement = done.map((task) => (
    <Task key={task.id} task={task} removeTask={props.removeTask} />
  ));

  return (
    <div className="list">
      <h2>
        {doDoes} <span> {active.length}</span>
      </h2>
      {active.length ? (
        activeTaskElement
      ) : (
        <h3 className="congrats">{CONGRATULATIONS}</h3>
      )}
      <h2>
        {dones}
        <span>{done.length}</span>
      </h2>
      {doneTaskElement.slice(0, 5)}
    </div>
  );
};

export default TaskList;
