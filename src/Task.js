import React from "react";

const Task = (props) => {
  return (
    <div key={props.element.id}>
      <input
        type="checkbox"
        disabled={props.element.isDone}
        checked={props.element.isDone}
        onChange={(e) => {}}
        onClick={() => props.handleCheckboxClicked(props.element.id)}
      ></input>
      <label>{props.element.name}</label>
    </div>
  );
};
export default Task;
