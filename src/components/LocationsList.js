import React, { useEffect, useState } from "react";
import LocationCard from "../components/LocationCard";
import axios from "axios";

export default function LocationsList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(` https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharacters(res.data.results);
        console.log("results", res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {characters.map(item => {
        return <LocationCard key={item.id} char={item} />;
      })}
    </div>
  );
}
