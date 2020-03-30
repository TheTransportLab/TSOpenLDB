import momentTZ from "moment-timezone";
import AddMinutes from "date-fns/addMinutes";

export const getLondonTime = () => momentTZ().tz("Europe/London", true).utc(true).toDate()
export const getTimeWithOffset = (timeOffset: number = 0) => AddMinutes(getLondonTime(), timeOffset);