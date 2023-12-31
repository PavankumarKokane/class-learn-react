import React from "react";
import PropTypes from "prop-types";

const NewItem = (props) => {
  let { title, description, url, img_url } = props;
  return (
    <div className="card">
      <img
        loading="lazy"
        height={225}
        width={375}
        src={img_url ? img_url : "https://via.placeholder.com/375x225"}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.substring(0, 50) : " "}...
        </h5>
        <p className="card-text">
          {description ? description.substring(0, 150) : " "}...
        </p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          View More
        </a>
      </div>
    </div>
  );
};

NewItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  img_url: PropTypes.string,
};

NewItem.defaultProps = {
  title: "Title",
  description: "Description",
  url: "/",
  img_url: "https://via.placeholder.com/375x225",
};

export default NewItem;