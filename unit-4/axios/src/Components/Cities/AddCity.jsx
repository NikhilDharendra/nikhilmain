import { useState } from "react";

function AddCity({ onAddCity }) {
  const [formState, setFormState] = useState({
    name: "",
    population: "",
    country: ""
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    const val = type === "number" ? Number(value) : value;

    setFormState({
      ...formState,
      [name]: val
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCity(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="population"
          type="number"
          placeholder="Population"
          value={formState.population}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="country"
          type="text"
          placeholder="country"
          value={formState.country}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="SUBMIT FORM" />
    </form>
  );
}

export default AddCity;
