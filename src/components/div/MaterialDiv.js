import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import appConfig from "../../common/AppConfig";
import Material from "../component/Material";
import StyledTheme from "../theme/StyledTheme";
import { onAxiosError } from "../../common/Error";
import { groupBy } from "../../common/util";

function MaterialDiv(props) {
  const { missionId } = props;
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    if (missionId > 0) {
      getMaterials(missionId);
    }
  }, [missionId]);

  const getMaterials = (missionId) => {
    axios
      .get(appConfig.apiRoot + "/material/mission-materials", {
        params: {
          mission_id: missionId,
        },
      })
      .then((response) => {
        const type_arr = groupBy(response.data.materials, "material_type");
        setMaterials(type_arr);
      })
      .catch((error) => {
        onAxiosError(error);
      });
  };

  return (
    <div className="root" style={useStyles.root}>
      <div className="titleDiv" style={useStyles.titleDiv}>
        <label className="title" style={useStyles.title}>
          {"필요한 재료"}
        </label>
      </div>
      <div className="contentDiv" style={useStyles.contentDiv}>
        {Object.entries(materials).map(([key, data]) => (
          <div className="materialDiv" style={useStyles.materialDiv} key={key}>
            <Material material_type={key} data={data}></Material>
          </div>
        ))}
      </div>
    </div>
  );
}

MaterialDiv.propTypes = {
  missionId: PropTypes.number.isRequired,
};

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
  contentDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: StyledTheme.spacing * 2,
  },
  materialDiv: {
    marginLeft: StyledTheme.spacing * 3,
    marginRight: StyledTheme.spacing * 3,
  },
};

export default MaterialDiv;
