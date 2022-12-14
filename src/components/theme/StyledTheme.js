const StyledTheme = {
  spacing: 8,
  base: {
    header: {
      height: 70,
      headerColor: "#5bc4ca",
    },
    section: {
      // backgroundColor: "#f3ece5",
      backgroundColor: "#ffffff",
    },
    button: {
      width: "100px",
      // height: "40px",
      backgroundColor: "#c1c1c1",
      hoverButtonColor: "#d4d3d1",
      labelColor: "#ffffff",
    },
    material: {
      backgroundColor: "#5bc4ca",
      border: "1px solid #c6c6c6",
    },
  },
  variables: {
    fontSize: 20,
    titleDivHeight: 400,
    maxknowhowDivWidth: 1100,
    maxknowhowDivHeight: 250,
  },
  muiTheme: {
    overrides: {
      MuiIconButton: {
        colorPrimary: {
          color: "#dddcda",
        },
      },
    },
  },
};
export default StyledTheme;
