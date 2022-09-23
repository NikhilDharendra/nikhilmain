import { useState, useEffect } from "react";
import { getCities, addCity, deleteCity } from "./api";
import AddCity from "./AddCity";

function Cities() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchCitiesDataAndUpdate = (page) => {
    getCities({ page, limit: 5, sort: "name", order: "asc" })
      .then((res) => setData(res.data))
      .catch((err) => console.log("error is ", err))
      .finally(() => console.log("call completed"));
  };

  useEffect(() => {
    fetchCitiesDataAndUpdate(page);
  }, [page]);

  const handleAddCity = (data) => {
    // make a post request call
    addCity(data).then(() => {
      fetchCitiesDataAndUpdate(page);
      alert(`city has been added successfully`);
    });
  };

  const handleDelete = (id) => {
    deleteCity(id).then(() => fetchCitiesDataAndUpdate(page));
  };

  return (
    <div>
      <h1>Cities</h1>
      <AddCity onAddCity={handleAddCity} />
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "40%",
            margin: "auto"
          }}
        >
          <div>{item.name}</div>
          <button onClick={() => handleDelete(item.id)}>DELETE</button>
        </div>
      ))}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </button>
      <button>{page}</button>
      <button onClick={() => setPage(page + 1)}>NEXT</button>
    </div>
  );
}

export default Cities;
