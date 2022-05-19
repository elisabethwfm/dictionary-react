import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <h2>
          Word - <span className="word">{props.results.word}</span>
        </h2>
        {props.results.meanings.map(function (meanings, index) {
          return;
          <div key={index} className="meanings">
            return meanings.definitions[0].definition;
          </div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
