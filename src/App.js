import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          tile: "Apples",
          amount: 2,
          completed: false,
        },
        {
          title: "Bananas",
          amount: 4,
          completed: true,
        },
        {
          title: "Oranges",
          amount: 5,
          completed: false,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        <p>{this.state.items.map(this.state.items())}</p>
      </div>
    );
  }
}
