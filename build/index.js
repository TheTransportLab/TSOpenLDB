"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
exports.EOperation = interfaces_1.EOperation;
exports.EStaffOperation = interfaces_1.EStaffOperation;
exports.ESOAPStaffAction = interfaces_1.ESOAPStaffAction;
exports.ESOAPAction = interfaces_1.ESOAPAction;
exports.EOperationInfoEntryType = interfaces_1.EOperationInfoEntryType;
exports.EOperationInfoEntries = interfaces_1.EOperationInfoEntries;
exports.ELDBWSOperationInfoKeys = interfaces_1.ELDBWSOperationInfoKeys;
exports.EListFields = interfaces_1.EListFields;
exports.EFilterType = interfaces_1.EFilterType;
exports.EServices = interfaces_1.EServices;
exports.EDateModifier = interfaces_1.EDateModifier;
const constants_1 = require("./constants");
const node_fetch_1 = __importDefault(require("node-fetch"));
const xml2js_1 = __importDefault(require("xml2js"));
class TSOpenLDB {
    constructor({ apiKey }) {
        this.CallRequiredParams = (params) => {
            const { time, timeOffset, timeWindow, getNonPassengerServices, crs, crsList, tiploc, numRows, filterCrs, filterCRSType, historicDateTime, depBoardDate, depBoardTime, serviceUID, scheduleStartDate, sdd, fullTiploc, rid, serviceID, timeFilter, routeCrsFilter, tocFilter, filterTiploc, filterType, filterTOC, services, filterList, filterTime, currentVersion, reasonCode } = params;
            const APICalls = {
                GetArrBoardWithDetails: {
                    numRows,
                    crs,
                    filterCrs,
                    filterType,
                    timeOffset,
                    timeWindow
                },
                GetArrDepBoardWithDetails: {
                    numRows,
                    crs,
                    filterCrs,
                    filterType,
                    timeOffset,
                    timeWindow
                },
                GetArrivalBoardByCRS: {
                    numRows,
                    crs,
                    time,
                    timeWindow,
                    filterCrs,
                    filterType,
                    filterTOC,
                    services,
                    getNonPassengerServices
                },
                GetArrivalBoardByTIPLOC: {
                    numRows,
                    tiploc,
                    time,
                    filterTiploc,
                    filterType,
                    filterTOC,
                    services,
                    getNonPassengerServices
                },
                GetArrivalDepartureBoardByCRS: {
                    numRows,
                    crs,
                    time,
                    filterCrs,
                    filterType,
                    filterTOC,
                    services,
                    getNonPassengerServices
                },
                GetArrivalDepartureBoardByTIPLOC: {
                    numRows,
                    tiploc,
                    time,
                    filterTiploc,
                    filterType,
                    filterTOC,
                    services,
                    getNonPassengerServices
                },
                GetDepBoardWithDetails: {
                    numRows,
                    crs,
                    filterCrs,
                    filterType,
                    timeOffset,
                    timeWindow
                },
                GetDepartureBoardByCRS: {
                    numRows,
                    crs,
                    time,
                    timeWindow,
                    filterCrs,
                    filterType,
                    filterTOC,
                    services,
                    getNonPassengerServices
                },
                GetDepartureBoardByTIPLOC: {
                    numRows,
                    tiploc,
                    time,
                    filterTiploc,
                    filterType,
                    filterTOC,
                    services,
                    getNonPassengerServices
                },
                GetDisruptionList: {
                    crsList
                },
                GetFastestDepartures: {
                    crs,
                    filterList,
                    time,
                    timeWindow,
                    filterTOC,
                    services
                },
                GetFastestDeparturesWithDetails: {
                    crs,
                    filterList,
                    time,
                    timeWindow,
                    filterTOC,
                    services
                },
                GetHistoricDepartureBoard: {
                    numRows,
                    crs,
                    historicDateTime,
                    depBoardDate,
                    depBoardTime,
                    timeWindow,
                    filterCrs,
                    filterCRSType,
                    filterTOC,
                    services,
                    getNonPassengerServices
                },
                GetHistoricServiceDetails: {
                    serviceUID,
                    scheduleStartDate,
                    historicDateTime
                },
                GetHistoricTimeLine: {
                    serviceUID,
                    scheduleStartDate,
                    historicDateTime,
                    fullTiploc
                },
                GetNextDepartures: {
                    crs,
                    filterList,
                    time,
                    timeWindow,
                    filterTOC,
                    services
                },
                GetNextDeparturesWithDetails: {
                    crs,
                    filterList,
                    time,
                    timeWindow,
                    filterTOC,
                    services
                },
                GetServiceDetailsByRID: {
                    rid
                },
                QueryHistoricServices: {
                    serviceID,
                    historicDateTime,
                    scheduleStartDate,
                    timeFilter,
                    routeCrsFilter,
                    tocFilter
                },
                QueryServices: {
                    serviceID,
                    sdd,
                    filterTime,
                    filterCrs,
                    tocFilter
                },
                GetTocList: {
                    currentVersion
                },
                GetStationList: {
                    currentVersion
                },
                GetReasonCode: {
                    reasonCode
                },
                GetReasonCodeList: {}
            };
            return APICalls;
        };
        this.fetchFromDarwin = async (operation, xml) => {
            const headers = {
                SOAPAction: operation,
                "Content-Type": "text/xml"
            };
            const data = await (await node_fetch_1.default("https://lite.realtime.nationalrail.co.uk/OpenLDBSVWS/ldbsv12.asmx", {
                method: "POST",
                body: xml,
                headers
            })).text();
            xml2js_1.default.parseString(data, {
                tagNameProcessors: [xml2js_1.default.processors.stripPrefix],
                explicitArray: false,
                ignoreAttrs: true
            }, (err, result) => {
                if (err) {
                    console.log(err);
                }
                ;
            });
            return data;
        };
        this.mapParamsToSOAPXml = (operation, params) => {
            return `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${operation}Request>` +
                Object.entries(params).map(([key, value]) => (() => {
                    switch (key) {
                        case "crsList":
                            return `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>${value.length > 0 ? value.map(crs => `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${interfaces_1.EListFields.crsList}>${crs}</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${interfaces_1.EListFields.crsList}>`).join("\n") : "\n"}</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>`;
                        case "filterList":
                            return `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>${value.length > 0 ? value.map(toc => `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${interfaces_1.EListFields.filterList}>${toc}</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${interfaces_1.EListFields.filterList}>`).join("\n") : "\n"}</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>`;
                        case "filterTOC":
                            return `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>${value.length > 0 ? value.map(toc => `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${interfaces_1.EListFields.filterTOC}>${toc}</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${interfaces_1.EListFields.filterTOC}>`).join("\n") : "\n"}</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>`;
                        default:
                            return `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>${value}</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>`;
                    }
                })()).join("\n") +
                `</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${operation}Request>`;
        };
        this[_a] = ({ filterType = interfaces_1.EFilterType.to, timeOffset = 0, timeWindow = 120, ..._params }) => {
            const params = { filterType, timeOffset, timeWindow, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getArrBoardWithDetails, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_b] = ({ filterType = interfaces_1.EFilterType.to, timeOffset = 0, timeWindow = 120, ..._params }) => {
            const params = { filterType, timeOffset, timeWindow, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getArrDepBoardWithDetails, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_c] = ({ time = new Date(), services = interfaces_1.EServices.TRAIN, numRows = 120, timeWindow = 120, getNonPassengerServices = false, ..._params }) => {
            const params = { time: time.toISOString(), services, numRows, timeWindow, getNonPassengerServices, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getArrivalBoardByCrs, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_d] = ({ time = new Date(), numRows = 120, services = interfaces_1.EServices.TRAIN, getNonPassengerServices = false, ..._params }) => {
            const params = { time: time.toISOString(), services, numRows, getNonPassengerServices, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getArrivalBoardByTiploc, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_e] = ({ time = new Date(), numRows = 120, services = interfaces_1.EServices.TRAIN, getNonPassengerServices = false, ..._params }) => {
            const params = { timetime: time.toISOString(), services, numRows, getNonPassengerServices, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getArrivalDepartureBoardByCrs, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_f] = ({ time = new Date(), numRows = 120, services = interfaces_1.EServices.TRAIN, getNonPassengerServices = false, ..._params }) => {
            const params = { timetime: time.toISOString(), services, numRows, getNonPassengerServices, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getArrivalDepartureBoardByTiploc, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_g] = ({ numRows = 120, timeWindow = 120, timeOffset = 0, ..._params }) => {
            const params = { numRows, timeWindow, timeOffset, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getDepBoardWithDetails, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_h] = ({ timeWindow = 120, time = new Date(), getNonPassengerServices = false, services = interfaces_1.EServices.TRAIN, numRows = 120, filterType = interfaces_1.EFilterType.to, ..._params }) => {
            const params = { time: time.toISOString(), timeWindow, getNonPassengerServices, services, numRows, filterType, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getDepartureBoardByCrs, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_j] = ({ time = new Date(), getNonPassengerServices = false, services = interfaces_1.EServices.TRAIN, numRows = 120, filterType = interfaces_1.EFilterType.to, ..._params }) => {
            const params = { timetime: time.toISOString(), getNonPassengerServices, services, numRows, filterType, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getDepartureBoardByTiploc, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_k] = ({ ..._params }) => {
            const params = { ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getDisruptionList, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_l] = ({ services = interfaces_1.EServices.TRAIN, timeWindow = 120, time = new Date(), ..._params }) => {
            const params = { services, timeWindow, time: time.toISOString(), ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getFastestDepartures, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_m] = ({ services = interfaces_1.EServices.TRAIN, timeWindow = 120, time = new Date(), ..._params }) => {
            const params = { services, timeWindow, time: time.toISOString(), ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getFastestDeparturesWithDetails, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_o] = ({ depBoardDate = interfaces_1.EDateModifier.SAME, numRows = 120, services = interfaces_1.EServices.TRAIN, timeWindow = 120, ..._params }) => {
            const params = { depBoardDate, numRows, services, timeWindow, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getHistoricDepartureBoard, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_p] = ({ ..._params }) => {
            const params = { ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getHistoricServiceDetails, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_q] = ({ ..._params }) => {
            const params = { ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getHistoricTimeLine, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_r] = ({ time = new Date(), timeWindow = 120, services = interfaces_1.EServices.TRAIN, ..._params }) => {
            const params = { time: time.toISOString(), timeWindow, services, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getNextDepartures, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_s] = ({ time = new Date(), timeWindow = 120, services = interfaces_1.EServices.TRAIN, ..._params }) => {
            const params = { time: time.toISOString(), timeWindow, services, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getNextDeparturesWithDetails, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_t] = ({ ..._params }) => {
            const params = { ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getReasonCode, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_u] = ({ ..._params }) => {
            const params = { ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getReasonCodeList, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_v] = ({ ..._params }) => {
            const params = { ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getServiceDetailsByRid, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_w] = ({ ..._params }) => {
            const params = { ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getStationList, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_x] = ({ ..._params }) => {
            const params = { ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getTocList, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_y] = ({ timeFilter = new Date(), ..._params }) => {
            const params = { timeFilter: timeFilter.toISOString(), ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.queryHistoricServices, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this[_z] = ({ sdd = new Date(), ..._params }) => {
            const params = { sdd: sdd.toISOString(), ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.queryServices, params)}${constants_1.XMLClosing}`;
            return XML;
        };
        this._apiKey = apiKey;
    }
}
exports.default = TSOpenLDB;
_a = interfaces_1.EStaffOperation.getArrBoardWithDetails, _b = interfaces_1.EStaffOperation.getArrDepBoardWithDetails, _c = interfaces_1.EStaffOperation.getArrivalBoardByCrs, _d = interfaces_1.EStaffOperation.getArrivalBoardByTiploc, _e = interfaces_1.EStaffOperation.getArrivalDepartureBoardByCrs, _f = interfaces_1.EStaffOperation.getArrivalDepartureBoardByTiploc, _g = interfaces_1.EStaffOperation.getDepBoardWithDetails, _h = interfaces_1.EStaffOperation.getDepartureBoardByCrs, _j = interfaces_1.EStaffOperation.getDepartureBoardByTiploc, _k = interfaces_1.EStaffOperation.getDisruptionList, _l = interfaces_1.EStaffOperation.getFastestDepartures, _m = interfaces_1.EStaffOperation.getFastestDeparturesWithDetails, _o = interfaces_1.EStaffOperation.getHistoricDepartureBoard, _p = interfaces_1.EStaffOperation.getHistoricServiceDetails, _q = interfaces_1.EStaffOperation.getHistoricTimeLine, _r = interfaces_1.EStaffOperation.getNextDepartures, _s = interfaces_1.EStaffOperation.getNextDeparturesWithDetails, _t = interfaces_1.EStaffOperation.getReasonCode, _u = interfaces_1.EStaffOperation.getReasonCodeList, _v = interfaces_1.EStaffOperation.getServiceDetailsByRid, _w = interfaces_1.EStaffOperation.getStationList, _x = interfaces_1.EStaffOperation.getTocList, _y = interfaces_1.EStaffOperation.queryHistoricServices, _z = interfaces_1.EStaffOperation.queryServices;
//# sourceMappingURL=index.js.map