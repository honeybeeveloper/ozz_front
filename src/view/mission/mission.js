import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import appConfig from "../../common/AppConfig";
import { mapMissionType } from "../../common/util";
import { onAxiosError } from "../../common/Error";
import KnowhowDiv from "../../components/div/KnowhowDiv";
import MaterialDiv from "../../components/div/MaterialDiv";
import QuestDiv from "../../components/div/QuestDiv";
import StyledTheme from "../../components/theme/StyledTheme";

function Mission(props) {
  const { missionType } = props;
  const [missionId, setMissionId] = useState(0);
  const [missionTitle, setMissionTitle] = useState("");
  const [missionDesc, setMissionDesc] = useState("");

  useEffect(() => {
    const mission = mapMissionType(missionType);
    getMissionInfo(mission);
  }, [missionType]);

  // get mission info
  const getMissionInfo = (mission) => {
    axios
      .get(appConfig.apiRoot + "/mission/" + mission)
      .then((response) => {
        setMissionId(response.data.id);
        setMissionTitle(response.data.title);
        setMissionDesc(response.data.description);
      })
      .catch((error) => {
        onAxiosError(error);
      });
  };

  return (
    <div className="root" style={useStyles.root}>
      <div className="titleDiv" style={useStyles.titleDiv}>
        <label className="missionTitle" style={useStyles.missionTitle}>
          {missionTitle}
        </label>
        <label
          className="missionInfo"
          style={useStyles.missionInfo}
          dangerouslySetInnerHTML={{ __html: missionDesc }}
        ></label>
      </div>
      <div className="materialDiv" style={useStyles.materialDiv}>
        <MaterialDiv missionId={missionId}></MaterialDiv>
      </div>
      <div className="knowhowDiv" style={useStyles.knowhowDiv}>
        <KnowhowDiv></KnowhowDiv>
      </div>
      <div className="questDiv" style={useStyles.questDiv}>
        <QuestDiv missionId={missionId}></QuestDiv>
      </div>
    </div>
  );
}

Mission.propTypes = {
  missionType: PropTypes.string.isRequired,
};

const useStyles = {
  root: {
    marginBottom: StyledTheme.spacing * 5,
  },
  titleDiv: {
    display: "grid",
    height: StyledTheme.variables.titleDivHeight,
  },
  missionTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: StyledTheme.spacing * 7,
    fontWeight: "bold",
  },
  missionInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: StyledTheme.spacing * 2,
    wordSpacing: 2,
    lineHeight: 2,
    fontWeight: "bold",
  },
  materialDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: StyledTheme.spacing * 3,
  },
  knowhowDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: StyledTheme.spacing * 10,
  },
  questDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: StyledTheme.spacing * 10,
  },
};

export default Mission;
