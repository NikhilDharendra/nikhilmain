function TodoItem({ title, status }) {
  return (
    <li>
      {title} - {status ? "Completed" : "Not Completed"}
    </li>
  );
}

export default TodoItem;
