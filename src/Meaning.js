import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meanings">
      <h2>
        {props.meaning.partOfSpeech}
        <br />
        <br />
      </h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h3>Definition: {definition.definition}</h3>
            <p>Example - {definition.example}</p>
          </div>
        );
      })}
      <br />
    </div>
  );
}
