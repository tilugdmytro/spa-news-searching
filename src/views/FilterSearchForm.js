import { useState } from "react";
import { toast } from "react-toastify";

export default function FilterSearchForm({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      return toast.error("Введите запрос!");
    }
    setQuery("");
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Filter by keywords
        <input type="text" value={query} onChange={handleChange} />
      </label>
    </form>
  );
}
