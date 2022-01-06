import React from "react";

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img src={url} class="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default GifGridItem;
