import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="photos">
        {props.photos.map(function (photo, index) {
          return (
            <a
              href={photo.src.original}
              target="_blank"
              rel="noreferrer"
              className="individualPhoto"
            >
              <img src={photo.src.tiny} alt="dictPic" key="index" />
            </a>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
