import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }
  render() {
    return (
      <div>
        <h1>Shopping List</h1>
      </div>
    );
  }
}
