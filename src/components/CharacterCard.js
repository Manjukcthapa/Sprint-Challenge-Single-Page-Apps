import React from "react";
import Styled from "styled-components"

const Div = Styled.div`

height:100px;
width:200px;
border:3px solid black;

`

export default function CharacterCard(props) {
  return (
    <div>
      <Div>
        <p>{props.char.name}</p>
        <p>{props.char.status}</p>
        <p>{props.char.species}</p>
        <p>{props.char.type}</p>
      </Div>
    </div>
  );
}
