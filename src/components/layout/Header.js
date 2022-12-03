import React from "react";
import { IconButton } from "@mui/material";
import { Widgets } from "@mui/icons-material";
import StyledTheme from "../theme/StyledTheme";

function Header() {
  return (
    <div className="root" style={useStyles.root}>
      <div className="headerDiv" style={useStyles.headerDiv}>
        <div className="titleDiv" style={useStyles.titleDiv}>
          <label className="title" style={useStyles.title}>
            Lab4DX
          </label>
        </div>
        {/* <div className="buttonDiv" style={useStyles.buttonDiv}>
          <div>
            <IconButton>
              <Widgets className="icon" style={useStyles.icon} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <Widgets className="icon" style={useStyles.icon} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <Widgets className="icon" style={useStyles.icon} />
            </IconButton>
          </div>
        </div> */}
      </div>
    </div>
  );
}

const useStyles = {
  root: {
    height: StyledTheme.base.header.height,
    backgroundColor: StyledTheme.base.header.headerColor,
  },
  headerDiv: {
    display: "flex",
    // justifyContent: "center",
    height: "100%",
  },
  titleDiv: {
    display: "flex",
    alignItems: "center",
    width: StyledTheme.spacing * 30,
    marginLeft: StyledTheme.spacing * 3,
  },
  title: {
    fontSize: StyledTheme.spacing * 3,
    fontWeight: "bold",
    color: StyledTheme.base.section.backgroundColor,
  },
  buttonDiv: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: StyledTheme.spacing * 4,
  },
};

export default Header;
