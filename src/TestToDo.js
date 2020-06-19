import React, { Component } from "react";

export default class TestToDo extends Component {
  state = {
    valueTodo: [],
    valueText: "",
    textEdit: null,
  };
  ChangeText = (e) => {
    let Newtext = e.target.value;
    this.setState({ valueText: Newtext });
  };

  SubmitState = (index) => {
    if (index == null) {
      let NewState = [
        ...this.state.valueTodo,
        {
          text: this.state.valueText,
          toggleDelete: false,
          toggleClass: false,
        },
      ];
      this.setState({
        valueTodo: NewState,
        valueText: "",
      });
    } else {
      let Test = this.state.valueTodo.map((e, dix) =>
        dix == index ? { ...e, text: this.state.valueText } : e
      );
      this.setState({
        valueTodo: Test,
        valueText: "",
        textEdit: null,
      });
      //   console.log(Test);
    }
  };
  DeleteState = () => {
    let NewState = [...this.state.valueTodo];
    NewState = NewState.filter((e) => e.toggleDelete == false);
    this.setState({ valueTodo: NewState });
  };
  ToggleStateDelete = (index) => {
    if (this.state.valueTodo[index].toggleDelete == false) {
      let NewState = {
        ...this.state.valueTodo[index],
        toggleDelete: true,
      };
      let NewAllState = [...this.state.valueTodo];
      NewAllState.splice(index, 1, NewState);
      this.setState({ valueTodo: NewAllState });
    } else {
      let NewState = {
        ...this.state.valueTodo[index],
        toggleDelete: false,
      };
      let NewAllState = [...this.state.valueTodo];
      NewAllState.splice(index, 1, NewState);
      this.setState({ valueTodo: NewAllState });
    }
  };

  ToggleStateClass = (index) => {
    if (this.state.valueTodo[index].toggleClass === false) {
      let NewState = {
        ...this.state.valueTodo[index],
        toggleClass: true,
      };
      let NewAllState = [...this.state.valueTodo];
      NewAllState.splice(index, 1, NewState);
      this.setState({ valueTodo: NewAllState });
    } else {
      let NewState = {
        ...this.state.valueTodo[index],
        toggleClass: false,
      };
      let NewAllState = [...this.state.valueTodo];
      NewAllState.splice(index, 1, NewState);
      this.setState({ valueTodo: NewAllState });
    }
  };
  EditState = (event, index) => {
    let edit = { ...this.state.valueTodo[index] };
    this.setState({ valueText: edit.text, textEdit: index });
    this.state.valueText = event.target.value;
  };
  render() {
    return (
      <div>
        <input onChange={this.ChangeText} value={this.state.valueText}></input>
        <button
          onClick={() => this.SubmitState(this.state.textEdit)}
          disabled={!Boolean(this.state.valueText)}
        >
          Submit
        </button>

        <button onClick={this.DeleteState}>Delete</button>
        <ul>
          {this.state.valueTodo.map((e, index) => (
            <div key={index}>
              <li
                style={{
                  color: this.state.valueTodo[index].toggleDelete
                    ? "yellow"
                    : "black",
                  textDecoration: this.state.valueTodo[index].toggleClass
                    ? "line-through"
                    : "none",
                  cursor: "pointer",
                }}
                onClick={() => this.ToggleStateDelete(index)}
              >
                {e.text}
              </li>
              <button onClick={() => this.ToggleStateClass(index)}>
                {this.state.valueTodo[index].toggleClass ? "Done" : "Will"}
              </button>
              <button onClick={(event) => this.EditState(event, index)}>
                Edit
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
