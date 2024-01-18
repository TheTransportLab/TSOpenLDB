"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
exports.EOperation = 
// IOpenLDBWS,
interfaces_1.EOperation;
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
const TimezoneOffset_1 = require("./TimezoneOffset");
const constants_1 = require("./constants");
const node_fetch_1 = __importDefault(require("node-fetch"));
const xml2js_1 = __importDefault(require("xml2js"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const format_1 = __importDefault(require("date-fns/format"));
const parseISO_1 = __importDefault(require("date-fns/parseISO"));
// fetchFromDarwin
class TSOpenLDB {
    constructor({ apiKey, debugEnabled = false }) {
        this._debugEnabled = false;
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
                    timeWindow,
                    time,
                    filterTOC
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
        this.logToConsole = (message = "No message") => {
            console.log(`${new Date().toISOString()} ${typeof message === "object" ? JSON.stringify(message) : message}`);
        };
        this.fetchFromDarwin = async (operation, xml) => {
            const headers = {
                SOAPAction: operation,
                "Content-Type": "text/xml"
            };
            const fetchRequest = await node_fetch_1.default("https://lite.realtime.nationalrail.co.uk/OpenLDBSVWS/ldbsv12.asmx", {
                method: "POST",
                body: xml,
                headers
            });
            if (this._debugEnabled) {
                this.logToConsole({ headers, xml, operation });
            }
            if (fetchRequest.status !== 200) {
                // if (this._debugEnabled) {
                //   const bodyText = await (fetchRequest as Response).text();
                //   this.logToConsole({
                //     status: (fetchRequest as Response).status,
                //     statusText: (fetchRequest as Response).statusText,
                //     headers: (fetchRequest as Response).headers,
                //     text: bodyText
                //     // body: (fetchRequest as Response).body
                //   });
                // }
                throw new Error(`Request error (Status code ${fetchRequest.status}). Please ensure your key is correct, and that it is valid.`);
            }
            const responseData = await fetchRequest.text();
            const parsedXML = await xml2js_1.default.parseStringPromise(responseData, {
                tagNameProcessors: [xml2js_1.default.processors.stripPrefix],
                explicitArray: false,
                ignoreAttrs: true
            });
            const firstTree = { ...Object.values(parsedXML.Envelope.Body)[0] };
            const result = { ...Object.values(firstTree)[0] };
            //@ts-ignore
            return result;
        };
        this.mapParamsToSOAPXml = (operation, params) => {
            return `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${operation}Request>` +
                Object.entries(params).map(([key, value]) => (() => {
                    switch (key) {
                        case "crsList":
                            return `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>${value.length > 0 ? value.map(crs => `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${interfaces_1.EListFields.crsList}>${crs}</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${interfaces_1.EListFields.crsList}>`).join("\n") : "\n"}</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>`;
                        case "filterCRS":
                        case "filterCrs":
                        case "filtercrs":
                            return `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${interfaces_1.EListFields.filterCrs}>${value}</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${interfaces_1.EListFields.filterCrs}>`;
                        case "filterList":
                            return `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>${value.length > 0 ? value.map(toc => `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${interfaces_1.EListFields.filterList}>${toc}</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${interfaces_1.EListFields.filterList}>`).join("\n") : "\n"}</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>`;
                        case "filterTOC":
                        case "filterToc":
                        case "filtertoc":
                            return `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>${value.length > 0 ? value.map(toc => `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${interfaces_1.EListFields.filterTOC}>${toc}</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${interfaces_1.EListFields.filterTOC}>`).join("\n") : "\n"}</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>`;
                        default:
                            return `<${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>${value}</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${key}>`;
                    }
                })()).join("\n") +
                `</${constants_1.ESOAPNamespaces.NAMESPACE_LDB}:${operation}Request>`;
        };
        this.getArrBoardWithDetails = async ({ numRows = 120, timeWindow = 120, timeOffset = 0, time = new Date().toISOString(), ..._params }) => {
            const _time = TimezoneOffset_1.getTimeWithOffset(timeOffset).toISOString();
            const params = { numRows, timeWindow, time: _time, timeOffset, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getArrBoardWithDetails, params)}${constants_1.XMLClosing}`;
            return {
                trainServices: { service: [] },
                busServices: { service: [] },
                ferryServices: { service: [] },
                platformsAreHidden: false,
                servicesAreUnavailable: false,
                ...await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetArrBoardWithDetails, XML)
            };
        };
        this.getArrDepBoardWithDetails = async ({ filterType = interfaces_1.EFilterType.to, timeOffset = 0, timeWindow = 120, ..._params }) => {
            const params = { filterType, timeOffset, timeWindow, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getArrDepBoardWithDetails, params)}${constants_1.XMLClosing}`;
            return {
                trainServices: { service: [] },
                busServices: { service: [] },
                ferryServices: { service: [] },
                platformsAreHidden: false,
                servicesAreUnavailable: false,
                ...await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetArrDepBoardWithDetails, XML)
            };
        };
        this.getArrivalBoardByCRS = async ({ time = new Date(), services = interfaces_1.EServices.TRAIN, numRows = 120, timeWindow = 120, getNonPassengerServices = false, ..._params }) => {
            const params = { time: time.toISOString(), services, numRows, timeWindow, getNonPassengerServices, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getArrivalBoardByCrs, params)}${constants_1.XMLClosing}`;
            return {
                trainServices: { service: [] },
                busServices: { service: [] },
                ferryServices: { service: [] },
                platformsAreHidden: false,
                servicesAreUnavailable: false,
                ...await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetArrivalBoardByCrs, XML)
            };
        };
        this.getArrivalBoardByTIPLOC = async ({ time = new Date(), numRows = 120, services = interfaces_1.EServices.TRAIN, getNonPassengerServices = false, ..._params }) => {
            const params = { time: time.toISOString(), services, numRows, getNonPassengerServices, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getArrivalBoardByTiploc, params)}${constants_1.XMLClosing}`;
            return {
                trainServices: { service: [] },
                busServices: { service: [] },
                ferryServices: { service: [] },
                platformsAreHidden: false,
                servicesAreUnavailable: false,
                ...await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetArrivalBoardByTiploc, XML)
            };
        };
        this.getArrivalDepartureBoardByCRS = async ({ time = new Date(), numRows = 120, services = interfaces_1.EServices.TRAIN, getNonPassengerServices = false, ..._params }) => {
            const params = { time: time.toISOString(), services, numRows, getNonPassengerServices, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getArrivalDepartureBoardByCrs, params)}${constants_1.XMLClosing}`;
            return {
                trainServices: { service: [] },
                busServices: { service: [] },
                ferryServices: { service: [] },
                platformsAreHidden: false,
                servicesAreUnavailable: false,
                ...await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetArrivalDepartureBoardByCrs, XML)
            };
        };
        this.getArrivalDepartureBoardByTIPLOC = async ({ time = new Date(), numRows = 120, services = interfaces_1.EServices.TRAIN, getNonPassengerServices = false, ..._params }) => {
            const params = { time: time.toISOString(), services, numRows, getNonPassengerServices, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getArrivalDepartureBoardByTiploc, params)}${constants_1.XMLClosing}`;
            return {
                trainServices: { service: [] },
                busServices: { service: [] },
                ferryServices: { service: [] },
                platformsAreHidden: false,
                servicesAreUnavailable: false,
                ...await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetArrivalDepartureBoardByCrs, XML)
            };
        };
        this.getDepBoardWithDetails = async ({ numRows = 120, timeWindow = 120, timeOffset = 0, time = new Date().toISOString(), ..._params }) => {
            const _time = TimezoneOffset_1.getTimeWithOffset(timeOffset).toISOString();
            const params = { numRows, timeWindow, time: _time, timeOffset, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getDepBoardWithDetails, params)}${constants_1.XMLClosing}`;
            return {
                trainServices: { service: [] },
                busServices: { service: [] },
                ferryServices: { service: [] },
                platformsAreHidden: false,
                servicesAreUnavailable: false,
                ...await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetDepBoardWithDetails, XML)
            };
        };
        this.getDepartureBoardByCRS = async ({ timeWindow = 120, time = new Date(), getNonPassengerServices = false, services = interfaces_1.EServices.TRAIN, numRows = 120, filterType = interfaces_1.EFilterType.to, ..._params }) => {
            const params = { time: time.toISOString(), timeWindow, getNonPassengerServices, services, numRows, filterType, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getDepartureBoardByCrs, params)}${constants_1.XMLClosing}`;
            return {
                trainServices: { service: [] },
                busServices: { service: [] },
                ferryServices: { service: [] },
                platformsAreHidden: false,
                servicesAreUnavailable: false,
                ...await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetDepartureBoardByCrs, XML)
            };
        };
        this.getDepartureBoardByTIPLOC = async ({ time = new Date(), getNonPassengerServices = false, services = interfaces_1.EServices.TRAIN, numRows = 120, filterType = interfaces_1.EFilterType.to, ..._params }) => {
            const params = { time: time.toISOString(), getNonPassengerServices, services, numRows, filterType, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getDepartureBoardByTiploc, params)}${constants_1.XMLClosing}`;
            return {
                trainServices: { service: [] },
                busServices: { service: [] },
                ferryServices: { service: [] },
                platformsAreHidden: false,
                servicesAreUnavailable: false,
                ...await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetDepartureBoardByTiploc, XML)
            };
        };
        this.getDisruptionList = async ({ ..._params }) => {
            const params = { ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getDisruptionList, params)}${constants_1.XMLClosing}`;
            return await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetDisruptionList, XML);
        };
        this.getFastestDepartures = async ({ services = interfaces_1.EServices.TRAIN, timeWindow = 120, time = new Date(), ..._params }) => {
            const params = { services, timeWindow, time: time.toISOString(), ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getFastestDepartures, params)}${constants_1.XMLClosing}`;
            return {
                trainServices: { service: [] },
                busServices: { service: [] },
                ferryServices: { service: [] },
                platformsAreHidden: false,
                servicesAreUnavailable: false,
                ...await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetFastestDepartures, XML)
            };
        };
        this.getFastestDeparturesWithDetails = async ({ services = interfaces_1.EServices.TRAIN, timeWindow = 120, time = new Date(), ..._params }) => {
            const params = { services, timeWindow, time: time.toISOString(), ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getFastestDeparturesWithDetails, params)}${constants_1.XMLClosing}`;
            return {
                trainServices: { service: [] },
                busServices: { service: [] },
                ferryServices: { service: [] },
                platformsAreHidden: false,
                servicesAreUnavailable: false,
                ...await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetFastestDeparturesWithDetails, XML)
            };
        };
        /**
         *
         * @note This function is not supported by Darwin - See https://groups.google.com/g/openraildata-talk/c/_gfoJ79WGbw/m/YKGvv9FVAwAJ
         *
         */
        this.getHistoricDepartureBoard = async ({ numRows = 120, timeWindow = 120, ..._params }) => {
            const params = { ..._params, historicDateTime: format_1.default(parseISO_1.default(_params.historicDateTime.toISOString()), "yyyy-LL-dd'T'HH:mm:ss"), numRows, timeWindow };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getHistoricDepartureBoard, params)}${constants_1.XMLClosing}`;
            return {
                trainServices: { service: [] },
                busServices: { service: [] },
                ferryServices: { service: [] },
                platformsAreHidden: false,
                servicesAreUnavailable: false,
                ...await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetHistoricDepartureBoard, XML)
            };
        };
        /**
         *
         * @note This function is not supported by Darwin - See https://groups.google.com/g/openraildata-talk/c/_gfoJ79WGbw/m/YKGvv9FVAwAJ
         *
         */
        this.getHistoricServiceDetails = async ({ ..._params }) => {
            const params = { ..._params, historicDateTime: format_1.default(parseISO_1.default(_params.historicDateTime), "yyyy-LL-dd'T'HH:mm:ss") };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getHistoricServiceDetails, params)}${constants_1.XMLClosing}`;
            return await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetHistoricServiceDetails, XML);
        };
        /**
         *
         * @note This function is not supported by Darwin - See https://groups.google.com/g/openraildata-talk/c/_gfoJ79WGbw/m/YKGvv9FVAwAJ
         *
         */
        this.getHistoricTimeLine = async ({ ..._params }) => {
            const params = { ..._params, historicDateTime: format_1.default(parseISO_1.default(_params.historicDatetime), "yyyy-LL-dd'T'HH:mm:ss") };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getHistoricTimeLine, params)}${constants_1.XMLClosing}`;
            return await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetHistoricTimeLine, XML);
        };
        this.getNextDepartures = async ({ time = new Date(), timeWindow = 120, services = interfaces_1.EServices.TRAIN, ..._params }) => {
            const params = { time: time.toISOString(), timeWindow, services, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getNextDepartures, params)}${constants_1.XMLClosing}`;
            return {
                trainServices: { service: [] },
                busServices: { service: [] },
                ferryServices: { service: [] },
                platformsAreHidden: false,
                servicesAreUnavailable: false,
                ...await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetNextDepartures, XML)
            };
        };
        this.getNextDeparturesWithDetails = async ({ time = new Date(), timeWindow = 120, services = interfaces_1.EServices.TRAIN, ..._params }) => {
            const params = { time: time.toISOString(), timeWindow, services, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getNextDeparturesWithDetails, params)}${constants_1.XMLClosing}`;
            return {
                trainServices: { service: [] },
                busServices: { service: [] },
                ferryServices: { service: [] },
                platformsAreHidden: false,
                servicesAreUnavailable: false,
                ...await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetNextDeparturesWithDetails, XML)
            };
        };
        this.getServiceDetailsByRid = async ({ ..._params }) => {
            const params = { ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.getServiceDetailsByRid, params)}${constants_1.XMLClosing}`;
            return await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.GetServiceDetailsByRid, XML);
        };
        this.queryHistoricServices = async ({ timeFilter = new Date(), ..._params }) => {
            const params = { timeFilter: timeFilter.toISOString(), ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.queryHistoricServices, params)}${constants_1.XMLClosing}`;
            return await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.QueryHistoricServices, XML);
        };
        this.queryServices = async ({ sdd = new Date(), ..._params }) => {
            // if (!momentTZ(sdd).isValid){
            //   return false;
            // }
            const ParsedSDD = moment_timezone_1.default(sdd).format("YYYY-MM-DD");
            const params = { sdd: ParsedSDD, ..._params };
            const XML = `${constants_1.XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(interfaces_1.EStaffOperation.queryServices, params)}${constants_1.XMLClosing}`;
            return await this.fetchFromDarwin(interfaces_1.ESOAPStaffAction.QueryServices, XML);
        };
        if (!apiKey || typeof apiKey !== "string") {
            throw new Error("You must provide an API key from the National Rail OpenLDB Staff Webservice. Register: http://openldbsv.nationalrail.co.uk/");
        }
        this._apiKey = apiKey;
        this._debugEnabled = debugEnabled;
    }
}
exports.default = TSOpenLDB;
//# sourceMappingURL=index.js.map