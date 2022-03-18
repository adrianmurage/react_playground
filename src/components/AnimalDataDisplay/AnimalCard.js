import React from "react";
import "./AnimalCard.css";

export default function AnimalCard({
  additional,
  diet,
  key,
  name,
  scientificName,
  showAdditional,
  size,
}) {
  return (
    <div key={key}>
      <h3>{name}</h3>
      <h4>{scientificName}</h4>
      <h5>{size} kg</h5>
      <div>{diet.join(", ")}.</div>
      <button onClick={() => showAdditional(additional)}>More Info</button>
    </div>
  );
}
