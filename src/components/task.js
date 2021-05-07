import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, ...props }) => {
  const ActionButton = () => (
    <div className="action-btn">
      {!task.done ? (
        <FontAwesomeIcon onClick={props.doneTask} icon={faCheck} />
      ) : (
        <FontAwesomeIcon onClick={props.deleteTask} icon={faTimes} />
      )}
    </div>
  );

  const className = "task " + (task.done ? "task-done" : "");

  return (
    <div className={className}>
      <p>{task.title}</p>
      <ActionButton></ActionButton>
    </div>
  );
};

export default Task;
