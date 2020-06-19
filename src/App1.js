import React from "react";
import "./App.css";

class App1 extends React.Component {
  state = {
    count: 0,
    text: "",
    data: [],
    color: false,
    search: "",
    filter: [],
  };
  submit = (event) => {
    event.preventDefault();
    let move = [...this.state.data, this.state.text];
    this.setState({ data: move, text: "" });
    console.log(this.state.data);
  };
  filter = (event) => {
    let filterTest = this.state.data.filter((e) =>
      e.includes(event.target.value)
    );
    this.setState({ filter: filterTest });
  };
  ChangeValue = (event) => {
    this.setState({ text: event.target.value });
    console.log(this.state.filter);
  };
  TodoDelete = (index) => {
    this.state.data.splice(index, 1);
    console.log(this.state.data);
  };
  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.submit}>
            <input
              type="text"
              value={this.state.text}
              onChange={this.ChangeValue}
              placeholder="Input Todo"
            ></input>
          </form>
          <input
            type="text"
            onChange={this.filter}
            placeholder="Search"
          ></input>
          <input type="text" name="name" placeholder="Input Name"></input>
          <input type="number" name="price" placeholder="Input Value"></input>
          <input type="file" name="img" accept="image/*"></input>
        </div>
        <ul>
          {this.state.filter.length
            ? this.state.filter.map((element, index) => (
                <li className="todo" key={index}>
                  <h1>{element}</h1>
                  <h2
                    onClick={() => this.TodoDelete(index)}
                    className="todoDelete"
                  >
                    {"\u00D7"}
                  </h2>
                </li>
              ))
            : this.state.data.map((element, index) => (
                <span className="checker">
                  <li className="todo" key={index}>
                    <input type="checkbox" id={`check${index}`}></input>
                    <h1>
                      <label for={`check${index}`}>{element}</label>
                    </h1>
                    <h2
                      onClick={() => this.TodoDelete(index)}
                      className="todoDelete"
                    >
                      {"\u00D7"}
                    </h2>
                  </li>
                </span>
              ))}
        </ul>
        {/* <h1>{this.state.count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          +
        </button>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count - 1,
            })
          }
        >
          -
        </button>
        <button
          onClick={() =>
            this.setState({
              count: 0,
            })
          }
        >
          reset
        </button> */}
      </div>
    );
  }
}
export default App1;
