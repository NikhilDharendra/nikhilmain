import "./styles.css";
import { useState, useEffect } from "react";

// fetch data from api by function getData
const getData = async () => {
  try {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10`
    );
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  // side effect ke liye useeffect :-jaise hi UI load hoga ....loading show krenge
  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  //  this function works as callback function for useEffect that results in side effect
  const fetchAndUpdateData = async () => {
    try {
      setLoading(true);
      const data = await getData();
      setPosts(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  if (loading === true) {
    return (
      <>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkmlBXsszH55GtWSdoZfipDTg1FiORLMwvRKeeB8dUQ&s"
          alt="loading"
        />
      </>
    );
  }

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {posts.map((postItem) => (
          <li key={postItem.id}>{postItem.title}</li>
        ))}
      </ul>
    </div>
  );
}
