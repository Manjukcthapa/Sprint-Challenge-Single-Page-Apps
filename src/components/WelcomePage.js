import React from "react";
import Styled from "styled-components"
const  Img = Styled.img`
height:350px;
width:400px;
border-radius:50%;
margin-left:300px;
border:5px solid grey;

`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
