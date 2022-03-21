import React from "react";
import "./App.css";
import EmojiDisplay from "../EmojiDisplay/EmojiDisplay";
import AnimalCard from "../AnimalDataDisplay/AnimalCard";
import data from "../AnimalDataDisplay/data";

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map((information) => `${information[0]}: ${information[1]}`)
    .join("\n");
  alert(alertInformation);
}

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
          <AnimalCard
            additional={animal.additional}
            diet={animal.diet}
            name={animal.name}
            scientificName={animal.scientificName}
            showAdditional={showAdditional}
            size={animal.size}
          />
        ))}
      </div>
    </>
  );
}

export default App;
