"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLondonTimeViaTemporal = void 0;
const polyfill_1 = require("@js-temporal/polyfill");
const getLondonTimeViaTemporal = (timeOffsetInMinutes = 0) => {
    const tz = new polyfill_1.Temporal.TimeZone("Europe/London");
    const currentLondonTime = polyfill_1.Temporal.Now.zonedDateTimeISO(tz)
        .add({
        minutes: timeOffsetInMinutes,
    })
        .round({
        smallestUnit: "second",
    });
    return currentLondonTime.toPlainDateTime().toString();
};
exports.getLondonTimeViaTemporal = getLondonTimeViaTemporal;
