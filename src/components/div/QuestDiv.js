import React, { useEffect, useState } from "react";
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
  const [ongoingQuestId, setOngoingQuestId] = useState(0);
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    if (missionId > 0) {
      getQuests(missionId);
    }
  }, [missionId]);

  // quest 바뀔 때마다
  useEffect(() => {
    if (missionId > 0) {
      getOngoingQuest(missionId);
    }
  });

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

  const getOngoingQuest = (missionId) => {
    axios
      .get(appConfig.apiRoot + "/user/user-ongoing", {
        params: {
          user_id: 1,
          mission_id: missionId,
        },
      })
      .then((response) => {
        console.log(response.data);
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
            {quests.map((data) => (
              <TableRow
                className="tableRow"
                style={
                  data.id === ongoingQuestId
                    ? useStyles.tableRow
                    : useStyles.ongoingTableRow
                }
                key={data.id}
              >
                <TableCell>
                  <div className="quest" style={useStyles.quest}>
                    <div className="statusDiv" style={useStyles.statusDiv}>
                      <ArrowForwardIcon></ArrowForwardIcon>
                    </div>
                    <div className="qDiv" style={useStyles.qDiv}>
                      <Quest
                        data={data}
                        ongoing={data.id === ongoingQuestId}
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
  tableRow: {
    backgroundColor: "rgba(21, 211, 209, 0.1)",
  },
  ongoingTableRow: {
    // backgroundColor: "rgba(21, 211, 209, 0.5)",
  },
  quest: { display: "flex" },
  statusDiv: {
    display: "flex",
    alignItems: "center",
    marginLeft: StyledTheme.spacing,
    marginRight: StyledTheme.spacing,
  },
  qDiv: {},
};

export default QuestDiv;
