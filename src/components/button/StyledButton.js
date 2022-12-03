import React from "react";
import PropTypes from "prop-types";

import { Button } from "@mui/material";

import StyledTheme from "../theme/StyledTheme";

function StyledButton(props) {
  const { name, disabled, onClick } = props;
  return (
    <div className="root" style={useStyles.root}>
      <Button
        className="styledButton"
        style={useStyles.styledButton}
        disabled={disabled}
        onClick={onClick}
      >
        {name}
      </Button>
    </div>
  );
}

StyledButton.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

const useStyles = {
  root: { marginLeft: StyledTheme.spacing },
  styledButton: {
    width: StyledTheme.base.button.width,
    height: StyledTheme.base.button.height,
    backgroundColor: StyledTheme.base.button.backgroundColor,
    justifyContent: "space-around",
    textTransform: "none",
  },
};

export default StyledButton;
