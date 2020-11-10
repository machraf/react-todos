import React from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", todos: [] };

    this.counter = 0;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.markTodoAsComplete = this.markTodoAsComplete.bind(this);
    this.unmarkTodoAsComplete = this.unmarkTodoAsComplete.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: this.counter++, name: this.state.value },
      ],
    });
    event.preventDefault();
  }
  deleteTodo(todo) {
    const id = this.state.todos.indexOf(todo);
    const todos = this.state.todos;
    todos.splice(id, 1);
    this.setState({ todos: todos });
  }
  markTodoAsComplete(todo) {
    const id = this.state.todos.indexOf(todo);
    const todos = this.state.todos;
    todos.splice(id, 1, { ...todo, completed: true });
    this.setState({ todos: todos });
  }
  unmarkTodoAsComplete(todo) {
    const id = this.state.todos.indexOf(todo);
    const todos = this.state.todos;
    todos.splice(id, 1, { ...todo, completed: false });
    this.setState({ todos: todos });
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <li key={todo.id}>
        {todo.name}
        <span onClick={() => this.deleteTodo(todo)}>&times;</span>
        {todo.completed ? (
          <span onClick={() => this.unmarkTodoAsComplete(todo)}>&#9745;</span>
        ) : (
          <span onClick={() => this.markTodoAsComplete(todo)}>&#9744;</span>
        )}
      </li>
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
