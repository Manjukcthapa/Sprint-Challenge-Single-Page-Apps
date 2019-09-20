import React from "react";
import Header from "./components/Header.js";
import Router from "./components/Router";
import TabFile from "./components/TabFile"


export default function App() {
  return (
    <main>
      <Header />
      <Router/>
      <TabFile/>
    </main>
  );
}
