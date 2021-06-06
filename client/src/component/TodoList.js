import React from "react";

function TodoList(props) {
  const { Todos } = props;
  console.log("toso are ", Todos);
  return (
    <div>
      Todo
      {Todos.length > 0 && Todos.map((todo) => <div>{todo.desc}</div>)}
    </div>
  );
}

export default TodoList;
