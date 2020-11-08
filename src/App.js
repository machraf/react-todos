import React from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", todos: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ todos: [...this.state.todos, this.state.value] });
    event.preventDefault();
  }
  render() {
    const todos = this.state.todos.map((todo, index) => (
      <li key={index}>{todo}</li>
    ));
    return (
      <div className="App">
        <h1>My Todos</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add" />
        </form>
        <ul className="todos">{todos}</ul>
      </div>
    );
  }
}

export default App;
