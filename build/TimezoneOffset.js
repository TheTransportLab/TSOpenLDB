"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const addMinutes_1 = __importDefault(require("date-fns/addMinutes"));
exports.getLondonTime = () => moment_timezone_1.default().tz("Europe/London", true).utc(true).toDate();
exports.getTimeWithOffset = (timeOffset = 0) => addMinutes_1.default(exports.getLondonTime(), timeOffset);
//# sourceMappingURL=TimezoneOffset.js.map