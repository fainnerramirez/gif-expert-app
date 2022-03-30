import React from "react";
import PropsTypes from "prop-types";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="col animate__animated animate__fadeInUp">
      <div className="card" style={{ width: "17rem" }}>
        <img src={url} className="card-img-top" alt={title} />
        <div className="card-body bg-warning">
          <h5 className="card-title text-center">{title}</h5>
        </div>
      </div>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropsTypes.string.isRequired,
  url: PropsTypes.string.isRequired,
};

export default GifGridItem;
