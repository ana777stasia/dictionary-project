import React from "react";
import "./Photos.css"

export default function Photos(props) {
  console.log("Ansn ==>", props.photos);
  if (props.photos) {
    return (
      <section className="Photos shadow">
        <div className="row">
          {props.photos.map((photo, index) => {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt="/"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
