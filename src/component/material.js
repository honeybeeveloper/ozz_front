import React from "react";
import PropTypes from "prop-types";
import StyledTheme from "./theme/StyledTheme";

function Material(props) {
  const { name } = props;

  return (
    <div className="root" style={useStyles.root}>
      <div className="name" style={useStyles.name}>
        {name}
      </div>
      <div className="icon" style={useStyles.icon}>
        <img
          className="iconImg"
          style={useStyles.iconImg}
          src={process.env.PUBLIC_URL + "/icons/csv_icon.png"}
          alt="icon"
        />
      </div>
    </div>
  );
}

Material.propTypes = {
  name: PropTypes.string.isRequired,
};

const useStyles = {
  root: {
    height: "50px",
    width: "100px",
    backgroundColor: StyledTheme.base.header.headerColor,
    border: "1px solid red",
  },
  name: {},
  icon: {},
  iconImg: {
    width: StyledTheme.spacing * 7,
  },
};

export default Material;
