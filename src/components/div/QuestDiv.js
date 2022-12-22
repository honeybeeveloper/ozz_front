import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import StyledTheme from "../theme/StyledTheme";
import Quest from "../component/Quest";
import appConfig from "../../common/AppConfig";
import { onAxiosError } from "../../common/Error";

function QuestDiv(props) {
  const { missionId } = props;
  const [quests, setQuests] = useState([]);
  const [showingOrder, setShowingOrder] = useState(1);
  const [ongoingQuestId, setOngoingQuestId] = useState(0);
  const questRef = useRef(null);

  useEffect(() => {
    if (questRef.current) {
      questRef.current.scrollIntoView();
    }
  }, [ongoingQuestId]);

  useEffect(() => {
    if (missionId > 0 && ongoingQuestId === 0) {
      getQuests(missionId);
      getInitOngoingQuest(missionId);
    }
  }, [missionId, ongoingQuestId]);

  const getQuests = (missionId) => {
    axios
      .get(appConfig.apiRoot + "/quest/mission-quests", {
        params: {
          mission_id: missionId,
        },
      })
      .then((response) => {
        setQuests(response.data.quests);
      })
      .catch((error) => {
        onAxiosError(error);
      });
  };

  const getInitOngoingQuest = (missionId) => {
    axios
      .get(appConfig.apiRoot + "/user/user-ongoing", {
        params: {
          user_id: 1,
          mission_id: missionId,
        },
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
      <div className="titleDiv" style={useStyles.titleDiv}>
        <label className="title" style={useStyles.title}>
          {"퀘스트"}
        </label>
      </div>
      <TableContainer
        className="questContainer"
        style={useStyles.questContainer}
      >
        <Table className="table" style={useStyles.table}>
          <TableBody>
            {quests
              .filter((data) => data.quest_order <= showingOrder)
              .map((data, index) => (
                <TableRow
                  className="tableRow"
                  key={data.id}
                  style={
                    data.id === ongoingQuestId
                      ? useStyles.ongoingTableRow
                      : useStyles.tableRow
                  }
                  ref={data.id === ongoingQuestId ? questRef : null}
                >
                  <TableCell>
                    <div className="quest" style={useStyles.quest}>
                      <div className="statusDiv" style={useStyles.statusDiv}>
                        <ArrowForwardIcon></ArrowForwardIcon>
                      </div>
                      <div className="qDiv" style={useStyles.qDiv}>
                        <Quest
                          data={data}
                          missionId={missionId}
                          setOngoingQuestId={setOngoingQuestId}
                          setShowingOrder={setShowingOrder}
                          isLast={quests.length === index + 1}
                        ></Quest>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

QuestDiv.propTypes = {
  missionId: PropTypes.number.isRequired,
};

const useStyles = {
  root: { border: "1px solid black" },
  titleDiv: {
    display: "flex",
    justifyContent: "center",
    height: StyledTheme.spacing * 4,
    marginTop: StyledTheme.spacing,
  },
  title: {
    textAlign: "center",
    fontSize: StyledTheme.variables.fontSize,
    fontWeight: "bold",
  },
  questsDiv: {
    marginTop: StyledTheme.spacing * 2,
    marginBottom: StyledTheme.spacing * 2,
  },
  questContainer: {
    height: "640px",
  },
  ongoingTableRow: {
    backgroundColor: "rgba(21, 211, 209, 0.1)",
  },
  tableRow: {},
  quest: { display: "flex" },
  statusDiv: {
    display: "flex",
    alignItems: "center",
    marginLeft: StyledTheme.spacing,
    marginRight: StyledTheme.spacing,
  },
};

export default QuestDiv;
