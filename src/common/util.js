export const mapMissionType = (mission) => {
  switch (mission) {
    case "persona":
      return "mission_persona_analysis";
    default:
      return "mission_persona_analysis";
  }
};

export const groupBy = function (data, key) {
  return data.reduce(function (destination, el) {
    var group = el[key];
    if (destination[group] === undefined) {
      destination[group] = [];
    }
    destination[group].push(el);
    return destination;
  }, {});
};
