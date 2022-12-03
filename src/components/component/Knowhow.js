import React from "react";
import PropTypes from "prop-types";
import StyledTheme from "../theme/StyledTheme";

function Knowhow(props) {
  return (
    <div className="root" style={useStyles.root}>
      <div className="ThumbnailDiv" style={useStyles.nameDiv}>
        <img
          className="thumbnail"
          style={useStyles.thumbnail}
          src={process.env.PUBLIC_URL + "/images/knowhow.jpg"}
          alt="icon"
        />
      </div>
      <label className="title" style={useStyles.title}>
        {"페르소나란 무엇인가?"}
      </label>
    </div>
  );
}

Knowhow.propTypes = {};

const useStyles = {
  root: {},
  ThumbnailDiv: {},
  thumbnail: { width: StyledTheme.spacing * 30 },
  title: {
    display: "flex",
    justifyContent: "center",
    fontSize: StyledTheme.variables.fontSize - 4,
    fontWeight: "bold",
  },
};

export default Knowhow;
