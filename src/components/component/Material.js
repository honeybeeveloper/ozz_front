import React from "react";
import PropTypes from "prop-types";
import StyledTheme from "../theme/StyledTheme";
import { IconButton } from "@mui/material";

function Material(props) {
  const { name, isButton } = props;

  return (
    <div className="root" style={useStyles.root}>
      <div className="nameDiv" style={useStyles.nameDiv}>
        <label className="nameLabel" style={useStyles.nameLabel}>
          {name}
        </label>
      </div>
      <div className="iconDiv" style={useStyles.iconDiv}>
        <IconButton disabled={!isButton}>
          <img
            className="iconImg"
            style={useStyles.iconImg}
            src={process.env.PUBLIC_URL + "/icons/csv_icon.png"}
            alt="icon"
          />
        </IconButton>
      </div>
    </div>
  );
}

Material.propTypes = {
  name: PropTypes.string.isRequired,
  isButton: PropTypes.bool.isRequired,
};

const useStyles = {
  root: {
    // height: StyledTheme.spacing * 20,
    width: StyledTheme.spacing * 30,
    backgroundColor: StyledTheme.base.section.backgroundColor,
    border: StyledTheme.base.material.border,
  },
  nameDiv: {
    marginTop: StyledTheme.spacing,
    marginRight: StyledTheme.spacing,
    marginBottom: StyledTheme.spacing,
    marginLeft: StyledTheme.spacing,
    border: StyledTheme.base.material.border,
    backgroundColor: StyledTheme.base.header.headerColor,
  },
  nameLabel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: StyledTheme.variables.fontSize,
    fontWeight: "bold",
    color: "white",
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: StyledTheme.spacing,
    marginRight: StyledTheme.spacing,
    marginBottom: StyledTheme.spacing,
    marginLeft: StyledTheme.spacing,
    paddingTop: StyledTheme.spacing,
    paddingBottom: StyledTheme.spacing,
    border: StyledTheme.base.material.border,
  },
  iconImg: {
    width: StyledTheme.spacing * 7,
  },
};

export default Material;
