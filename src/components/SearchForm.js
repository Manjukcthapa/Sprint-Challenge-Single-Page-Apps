import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
   <input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search"
        value={props.searchTerm}
        onChange={props.handleChange}
      />
    </section>
  );
}
