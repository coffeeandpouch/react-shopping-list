import React from "react";
import EntryForm from "./components/EntryForm/EntryForm";
import Item from "./components/Item/Item";

import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          tile: "Apples",
          completed: false,
        },
        {
          title: "Bananas",
          completed: true,
        },
        {
          title: "Oranges",
          completed: false,
        },
      ],
    };
  }

  addEntry = (e) => {
    e.preventDefault();
    this.setState({
      items: [...this.state.items, { title: e.target.value, completed: false }],
    });
  };

  toggleComplete = (index) => {
    let items = this.state.items;
    items[index].completed = !items[index].completed;
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        <h2>{this.state.items.length}</h2>
        <EntryForm />
        <section className="items">
          {this.state.items.map((item, index) => (
            <Item
              key={index}
              index={index}
              item={item}
              toggleComplete={this.toggleComplete}
            />
          ))}
        </section>
      </div>
    );
  }
}
