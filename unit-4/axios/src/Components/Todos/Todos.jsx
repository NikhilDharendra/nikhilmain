import { useState, useEffect } from "react";
import { getTodos } from "./api";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((res) => setTodos(res.data));
  }, []);

  return (
    <div>
      <h1>TODOS</h1>
      {todos.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default Todos;
