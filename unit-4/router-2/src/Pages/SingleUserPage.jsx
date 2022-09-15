import React from "react";
import { useParams } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const SingleUserPage = () => {
  const { user_id } = useParams();
  const [userDetails, setUserDetails] = React.useState({});

  React.useEffect(() => {
    getData(`https://reqres.in/api/users/${user_id}`).then((res) =>
      setUserDetails(res.data)
    );
  }, [user_id]);

  // console.log(userDetails);
  return (
    <>
      <img src={userDetails.avatar} alt="prof-pic" />
      <p>
        Name : {userDetails.first_name} {userDetails.last_name}
      </p>
      <p>Email : {userDetails.email}</p>
    </>
  );
};

export default SingleUserPage;
