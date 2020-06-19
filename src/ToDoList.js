import React from "react";
import { data } from "./App";
import { Link } from "react-router-dom";

export default class ToDoList extends React.Component {
  state = {
    data: [],
    text: "",
  };

  changeText = (event) => {
    let newText = event.target.value;
    this.setState({ text: newText });
  };

  addData = (event) => {
    event.preventDefault();
    let newData = [...this.state.data, [this.state.text, false]];
    this.setState({ data: newData });
    this.setState({ text: "" });
  };

  delete = (event, index) => {
    let deleteNum = [...this.state.data];
    deleteNum.splice(index, 1);
    this.setState({ data: deleteNum });
  };

  toggle = (event, index) => {
    if (this.state.data[index][1] === false) {
      let toggleNum = [...this.state.data[index]];
      toggleNum.splice(1, 1, true);
      let NewData = [...this.state.data];
      NewData.splice(index, 1, toggleNum);
      this.setState({ data: NewData });
    } else {
      let toggleNum = [...this.state.data[index]];
      toggleNum.splice(1, 1, false);
      let NewData = [...this.state.data];
      NewData.splice(index, 1, toggleNum);
      this.setState({ data: NewData });
    }
  };

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <form onSubmit={(event) => this.addData(event)}>
          <input
            type="text"
            onChange={(event) => this.changeText(event)}
            value={this.state.text}
          />
        </form>
        <ul>
          {this.state.data.map((item, index) => (
            <div>
              <button onClick={(event) => this.toggle(event, index)}>
                {this.state.data[index][1] ? "done" : "will"}
              </button>
              <li key={index}>{item}</li>
              <button onClick={(event) => this.delete(event, index)}>X</button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
