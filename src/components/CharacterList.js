import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import Styled from "styled-components";
import axios from "axios";
import SearchForm from "./SearchForm";

const Div = Styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(` https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharacters(res.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        ) );
        console.log("results", res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [query]);

  const handleChange = e => {
    e.preventDefault();
    setQuery(e.target.value);
    // const searchTerm = e.target.value;
    // console.log(e.target.value);
    // setSearchTerm(searchTerm);
    // setSearchResults(
    //   characters.filter(member => member.name.match(searchTerm))
    // );
  };

  return (
    <div>
      <div>
      <SearchForm handleChange={handleChange} searchTerm={query}/>
      </div>
      <Div>
       {characters.map(item => {
        return <CharacterCard key={item.id} char={item} />;
      })}
        </Div>
    </div>
  );
}
