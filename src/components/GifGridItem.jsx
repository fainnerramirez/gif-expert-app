import React from "react";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="col animate__animated animate__fadeInUp">
      <div className="card" style={{ width: "18rem" }}>
        <img src={url} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default GifGridItem;
