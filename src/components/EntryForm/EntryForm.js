import React from "react";

export default function AddItem(props) {
  return (
    <div className="addItem">
      <form onSubmit={(e) => props.addEntry(e)}>
        <input
          type="text"
          name="item"
          paceholder="Shopping Item"
          aria-label="Shopping Item"
        ></input>
        <input
          type="submit"
          name="submit"
          value="Submit"
          aria-label="Submit Item"
        ></input>
      </form>
    </div>
  );
}
