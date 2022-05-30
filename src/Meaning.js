import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meanings">
      <section>
        <h2>{props.meaning.partOfSpeech}</h2>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <span className="definitionTest">
                  <br />
                  <strong>Definition: </strong>
                  <em>{definition.definition}</em>
                  <br />
                  <Example example={definition.example} />
                  <br />
                  <br />
                  <strong>Synonyms: </strong>
                  <Synonyms synonyms={definition.synonyms} />
                  {/* <Synonyms synonyms={props.meaning.synonyms} /> */}
                </span>
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
