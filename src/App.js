import React from "react";
import "./style/styles.css";
import "../src/style/nav.css";
import Cards from "./componets/cards/cards";
import NavBar from "../src/componets/navigation/navbar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Cards />
    </div>
  );
}
