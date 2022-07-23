import { Temporal } from "@js-temporal/polyfill";

export const getLondonTimeViaTemporal = (timeOffsetInMinutes: number = 0) => {
  const tz = new Temporal.TimeZone("Europe/London");
  const currentLondonTime = Temporal.Now.zonedDateTimeISO(tz)
    .add({
      minutes: timeOffsetInMinutes,
    })
    .round({
      smallestUnit: "second",
    });
  return currentLondonTime.toPlainDateTime().toString();
};
