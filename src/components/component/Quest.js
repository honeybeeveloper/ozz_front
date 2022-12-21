import React, { useState, useEffect } from "react";

import axios from "axios";
import PropTypes from "prop-types";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { IconButton } from "@mui/material";

import appConfig from "../../common/AppConfig";
import { onAxiosError } from "../../common/Error";
import StyledTheme from "../theme/StyledTheme";
import QuestButton from "../button/QuestButton";
import StyledButton from "../button/StyledButton";

function Quest(props) {
  const {
    data,
    missionId,
    ongoing,
    setOngoingQuestId,
    setShowingOrder,
    isLast,
  } = props;
  const [existLinkQuestCd, setExistLinkQuestCd] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setExistLinkQuestCd(!Object.is(data.link_quest_cd, null));
  }, [data.link_quest_cd]);

  const onHandleQuest = () => {
    const questStatus = true;
    const nextQuestOrder = data.quest_order + 1;
    setIsSuccess(questStatus);
    setShowingOrder(nextQuestOrder);
    updateCompleteQuest();
  };

  const handleLinkQuestButton = (event) => {
    setOngoingQuestId(parseInt(event.currentTarget.dataset.linkQuestId));
  };

  const updateCompleteQuest = () => {
    const status = "S";

    axios
      .post(appConfig.apiRoot + "/quest/completion", {
        user_id: 1,
        mission_id: missionId,
        quest_id: data.id,
        quest_order: data.quest_order,
        status: status,
        is_last: isLast,
      })
      .then((response) => {
        setOngoingQuestId(response.data.quest_id);
      })
      .catch((error) => {
        onAxiosError(error);
      });
  };

  return (
    <div className="root" style={useStyles.root}>
      <div className="leftDiv" style={useStyles.leftDiv}>
        <div className="questTitleDiv" style={useStyles.questTitleDiv}>
          <div className="idDiv" style={useStyles.idDiv}>
            <QuestButton
              name={data.quest_cd}
              disabled={true}
              isMain={true}
            ></QuestButton>
          </div>
          <div className="titleDiv" style={useStyles.titleDiv}>
            <label className="title" style={useStyles.title}>
              {data.quest_name}
            </label>
          </div>
          <div className="stampDiv" style={useStyles.stampDiv}>
            <IconButton
              className="checkButton"
              style={
                isSuccess ? useStyles.successCheckButton : useStyles.checkButton
              }
              onClick={onHandleQuest}
            >
              <CheckCircleIcon
                className="checkCircleIcon"
                style={useStyles.checkCircleIcon}
              />
            </IconButton>
          </div>
        </div>
        <div
          className="questTitleInfoDiv"
          style={useStyles.questTitleInfoDiv}
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
        <div
          className="questButtonDiv"
          style={
            existLinkQuestCd ? useStyles.buttonDiv : useStyles.buttonDivEnd
          }
        >
          {existLinkQuestCd && (
            <QuestButton
              name={data.link_quest_cd}
              disabled={!existLinkQuestCd}
              isMain={false}
              linkQuestId={data.link_quest_id}
              onClick={handleLinkQuestButton}
            ></QuestButton>
          )}
          <div className="funcButtonDiv" style={useStyles.funcButtonDiv}>
            <StyledButton name={"File Check"} disabled={false}></StyledButton>
            <StyledButton name={"Detail Info"} disabled={false}></StyledButton>
          </div>
        </div>
      </div>
      <div className="rightDiv" style={useStyles.rightDiv}>
        <div className="ThumbnailDiv" style={useStyles.ThumbnailDiv}>
          <img
            className="thumbnail"
            style={useStyles.thumbnail}
            src={process.env.PUBLIC_URL + data.thumbnail_path}
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
}

Quest.propTypes = {
  data: PropTypes.object.isRequired,
  missionId: PropTypes.number.isRequired,
  ongoing: PropTypes.bool.isRequired,
  setOngoingQuestId: PropTypes.func.isRequired,
  setShowingOrder: PropTypes.func.isRequired,
  isLast: PropTypes.bool.isRequired,
};

const useStyles = {
  root: {
    display: "flex",
    border: StyledTheme.base.material.border,
  },
  leftDiv: {
    width: StyledTheme.spacing * 75,
    marginLeft: StyledTheme.spacing,
    marginRight: StyledTheme.spacing,
  },
  rightDiv: {
    display: "flex",
    marginLeft: StyledTheme.spacing,
    marginRight: StyledTheme.spacing,
  },
  questTitleDiv: {
    display: "flex",
    paddingTop: StyledTheme.spacing,
    paddingRight: StyledTheme.spacing,
    paddingBottom: StyledTheme.spacing,
    paddingLeft: StyledTheme.spacing,
  },
  idDiv: {},
  titleDiv: {
    display: "flex",
    alignItems: "center",
    width: StyledTheme.spacing * 65,
    marginLeft: StyledTheme.spacing * 2,
  },
  title: {
    fontSize: StyledTheme.spacing * 2,
    fontWeight: "bold",
  },
  stampDiv: {
    display: "flex",
    alignItems: "center",
  },
  checkButton: {
    color: "grey",
  },
  successCheckButton: {
    color: "#ffacac",
  },
  checkCircleIcon: {
    fontSize: StyledTheme.spacing * 3,
  },
  questTitleInfoDiv: {
    paddingTop: StyledTheme.spacing,
    paddingRight: StyledTheme.spacing,
    paddingBottom: StyledTheme.spacing,
    paddingLeft: StyledTheme.spacing,
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: StyledTheme.spacing,
    paddingRight: StyledTheme.spacing,
    paddingBottom: StyledTheme.spacing,
    paddingLeft: StyledTheme.spacing,
  },
  buttonDivEnd: {
    display: "flex",
    justifyContent: "end",
    paddingTop: StyledTheme.spacing,
    paddingRight: StyledTheme.spacing,
    paddingBottom: StyledTheme.spacing,
    paddingLeft: StyledTheme.spacing,
  },
  funcButtonDiv: {
    display: "flex",
  },
  ThumbnailDiv: {
    display: "flex",
    alignItems: "center",
  },
  thumbnail: {
    width: StyledTheme.spacing * 30,
  },
};

export default Quest;
