import React from "react";
import PropTypes from "prop-types";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import StyledTheme from "../theme/StyledTheme";
import Quest from "../component/Quest";
import {
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

function QuestDiv() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="root" style={useStyles.root}>
      <div className="titleDiv" style={useStyles.titleDiv}>
        <label className="title" style={useStyles.title}>
          {"퀘스트"}
        </label>
      </div>
      <TableContainer
        className="questContainer"
        style={useStyles.questContainer}
      >
        <Table className="table" style={useStyles.table}>
          <TableBody>
            <TableRow className="tableRow" style={useStyles.tableRow}>
              <TableCell>
                {arr.map(() => (
                  <div className="quest" style={useStyles.quest}>
                    <div className="statusDiv" style={useStyles.statusDiv}>
                      <ArrowForwardIcon></ArrowForwardIcon>
                    </div>
                    <div className="qDiv" style={useStyles.qDiv}>
                      <Quest></Quest>
                    </div>
                  </div>
                ))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

QuestDiv.propTypes = {};

const useStyles = {
  root: { border: "1px solid black" },
  titleDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: StyledTheme.spacing,
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
  questContainer: {
    height: "640px",
  },
  quest: { display: "flex", marginTop: StyledTheme.spacing },
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
