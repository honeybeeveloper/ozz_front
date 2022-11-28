import React from "react";
import { Grid } from "@mui/material";
import Header from "./Header";
import Section from "./Section"
import StyledTheme from "../theme/StyledTheme";


function Layout() {
    return (
        <Grid>
            <Header />
            <Section />
        </Grid>
    );
}


export default Layout;