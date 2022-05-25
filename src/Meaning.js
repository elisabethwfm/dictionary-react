import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

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
              <Example example={definition.example} />
            </p>
            <p>
              <Synonyms synonyms={definition.synonyms} />
            </p>
            <p>
              <Synonyms synonyms={props.meaning.synonyms} />
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
