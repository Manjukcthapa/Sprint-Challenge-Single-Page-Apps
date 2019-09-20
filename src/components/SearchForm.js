import React, { useState } from "react";

export default function SearchForm() {
 
  return (
    <section className="search-form">
   <input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </section>
  );
}
