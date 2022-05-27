import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
      //   <div>
      //     <strong>Synonyms: </strong>
      //     {props.synonyms}
      //   </div>
    );
  } else {
    return null;
  }
}
