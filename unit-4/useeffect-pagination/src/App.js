import "./styles.css";
import { useState, useEffect } from "react";
// create a function to get data
const getData = async (page) => {
  try {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );
    let data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default function App() {
  // states which we need to change on the UI
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);

  // this callback function will show its magic when the page loads
  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);

  const fetchAndUpdateData = async () => {
    try {
      setLoading(true);
      const data = await getData();
      setPost(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  const handleChange = (change) => {
    setPage(page + change);
  };

  if (loading === true) {
    return <h1>....is Loading</h1>;
  }

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {post.map((postItem) => (
          <li key={postItem.id}>
            {postItem.id}
            {"==="}
            {postItem.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        onClick={() => {
          handleChange(-1);
        }}
      >
        PREV
      </button>
      <button>{page}</button>
      <button
        onClickCapture={() => {
          handleChange(+1);
        }}
      >
        NEXT
      </button>
    </div>
  );
}
