import React from "react";
import PropTypes from "prop-types";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import StyledTheme from "../theme/StyledTheme";
import Quest from "../component/Quest";

function QuestDiv() {
  return (
    <div className="root" style={useStyles.root}>
      <div className="titleDiv" style={useStyles.titleDiv}>
        <label className="title" style={useStyles.title}>
          {"퀘스트"}
        </label>
      </div>
      <div className="questsDiv" style={useStyles.questsDiv}>
        <div className="quest" style={useStyles.quest}>
          <div className="statusDiv" style={useStyles.statusDiv}>
            <ArrowForwardIcon></ArrowForwardIcon>
          </div>
          <div className="qDiv" style={useStyles.qDiv}>
            <Quest></Quest>
          </div>
        </div>
        <div className="quest" style={useStyles.quest}>
          <div className="statusDiv" style={useStyles.statusDiv}>
            <ArrowForwardIcon></ArrowForwardIcon>
          </div>
          <div className="qDiv" style={useStyles.qDiv}>
            <Quest></Quest>
          </div>
        </div>
        <div className="quest" style={useStyles.quest}>
          <div className="statusDiv" style={useStyles.statusDiv}>
            <ArrowForwardIcon></ArrowForwardIcon>
          </div>
          <div className="qDiv" style={useStyles.qDiv}>
            <Quest></Quest>
          </div>
        </div>
        <div className="quest" style={useStyles.quest}>
          <div className="statusDiv" style={useStyles.statusDiv}>
            <ArrowForwardIcon></ArrowForwardIcon>
          </div>
          <div className="qDiv" style={useStyles.qDiv}>
            <Quest></Quest>
          </div>
        </div>
        <div className="quest" style={useStyles.quest}>
          <div className="statusDiv" style={useStyles.statusDiv}>
            <ArrowForwardIcon></ArrowForwardIcon>
          </div>
          <div className="qDiv" style={useStyles.qDiv}>
            <Quest></Quest>
          </div>
        </div>
      </div>
    </div>
  );
}

QuestDiv.propTypes = {};

const useStyles = {
  root: { border: "1px solid black" },
  titleDiv: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: StyledTheme.variables.fontSize,
    fontWeight: "bold",
  },
  questsDiv: {
    marginTop: StyledTheme.spacing * 2,
    marginBottom: StyledTheme.spacing * 2,
  },
  quest: { display: "flex" },
  statusDiv: {
    display: "flex",
    alignItems: "center",
    marginLeft: StyledTheme.spacing,
    marginRight: StyledTheme.spacing,
  },
  qDiv: {
    marginRight: StyledTheme.spacing * 1,
  },
};

export default QuestDiv;
