import axios from "axios";

export const getTodos = () => {
  return axios.get(`http://localhost:3002/todos`);
};
