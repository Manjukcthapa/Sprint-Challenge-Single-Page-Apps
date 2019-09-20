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

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/ `)
      .then(res => {
        setCharacters(res.data.results);
        console.log("results", res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Div>
      {characters.map(item => {
        return <LocationCard key={item.id} char={item} />;
      })}
    </Div>
  );
}
