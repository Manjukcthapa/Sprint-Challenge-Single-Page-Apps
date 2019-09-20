import React from "react";
import Styled from "styled-components";
const Div = Styled.div`
height:200px;
width:300px;
margin-top:60px;
border: 5px solid grey;

margin-left:70px;

`;

const P = Styled.p`
margin-top:20px;
text-align: center;
`

export default function CharacterCard(props) {
  return (
    <div>
      <div>
        <Div>
          <P>{props.char.name}</P>
          <P>{props.char.type}</P>
          <P>{props.char.dimension}</P>
        </Div>
      </div>
    </div>
  );
}
