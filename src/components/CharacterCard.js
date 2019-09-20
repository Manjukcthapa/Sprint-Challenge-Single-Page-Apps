import React from "react";

export default function CharacterCard(char) {
  return (
    <div>
      <div>
        <p>{char.name}</p>
        <p>{char.status}</p>
        <p>{char.species}</p>
        <p>{char.type}</p>
      </div>
    </div>
  );
}
