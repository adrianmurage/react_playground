import React from "react";
import styles from "./EmojiDisplay.module.css";

const displayEmojiName = (event) => alert(event.target.id);
const emojis = [
  {
    emoji: "😀",
    name: "grinning face",
  },
  {
    emoji: "🎉",
    name: "party popper",
  },
  {
    emoji: "💃",
    name: "woman dancing",
  },
];

function EmojiDisplay() {
  const displayAction = true;
  return (
    <>
      <h3>Hello, World</h3>
      {displayAction && <p>I am writing JSX</p>}
      <ul className={styles["emoji-list"]}>
        {emojis.map((emoji) => (
          <li className={styles["emoji-list-item"]} key={emoji.name}>
            <button className={styles["emoji-btn"]} onClick={displayEmojiName}>
              <span role="img" aria-label={emoji.name} id={emoji.name}>
                {emoji.emoji}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EmojiDisplay;
