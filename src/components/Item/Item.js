import React from "react";

export default function Item(props) {
  return (
    <div
      className={props.item.completed ? "Item completed" : "Item incompleted"}
      onClick={(e) => props.toggleComplete(this.statw.props.index)}
    >
      <p>{props.item.title}</p>
      <a
        href="/deleteItem"
        className="del"
        onClick={(e) => props.deleteItem(e, props.index)}
      >
        X
      </a>
    </div>
  );
}
