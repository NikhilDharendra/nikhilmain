import axios from "axios";

export const getCities = (params = {}) => {
  return axios.get(`http://localhost:3002/cities`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      _sort: params.sort,
      _order: params.order
    }
  });
};

export const addCity = (data = {}) => {
  return axios.post(`http://localhost:3002/cities`, {
    name: data.name,
    country: data.country,
    population: data.population
  });
};

export const deleteCity = (id) => {
  return axios({
    method: "DELETE",
    baseURL: "http://localhost:3002",
    url: `/cities/${id}`
  });
};
