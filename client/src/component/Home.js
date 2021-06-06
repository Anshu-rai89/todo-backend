import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import TodoList from "./TodoList";
function Home(props) {
  const [Todos, setTodo] = useState([]);
  const [todo, setToDo] = useState("");
  const [status, setStatus ] = useState(false);

  useEffect(async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:7000/todo/getTodo", {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("todos are ", res.data);
    setTodo(res.data.todos);
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { desc: todo };
    const token = localStorage.getItem("token");
    const res =  axios.post("http://localhost:7000/todo/create", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    setStatus(true);
  };
  if (!localStorage.getItem("token")) {
    return <Redirect to="/signin" />;
  }
  return (
    <div>
      Welcome at home
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" onChange={(e) => setToDo(e.target.value)} />
        </div>

        <button className="btn btn-primary">Add</button>
      </form>
      {Todos.length ? <TodoList Todos={Todos} /> : <h1>Loadiing....</h1>}
    </div>
  );
}

export default Home;
