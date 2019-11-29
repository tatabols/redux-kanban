import React from "react";

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

const Task = props => {
  const onStatusChanged = e => {
    props.onStatusChanged(props.task.id, e.target.value);
  };

  return (
    <div className="task">
      <div className="task-header">
        <div>{props.task.title}</div>
        <span>
          <select value={props.task.status} onChange={onStatusChanged}>
            {TASK_STATUSES.map(status => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </span>
      </div>
      <hr />
      <div className="task-body">{props.task.description}</div>
    </div>
  );
};

export default Task;
