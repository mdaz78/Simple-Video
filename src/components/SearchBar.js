import React, { useState } from "react";

export default function SearchBar({ onTermSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(searchTerm);
  };

  return (
    <div className="search-bar ui segment">
      <div className="ui form">
        <div className="field">
          <form onSubmit={onSubmit}>
            <label htmlFor="">Video Search</label>
            <input
              value={searchTerm}
              type="text"
              name=""
              id=""
              onChange={({ target: { value } }) => setSearchTerm(value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
