import React from "react";
import Styled from "styled-components"

const Div = Styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;


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
