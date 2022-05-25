import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div>
        {props.synonyms.map(function (synonym, index) {
          return <div key={index}>{synonym}</div>;
        })}
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
