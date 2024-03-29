import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Users from "./Users";
import SingleUserPage from "./SingleUserPage";
import PageNotFound from "./NotFoundPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* 
          path --> what is the path 
          element --> which element you want to show
        */}
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/users/:user_id" element={<SingleUserPage />}></Route>
      {/* /users/ */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AllRoutes;
