import React from "react";

export default function Item(props) {
  return (
    <div
      className={props.item.completed ? "Item completed" : "Item incompleted"}
      onClick={(e) => props.toggleComplete(props.index)}
    >
      <p>{props.item.title}</p>
    </div>
  );
}
