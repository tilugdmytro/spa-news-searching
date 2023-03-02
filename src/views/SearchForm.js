import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function FilterSearchForm({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      return toast.error("Enter the query!");
    }
    setQuery("");
    onSubmit(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Search for an article"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          sx={{ mb: 4 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </>
  );
}
