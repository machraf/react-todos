function Todo(props) {
  return <li key={props.todo.id}>{props.todo.name}</li>;
}

export default Todo;
