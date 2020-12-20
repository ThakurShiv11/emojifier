import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😃": "smiling",
  "🤣": "laughing",
  "🤑": "money mouth",
  "🤔": "thinking",
  "😡": "angry",
  "👽": "alien"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    const userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Emoji not Found";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    const meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "cyan" }}> Hello </h1>

      <input
        onChange={emojiInputHandler}
        placeholder="Paste the emoji to know it's meaning "
      />

      <h2> {meaning} </h2>

      <h3> Emoji we know </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
