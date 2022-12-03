import React from "react";
import PropTypes from "prop-types";

import { Button } from "@mui/material";

function QuestButton(props) {
  const { name, disabled } = props;

  return (
    <Button
      className="questButton"
      style={useStyles.questButton}
      disabled={disabled}
    >
      {name}
    </Button>
  );
}

QuestButton.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

const useStyles = {
  questButton: {
    backgroundColor: "pink",
  },
};

export default QuestButton;
