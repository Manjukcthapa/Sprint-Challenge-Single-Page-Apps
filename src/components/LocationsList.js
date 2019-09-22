import React, { useEffect, useState } from "react";
import LocationCard from "../components/LocationCard";
import Styled from "styled-components";
import axios from "axios";
const Div = Styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-left:40px;
`;

export default function LocationsList() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/ `)
        
      
      .then(res => {
        const data = res.data.results.filter(character =>
            character.name.toLowerCase().includes(query.toLowerCase())
          );
          console.log( data);
          setCharacters(data);
        // setCharacters(res.data.results);
        // console.log("results", res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  }; 

  return (
 
    <Div>
           <form className="search">
    <input
      type="text"
      onChange={handleInputChange}
      value={query}
      name="name"
      tabIndex="0"
      className="prompt search-name"
      placeholder="search by name"
      autoComplete="off"
    />
    </form>
      {characters.map(item => {
        return <LocationCard key={item.id} char={item} />;
      })}
    </Div>
  );
}
