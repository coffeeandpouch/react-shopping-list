import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          Apples: false,
          amount: 2,
        },
        {
          Bananas: true,
          amount: 4,
        },
      ],
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
