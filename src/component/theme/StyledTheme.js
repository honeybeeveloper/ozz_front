const StyledTheme = {
  spacing: 8,
  base: {
    header: {
      height: 50,
      headerColor: "#f3ece5",
    },
    section: {
      backgroundColor: "#5bc4ca",
    },
    button: {
      backgroundColor: "#c1c1c1",
      hoverButtonColor: "#d4d3d1",
      labelColor: "#1e1e1e",
      labelSize: 16,
    },
  },
  variables: {
    fontSize: 14,
    titleDivHeight: 300,
    contentDivWidth: 1500,
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
