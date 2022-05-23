import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meanings">
      <h2>
        {props.meaning.partOfSpeech}
        <br />
      </h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h3>
              <span>Definition:</span> <em>{definition.definition}</em>
            </h3>
            <p>Example - {definition.example}</p>
          </div>
        );
      })}
      <br />
    </div>
  );
}
