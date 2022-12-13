import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import StyledTheme from "../theme/StyledTheme";
import { IconButton } from "@mui/material";

function Material(props) {
  const { data } = props;
  const [isButton, setIsButton] = useState(false);
  const [cdName, setCdName] = useState("");

  useEffect(() => {
    if (data.length > 0) {
      setCdName(data[0].cd_name);
      isButtonDisabled(data[0].material_type);
    }
  }, []);

  const isButtonDisabled = (material_type) => {
    // TODO : '데이터(material_data)'은 버튼이라고 가정(show 예시 데이터)
    if (material_type === "material_data") {
      setIsButton(true);
    }
  };

  return (
    <div className="root" style={useStyles.root}>
      <div className="nameDiv" style={useStyles.nameDiv}>
        <label className="nameLabel" style={useStyles.nameLabel}>
          {cdName}
        </label>
      </div>
      <div className="iconDiv" style={useStyles.iconDiv}>
        {data.map((d) => (
          <IconButton disabled={!isButton} key={d.id}>
            <img
              className="iconImg"
              style={useStyles.iconImg}
              src={process.env.PUBLIC_URL + d.thumbnail_path}
              alt="icon"
            />
          </IconButton>
        ))}
      </div>
    </div>
  );
}

Material.propTypes = {
  data: PropTypes.array.isRequired,
};

const useStyles = {
  root: {
    width: StyledTheme.spacing * 35,
    backgroundColor: StyledTheme.base.section.backgroundColor,
    border: StyledTheme.base.material.border,
  },
  nameDiv: {
    marginTop: StyledTheme.spacing,
    marginRight: StyledTheme.spacing,
    marginBottom: StyledTheme.spacing,
    marginLeft: StyledTheme.spacing,
    border: StyledTheme.base.material.border,
    backgroundColor: StyledTheme.base.header.headerColor,
  },
  nameLabel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: StyledTheme.variables.fontSize,
    fontWeight: "bold",
    color: "white",
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: StyledTheme.spacing,
    marginRight: StyledTheme.spacing,
    marginBottom: StyledTheme.spacing,
    marginLeft: StyledTheme.spacing,
    border: StyledTheme.base.material.border,
  },
  iconImg: {
    // width: StyledTheme.spacing * 7,
    height: StyledTheme.spacing * 5,
  },
};

export default Material;
