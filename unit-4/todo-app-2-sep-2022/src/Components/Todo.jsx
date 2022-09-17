import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const newTodo = {
      title: text,
      status: false,
      id: new Date().toDateString() + text
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <AddTodo handleAddTodo={handleAddTodo} />
      <ul>
        {todos.map((item) => (
          <TodoItem key={item.id} title={item.title} status={item.status} />
        ))}
      </ul>
    </div>
  );
}
