import React from "react";
import PropTypes from "prop-types";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import StyledTheme from "../theme/StyledTheme";
import QuestButton from "../button/QuestButton";
import StyledButton from "../button/StyledButton";

function Quest() {
  const questId = "RT1QA-001";
  const sampleTitle = "전처리 데이터 가져오기";
  const sampleInfo =
    "1. 크롤링과 전처리를 통해 만들어진 CSV 파일의 위치를 확인합니다.(File Check 버튼) <br /> 2. CSV 파일을 열어 (Excel, Numbers 등) 컬럼 정보를 확인합니다.<br />&nbsp;&nbsp;&nbsp;&nbsp; : [필수] doc, ad [선택] index, time, review, comment, like, url <br />3. doc 컬럼의 데이터 형식을 확인합니다.<br />&nbsp;&nbsp;&nbsp;&nbsp; : 예시) ['단편', '가르침', '김준면', '선생님', '열정' '책임감']";

  return (
    <div className="root" style={useStyles.root}>
      <div className="leftDiv" style={useStyles.leftDiv}>
        <div className="questTitleDiv" style={useStyles.questTitleDiv}>
          <div className="idDiv" style={useStyles.idDiv}>
            <QuestButton name={questId} disabled={true}></QuestButton>
          </div>
          <div className="titleDiv" style={useStyles.titleDiv}>
            <label className="title" style={useStyles.title}>
              {sampleTitle}
            </label>
          </div>
          <div className="stampDiv" style={useStyles.stampDiv}>
            <CheckCircleIcon />
          </div>
        </div>
        <div
          className="questTitleInfoDiv"
          style={useStyles.questTitleInfoDiv}
          dangerouslySetInnerHTML={{ __html: sampleInfo }}
        ></div>
        <div className="questButtonDiv" style={useStyles.buttonDiv}>
          <QuestButton name={questId} disabled={false}></QuestButton>
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
            src={process.env.PUBLIC_URL + "/images/knowhow.jpg"}
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
}

Quest.propTypes = {};

const useStyles = {
  root: {
    display: "flex",
    border: StyledTheme.base.material.border,
  },
  leftDiv: {},
  rightDiv: { display: "flex" },
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
  funcButtonDiv: {
    display: "flex",
  },
  ThumbnailDiv: {
    display: "flex",
    alignItems: "center",
  },
  thumbnail: { width: StyledTheme.spacing * 30 },
};

export default Quest;
