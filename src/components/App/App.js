import React from "react";
import styles from "./App.module.css";
import EmojiDisplay from "../EmojiDisplay/EmojiDisplay";
import AnimalCard from "../AnimalDataDisplay/AnimalCard";
import data from "../AnimalDataDisplay/data";
import CreatingWrappers from "../CreatingWrappers/CreatingWrappers";
import Alert from "../Alert/Alert";
import CartSuccess from "../CartSuccess/CartSuccess";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    padding: 20,
  },
});

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map((information) => `${information[0]}: ${information[1]}`)
    .join("\n");
  alert(alertInformation);
}

function App() {

  const classes = useStyles()
  const wrapper = {
    padding: 20,
  };
  return (
    <>
      <h2>
        How To Create React Elements with JSX && <br />
        How To Create Custom Components in React
      </h2>
      <div className={styles["emojis-wrapper"]}>
        <EmojiDisplay />
      </div>

      <hr />

      <h2>How To Customize React Components with Props</h2>
      <div className={styles["animals-wrapper"]}>
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

      <h2>How To Create Wrapper Components in React with Props</h2>
      <div className={styles["creatingwrappers-wrapper"]}>
        {data.map((animal) => (
          <CreatingWrappers
            diet={animal.diet}
            key={animal.name}
            name={animal.name}
            size={animal.size}
            scientificName={animal.scientificName}
          />
        ))}
      </div>

      <hr />
      <h2>How To Style React Components</h2>
      <div className={classes.wrapper}>
        <Alert title="Items Not Added" type="error">
          <div>Your items are out of stock.</div>
        </Alert>
        <CartSuccess />
      </div>
    </>
  );
}

export default App;
