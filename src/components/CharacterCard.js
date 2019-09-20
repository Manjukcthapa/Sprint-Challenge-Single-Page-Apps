import React from "react";
import Styled from "styled-components";


const Div = Styled.div`
height:480px;
width:400px;
margin-top:60px;
border: 5px solid grey;
padding:0px;
margin-left:50px;

`;
const P = Styled.p`
margin-left:150px;
`;

const Img = Styled.img`
width:400px;
height:300px;
`;

export default function CharacterCard(props) {
  return (
    <div>
      <Div>
        <p>
          <Img src={props.char.image}></Img>
        </p>
        <div>
          <P>{props.char.name}</P>
          <P>{props.char.status}</P>
          <P>{props.char.species}</P>
          <P>{props.char.type}</P>
        </div>
        {/* <p><img src={props.char.image}></img></p> */}
      </Div>
    </div>
  );
}
