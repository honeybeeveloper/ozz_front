import React from "react";
import { Grid } from "@mui/material";
import StyledTheme from "../theme/StyledTheme";


function Section() {
    return (
        <div className="root" style={useStyles.root}>

        </div>
    );
}

const useStyles = {
    root: {
        height: `calc(100vh - ${StyledTheme.base.header.height}px)`,
        backgroundColor: StyledTheme.base.section.headerColor,
    },
}

export default Section;