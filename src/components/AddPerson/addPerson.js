import React, { Component } from "react";

class AddPerson extends Component {
  state = {
    name: "",
    age: ""
  };
  nameChangedHandler = e => {
    this.setState({ name: e.target.value });
  };
  ageChangedHandler = event => {
    this.setState({ age: event.target.value });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.nameChangedHandler}
        />
        <input
          type="number"
          placeholder="age"
          value={this.state.age}
          onChange={this.ageChangedHandler}
        />
        {/* <button onClick={() => this.props.Add(this.state.name, this.state.age)}> */}
        <button
          onClick={() =>
            this.props.personAdded(this.state.name, this.state.age)
          }
        >
          Add Person
        </button>
      </div>
    );
  }
}

export default AddPerson;
