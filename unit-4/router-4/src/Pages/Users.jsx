import { useState, useEffect } from "react";
// 1.
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const Users = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  // const navigate = useNavigate();
  // 2
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getData(`https://reqres.in/api/users?page=${page}`).then((res) => {
      setData(res);
    });
    // 3. DATA SHOULD BE CHANGED BASIS THE PAGE NUMBER
  }, [page]);

  // const isAuth = true;

  useEffect(() => {
    setSearchParams({ page });
  }, [page]);

  return (
    <>
      <h1>Users</h1>
      {/* <button onClick={() => navigate("/")}>
        GO TO HOME PAGE USING useNavigate hook
      </button>
      <Link to="/">
        <button>GO TO HOME PAGE USING Link</button>
      </Link> */}

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
      {/* STEP 2 : TO HAVE PAGINATION IMPLEMENTED */}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </button>
      <button>{page}</button>
      <button disabled={page === 2} onClick={() => setPage(page + 1)}>
        NEXT
      </button>
    </>
  );
};

export default Users;
