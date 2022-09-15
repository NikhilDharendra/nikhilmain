import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
  const { isAuth, toggleAuth } = React.useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/users" />;
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={toggleAuth}>LOGIN</button>
    </>
  );
};

export default Home;
