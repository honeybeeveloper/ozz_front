import React from "react";
import PropTypes from "prop-types";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import Knowhow from "../component/Knowhow";
import StyledTheme from "../theme/StyledTheme";

function KnowhowDiv() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="root" style={useStyles.root}>
      <div className="titleDiv" style={useStyles.titleDiv}>
        <label className="title" style={useStyles.title}>
          {"노하우"}
        </label>
      </div>
      <TableContainer
        className="knowhowContainer"
        style={useStyles.knowhowContainer}
      >
        <Table className="table" style={useStyles.table}>
          <TableBody>
            <TableRow className="tableRow" style={useStyles.tableRow}>
              {arr.map((ele) => (
                <TableCell key={ele}>
                  <Knowhow></Knowhow>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

KnowhowDiv.propTypes = {};

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
  knowhowContainer: {
    // display: "flex",
    // overflowX: "auto",
    width: StyledTheme.variables.maxknowhowDivWidth,
    // height: StyledTheme.variables.maxknowhowDivHeight,
  },
  table: {},
  tableRow: {},
};

export default KnowhowDiv;
