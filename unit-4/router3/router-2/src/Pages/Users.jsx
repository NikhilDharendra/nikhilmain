import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const Users = () => {
  const [data, setData] = useState({});

  // on component load
  // i want to get a list of users in this page
  // i want to render it to the UI

  useEffect(() => {
    getData(`https://reqres.in/api/users`).then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <h1>Users</h1>
      <div>
        {data?.data?.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <img src={user.avatar} alt="prof-pic" />
            <Link to={`/users/${user.id}`}>More Details</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
