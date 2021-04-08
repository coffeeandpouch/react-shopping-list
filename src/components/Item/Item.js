import React from "react";

export default function Item(props) {
  return (
    <div
      className={props.items.completed ? "Item completed" : "Item incompleted"}
      onClick={(e) => props.toggleComplete(props.index)}
    >
      <p>{props.items.title.amount}</p>
    </div>
  );
}
