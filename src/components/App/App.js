import React from "react";
import "./App.css";
import EmojiDisplay from "../EmojiDisplay/EmojiDisplay";
import AnimalCard from "../AnimalDataDisplay/AnimalCard";
import data from "../AnimalDataDisplay/data";

function App() {
  return (
    <>
      <div className="emojis-wrapper">
        <h2>Emojis</h2>
        <EmojiDisplay />
      </div>
      <hr />
      <div className="animals-wrapper">
        <h2>Animals</h2>
        {data.map((animal) => (
          <AnimalCard key={animal.name} />
        ))}
      </div>
    </>
  );
}

export default App;
