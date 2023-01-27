import { useState } from "react";

export default function Filter({ onSubmit }) {
  const [filter, setFilter] = useState("");
  // console.log(filtxer);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ filter });
    // console.log(filter);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Filter by keywords
        <input type="text" value={filter} onChange={handleFilterChange} />
      </label>
      <button type="submit">искать</button>
    </form>
  );
}
