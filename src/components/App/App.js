import React from "react";
import styles from "./App.module.css";
import EmojiDisplay from "../EmojiDisplay/EmojiDisplay";
import AnimalCard from "../AnimalDataDisplay/AnimalCard";
import data from "../AnimalDataDisplay/data";
import CreatingWrappers from "../CreatingWrappers/CreatingWrappers";

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map((information) => `${information[0]}: ${information[1]}`)
    .join("\n");
  alert(alertInformation);
}

function App() {
  return (
    <>
      <div className={styles.emojisWrapper}>
        <h2>
          How To Create React Elements with JSX && <br />
          How To Create Custom Components in React
        </h2>
        <EmojiDisplay />
      </div>

      <hr />

      <div className={styles.animalsWrapper}>
        <h2>How To Customize React Components with Props</h2>
        {data.map((animal) => (
          <AnimalCard
            additional={animal.additional}
            key={animal.name}
            diet={animal.diet}
            name={animal.name}
            scientificName={animal.scientificName}
            showAdditional={showAdditional}
            size={animal.size}
          />
        ))}
      </div>

      <hr />

      <div className={styles.creatingWrappersWrapper}>
        <h2>How To Create Wrapper Components in React with Props</h2>
        {data.map((animal) => (
          <CreatingWrappers name={animal.name} key={animal.name} />
        ))}
      </div>
    </>
  );
}

export default App;
