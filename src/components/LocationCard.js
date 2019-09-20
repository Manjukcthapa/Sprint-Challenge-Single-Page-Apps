import React from "react";
import Styled from "styled-components";




export default function CharacterCard(props) {
  return (
    <div>
      <div>
       
        <div>
          <p>{props.char.name}</p>
          <p>{props.char.type}</p>
          <p>{props.char.dimension}</p>
          
        </div>
      
      </div>
    </div>
  );
}
