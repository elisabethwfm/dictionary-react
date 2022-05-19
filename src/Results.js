import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2>Hello from results</h2>
        <h2>{props.results.word}</h2>
      </div>
    );
  } else {
    return null;
  }
}
