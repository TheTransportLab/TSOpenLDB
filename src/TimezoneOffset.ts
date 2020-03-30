import momentTZ from "moment-timezone";
import AddMinutes from "date-fns/addMinutes";
import geoTZ from "geo-tz";

const londonTZByCoords = () => {
  const result = geoTZ(51.507761, -0.127916).find(val => !!val);
  return result;
};
export const getLondonTime = () => {
  momentTZ.tz.setDefault(londonTZByCoords());
  return momentTZ().utc(true).tz(londonTZByCoords(), false).toDate()
};

export const getTimeWithOffset = (timeOffset: number = 0) => AddMinutes(getLondonTime(), timeOffset);