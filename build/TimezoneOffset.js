"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const addMinutes_1 = __importDefault(require("date-fns/addMinutes"));
const geo_tz_1 = __importDefault(require("geo-tz"));
const londonTZByCoords = () => {
    const result = geo_tz_1.default(51.507761, -0.127916).find(val => !!val);
    return result;
};
exports.getLondonTime = () => {
    moment_timezone_1.default.tz.setDefault(londonTZByCoords());
    return moment_timezone_1.default().utc(true).tz(londonTZByCoords(), false).toDate();
};
exports.getTimeWithOffset = (timeOffset = 0) => addMinutes_1.default(exports.getLondonTime(), timeOffset);
//# sourceMappingURL=TimezoneOffset.js.map