import React from 'react';
import { useState } from "react";
import { toast } from "react-toastify";
import { TextField, InputAdornment } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

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
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Search for article"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TravelExploreIcon />
              </InputAdornment>
            ),
          }}
        />
        {/* <label>
          Search for article
          <input type="text" value={query} onChange={handleChange} />
        </label> */}
      </form>
    </>
  );
}
