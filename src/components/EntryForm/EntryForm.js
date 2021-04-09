import React from "react";

export default function addEntry(props) {
  return (
    <div className="addItem">
      <form onSubmit={(e) => props.addEntry(e)}>
        <input
          type="text"
          name="item"
          placeholder="Shopping Item"
          aria-label="Shopping Item"
        ></input>
        <input
          type="submit"
          name="submit"
          value="submit"
          aria-label="Submit Item"
        ></input>
      </form>
    </div>
  );
}
