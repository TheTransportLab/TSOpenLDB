"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TSOpenLDBSV_apiKey, _TSOpenLDBSV_timeOffsetInMinutes;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFastestDeparturesWithDetails = exports.GetNextDeparturesWithDetails = exports.GetFastestDepartures = exports.GetNextDepartures = exports.GetDepBoardWithDetails = exports.GetArrDepBoardWithDetails = exports.GetArrBoardWithDetails = exports.GetStationList = exports.GetTOCList = exports.GetSourceInstanceNames = exports.GetReasonCodeList = exports.GetReasonCode = exports.QueryServices = exports.GetServiceDetailsByRID = exports.GetDisruptionList = exports.GetDepartureBoardByTIPLOC = exports.GetArrivalBoardByTIPLOC = exports.GetArrivalBoardByCRS = exports.GetDepartureBoardByCRS = exports.GetArrivalDepartureBoardByTIPLOC = exports.GetArrivalDepartureBoardByCRS = exports.getLondonTimeViaTemporal = exports.TSOpenLDBSV = void 0;
// Non-reference functions
const GetArrivalDepartureBoardByCRS_1 = require("./functions/nonreference/GetArrivalDepartureBoardByCRS");
Object.defineProperty(exports, "GetArrivalDepartureBoardByCRS", { enumerable: true, get: function () { return GetArrivalDepartureBoardByCRS_1.fn; } });
const GetArrivalDepartureBoardByTIPLOC_1 = require("./functions/nonreference/GetArrivalDepartureBoardByTIPLOC");
Object.defineProperty(exports, "GetArrivalDepartureBoardByTIPLOC", { enumerable: true, get: function () { return GetArrivalDepartureBoardByTIPLOC_1.fn; } });
const GetDepartureBoardByCRS_1 = require("./functions/nonreference/GetDepartureBoardByCRS");
Object.defineProperty(exports, "GetDepartureBoardByCRS", { enumerable: true, get: function () { return GetDepartureBoardByCRS_1.fn; } });
const GetArrivalBoardByCRS_1 = require("./functions/nonreference/GetArrivalBoardByCRS");
Object.defineProperty(exports, "GetArrivalBoardByCRS", { enumerable: true, get: function () { return GetArrivalBoardByCRS_1.fn; } });
const GetArrivalBoardByTIPLOC_1 = require("./functions/nonreference/GetArrivalBoardByTIPLOC");
Object.defineProperty(exports, "GetArrivalBoardByTIPLOC", { enumerable: true, get: function () { return GetArrivalBoardByTIPLOC_1.fn; } });
const GetDepartureBoardByTIPLOC_1 = require("./functions/nonreference/GetDepartureBoardByTIPLOC");
Object.defineProperty(exports, "GetDepartureBoardByTIPLOC", { enumerable: true, get: function () { return GetDepartureBoardByTIPLOC_1.fn; } });
const GetDisruptionList_1 = require("./functions/nonreference/GetDisruptionList");
Object.defineProperty(exports, "GetDisruptionList", { enumerable: true, get: function () { return GetDisruptionList_1.fn; } });
const GetServiceDetailsByRID_1 = require("./functions/nonreference/GetServiceDetailsByRID");
Object.defineProperty(exports, "GetServiceDetailsByRID", { enumerable: true, get: function () { return GetServiceDetailsByRID_1.fn; } });
const QueryServices_1 = require("./functions/nonreference/QueryServices");
Object.defineProperty(exports, "QueryServices", { enumerable: true, get: function () { return QueryServices_1.fn; } });
const GetArrBoardWithDetails_1 = require("./functions/nonreference/GetArrBoardWithDetails");
Object.defineProperty(exports, "GetArrBoardWithDetails", { enumerable: true, get: function () { return GetArrBoardWithDetails_1.fn; } });
const GetArrDepBoardWithDetails_1 = require("./functions/nonreference/GetArrDepBoardWithDetails");
Object.defineProperty(exports, "GetArrDepBoardWithDetails", { enumerable: true, get: function () { return GetArrDepBoardWithDetails_1.fn; } });
const GetDepBoardWithDetails_1 = require("./functions/nonreference/GetDepBoardWithDetails");
Object.defineProperty(exports, "GetDepBoardWithDetails", { enumerable: true, get: function () { return GetDepBoardWithDetails_1.fn; } });
const GetNextDepartures_1 = require("./functions/nonreference/GetNextDepartures");
Object.defineProperty(exports, "GetNextDepartures", { enumerable: true, get: function () { return GetNextDepartures_1.fn; } });
const GetFastestDepartures_1 = require("./functions/nonreference/GetFastestDepartures");
Object.defineProperty(exports, "GetFastestDepartures", { enumerable: true, get: function () { return GetFastestDepartures_1.fn; } });
const GetNextDeparturesWithDetails_1 = require("./functions/nonreference/GetNextDeparturesWithDetails");
Object.defineProperty(exports, "GetNextDeparturesWithDetails", { enumerable: true, get: function () { return GetNextDeparturesWithDetails_1.fn; } });
const GetFastestDeparturesWithDetails_1 = require("./functions/nonreference/GetFastestDeparturesWithDetails");
Object.defineProperty(exports, "GetFastestDeparturesWithDetails", { enumerable: true, get: function () { return GetFastestDeparturesWithDetails_1.fn; } });
// Reference functions
const GetReasonCode_1 = require("./functions/reference/GetReasonCode");
Object.defineProperty(exports, "GetReasonCode", { enumerable: true, get: function () { return GetReasonCode_1.fn; } });
const GetReasonCodeList_1 = require("./functions/reference/GetReasonCodeList");
Object.defineProperty(exports, "GetReasonCodeList", { enumerable: true, get: function () { return GetReasonCodeList_1.fn; } });
const GetSourceInstanceNames_1 = require("./functions/reference/GetSourceInstanceNames");
Object.defineProperty(exports, "GetSourceInstanceNames", { enumerable: true, get: function () { return GetSourceInstanceNames_1.fn; } });
const GetTOCList_1 = require("./functions/reference/GetTOCList");
Object.defineProperty(exports, "GetTOCList", { enumerable: true, get: function () { return GetTOCList_1.fn; } });
const GetStationList_1 = require("./functions/reference/GetStationList");
Object.defineProperty(exports, "GetStationList", { enumerable: true, get: function () { return GetStationList_1.fn; } });
const TimezoneOffset_1 = require("./functions/misc/TimezoneOffset");
Object.defineProperty(exports, "getLondonTimeViaTemporal", { enumerable: true, get: function () { return TimezoneOffset_1.getLondonTimeViaTemporal; } });
class TSOpenLDBSV {
    constructor({ apiKey, timeOffsetInMinutes = 0 }) {
        _TSOpenLDBSV_apiKey.set(this, void 0);
        _TSOpenLDBSV_timeOffsetInMinutes.set(this, 0);
        this.GetArrivalDepartureBoardByCRS = async (args) => await (0, GetArrivalDepartureBoardByCRS_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetArrivalDepartureBoardByTIPLOC = async (args) => await (0, GetArrivalDepartureBoardByTIPLOC_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetDepartureBoardByCRS = async (args) => await (0, GetDepartureBoardByCRS_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetArrivalBoardByCRS = async (args) => await (0, GetArrivalBoardByCRS_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetReasonCode = async (args) => await (0, GetReasonCode_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetReasonCodeList = async (args) => await (0, GetReasonCodeList_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetSourceInstanceNames = async (args) => await (0, GetSourceInstanceNames_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetTOCList = async (args) => await (0, GetTOCList_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetStationList = async (args) => await (0, GetStationList_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetArrivalBoardByTIPLOC = async (args) => await (0, GetArrivalBoardByTIPLOC_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetDepartureBoardByTIPLOC = async (args) => await (0, GetDepartureBoardByTIPLOC_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetDisruptionList = async (args) => await (0, GetDisruptionList_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetServiceDetailsByRID = async (args) => await (0, GetServiceDetailsByRID_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.QueryServices = async (args) => await (0, QueryServices_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args: {
                ...args,
                filterTime: "",
            },
        });
        this.GetArrBoardWithDetails = async (args) => await (0, GetArrBoardWithDetails_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetArrDepBoardWithDetails = async (args) => await (0, GetArrDepBoardWithDetails_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetDepBoardWithDetails = async (args) => await (0, GetDepBoardWithDetails_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetNextDepartures = async (args) => await (0, GetNextDepartures_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetFastestDepartures = async (args) => await (0, GetFastestDepartures_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetNextDeparturesWithDetails = async (args) => await (0, GetNextDeparturesWithDetails_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        this.GetFastestDeparturesWithDetails = async (args) => await (0, GetFastestDeparturesWithDetails_1.fn)({
            apiKey: __classPrivateFieldGet(this, _TSOpenLDBSV_apiKey, "f"),
            args,
        });
        __classPrivateFieldSet(this, _TSOpenLDBSV_apiKey, apiKey, "f");
        __classPrivateFieldSet(this, _TSOpenLDBSV_timeOffsetInMinutes, timeOffsetInMinutes, "f");
    }
    set timeOffsetInMinutes(timeOffsetInMinutes) {
        if (!timeOffsetInMinutes) {
            return;
        }
        __classPrivateFieldSet(this, _TSOpenLDBSV_timeOffsetInMinutes, timeOffsetInMinutes, "f");
    }
    get timeOffsetInMinutes() {
        return __classPrivateFieldGet(this, _TSOpenLDBSV_timeOffsetInMinutes, "f");
    }
}
exports.TSOpenLDBSV = TSOpenLDBSV;
_TSOpenLDBSV_apiKey = new WeakMap(), _TSOpenLDBSV_timeOffsetInMinutes = new WeakMap();
// export default _exports;
