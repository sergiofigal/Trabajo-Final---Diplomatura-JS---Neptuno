import React from "react";
import PropTypes from "prop-types";

const Meme = ({ name, url ,box_count}) => (
  <div className="single-meme">
  <h2>{name}</h2>
  <img src={url} alt={name}></img>
  <p>Me gusta: {box_count}</p>
  </div>
  )

Meme.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  box_count: PropTypes.number.isRequired,
};

export default Meme;
