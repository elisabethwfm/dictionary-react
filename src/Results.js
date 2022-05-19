import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2>
          Word - <span className="word">{props.results.word}</span>
        </h2>
      </div>
    );
  } else {
    return null;
  }
}
