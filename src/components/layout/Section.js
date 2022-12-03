import React from "react";
import StyledTheme from "../theme/StyledTheme";
import Mission from "../../view/mission/mission";

function Section() {
  return (
    <div className="root" style={useStyles.root}>
      <Mission />
    </div>
  );
}

const useStyles = {
  root: {
    height: `calc(100vh - ${StyledTheme.base.header.height}px)`,
    backgroundColor: StyledTheme.base.section.backgroundColor,
  },
};

export default Section;
