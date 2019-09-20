import React from "react";
import Styled from "styled-components";




export default function CharacterCard(props) {
  return (
    <div>
      <div>
        <p>
          <Img src={props.char.image}></Img>
        </p>
        <div>
          <P>{props.char.name}</P>
          <P>{props.char.type}</P>
          <P>{props.char.dimension}</P>
          
        </div>
      
      </div>
    </div>
  );
}
