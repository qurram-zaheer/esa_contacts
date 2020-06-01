import React, { useState } from "react";
import "./search-box.styles.scss";

const SearchBox = ({ filterContacts }) => {
  const [searchCriteria, setCriteria] = useState({
    name: "",
    number: "",
    email: "",
    location: "",
    gender: "",
  });

  const [searchCat, setCat] = useState("name");

  const handleCat = (e) => {
    setCat(e.target.value);
  };

  const handleChange = (e) => {
    filterContacts({ name: searchCat, value: e.target.value });
  };

  return (
    <div className="search-box">
      <input
        className="search-bar"
        onChange={handleChange}
        type="text"
        placeholder="Search by category using dropdown..."
      ></input>
      <select name="category" onChange={handleCat} className="dropdown">
        {Object.keys(searchCriteria).map((key) => (
          <option value={key} key={key} className="option">
            {key[0].toUpperCase() + key.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBox;
