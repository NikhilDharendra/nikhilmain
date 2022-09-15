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
    getData(`https://reqres.in/api/users?page=2`).then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <h1>Users</h1>
      {/* true && true && "masai" ---> "masai"*/}
      {/* {data && data.data && data.data.map((user) => <p>{user.first_name}</p>)} */}
      <ul>
        {/* true && true && "masai" -->  "masai"*/}

        {data &&
          data?.data &&
          data?.data.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.first_name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Users;
