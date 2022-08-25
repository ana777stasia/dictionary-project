import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span>{props.phonetic.text}</span>
      <br />
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
    </div>
  );
}
