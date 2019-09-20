import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <div>
        <p>{props.char.name}</p>
        <p>{props.char.status}</p>
        <p>{props.char.species}</p>
        <p>{props.char.type}</p>
      </div>
    </div>
  );
}
