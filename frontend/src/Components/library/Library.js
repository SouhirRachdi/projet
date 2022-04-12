import React from "react";

const Library = ({el}) => {
  return (   
    <div className="card" style={{width: '40rem'}}>
    <iframe
        className="vide"
        width="300"
        height="215"
        src={el.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
  <div className="card-body">
    <h5 className="card-title">{el.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

  );
};

export default Library;
