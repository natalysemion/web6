import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./style.css";

const Search = () => {
  const [name, setName] = useState("");
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const updateUrl = () => {
      const params = new URLSearchParams(window.location.search);
      if (name) {
        params.set("name", name);
      } else {
        params.delete("name");
      }
      setSearchParams(params);
    };

    updateUrl();
  }, [name, setSearchParams]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="search-container">
      <label htmlFor="name" className="search-label">
        Search by Name:
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        className="search-input"
      />
    </div>
  );
};

export default Search;
