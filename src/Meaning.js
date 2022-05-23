import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meanings">
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> <em>{definition.definition}</em>
            </p>
            <p>
              <strong>Example</strong> - {definition.example}
            </p>
            <br />
            <hr width="1000" color="#58C9DB" />
            <br />
          </div>
        );
      })}
      <br />
    </div>
  );
}
