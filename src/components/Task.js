import React from "react";

const ADD = "Done";
const DELETE = "X";

const Task = (props) => {
  const style = {
    color: "red",
  };

  const { id, title, active, priority, date, finishDate } = props.task;

  if (active) {
    return (
      <ul className="activeTaskList">
        <li style={priority ? style : null}>
          <div className="taskName">
            The task <strong>"{title}"</strong> has been accepted. Finish until
            the
            <span> {date}</span>
          </div>
          <div className="buttons">
            <button onClick={() => props.changeTaskStatus(id)}>{ADD}</button>
            <button onClick={() => props.removeTask(id)}>{DELETE}</button>
          </div>
        </li>
      </ul>
    );
  } else {
    const finish = new Date(finishDate).toLocaleDateString();
    return (
      <ul className="doneTaskList">
        <li style={priority ? style : null}>
          <div className="taskName">
            The task <strong>"{title}"</strong> has done on
            <span> {finish}</span>
          </div>
          <div className="buttons">
            <button className="oneButton" onClick={() => props.removeTask(id)}>
              {DELETE}
            </button>
          </div>
        </li>
      </ul>
    );
  }
};

export default Task;
