import React from "react";
import EntryForm from "./components/EntryForm/EntryForm";

import "./App.css";

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
        <h2>{this.state.items.length}</h2>
        <EntryForm />
      </div>
    );
  }
}
