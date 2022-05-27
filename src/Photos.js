import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="photos">
        {props.photos.map(function (photo, index) {
          return <img src={photo.src.tiny} alt="dictPic" key="index" />;
        })}
      </section>
    );
  } else {
    return null;
  }
}
