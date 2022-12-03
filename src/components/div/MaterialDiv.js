import React from "react";
import PropTypes from "prop-types";

import Material from "../Material";
import StyledTheme from "../theme/StyledTheme";

function MaterialDiv() {
  return (
    <div className="root" style={useStyles.root}>
      <div className="titleDiv" style={useStyles.titleDiv}>
        <label className="title" style={useStyles.title}>
          {"필요한 재료"}
        </label>
      </div>
      <div className="contentDiv" style={useStyles.contentDiv}>
        <div className="materialDiv" style={useStyles.materialDiv}>
          <Material name="데이터" isButton={true}></Material>
        </div>
        <div className="materialDiv" style={useStyles.materialDiv}>
          <Material name="데이터" isButton={false}></Material>
        </div>
        <div className="materialDiv" style={useStyles.materialDiv}>
          <Material name="데이터" isButton={false}></Material>
        </div>
      </div>
    </div>
  );
}

MaterialDiv.propTypes = {};

const useStyles = {
  root: {},
  titleDiv: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: StyledTheme.variables.fontSize,
    fontWeight: "bold",
  },
  contentDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: StyledTheme.spacing * 2,
  },
  materialDiv: {
    marginLeft: StyledTheme.spacing * 3,
    marginRight: StyledTheme.spacing * 3,
  },
};

export default MaterialDiv;
