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
            <span>
              <strong>Definition: </strong>
              <em>{definition.definition}</em>
              <br />
              <Example example={definition.example} />
              <br />
              <Synonyms synonyms={definition.synonyms} />
              <Synonyms synonyms={props.meaning.synonyms} />
            </span>
            <br />
            <hr width="898" color="#003646" />
            <br />
          </div>
        );
      })}
      <br />
    </div>
  );
}
