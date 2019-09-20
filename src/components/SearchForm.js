import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
   <input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search"
        // value={searchTerm}
        // onChange={handleChange}
      />
    </section>
  );
}
