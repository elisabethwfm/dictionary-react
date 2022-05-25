import React from "react";

export default function Phonetics(props) {
  console.log(props);
  return (
    <div>
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <br />
      {props.phonetics.text}
    </div>
  );
}
