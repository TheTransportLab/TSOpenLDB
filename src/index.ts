import {
  IOpenLDBWS,
  EOperation,
  EStaffOperation,
  ESOAPStaffAction,
  ESOAPAction,
  ILDBWSSoapOptions,
  ILDBWSSoap,
  IOperationInfo,
  EOperationInfoEntryType,
  EOperationInfoEntries,
  IOperationInfoEntry,
  ELDBWSOperationInfoKeys,
  IOperationParams,
  TStaffOperation,
  IParams_GetArrBoardWithDetails,
  IParams_GetArrDepBoardWithDetails,
  IParams_GetArrivalBoardByCRS,
  IParams_GetArrivalBoardByTIPLOC,
  IParams_GetArrivalDepartureBoardByCRS,
  IParams_GetArrivalDepartureBoardByTIPLOC,
  IParams_GetDepBoardWithDetails,
  IParams_GetDepartureBoardByCRS,
  IParams_GetDepartureBoardByTIPLOC,
  IParams_GetDisruptionList,
  IParams_GetFastestDepartures,
  IParams_GetFastestDeparturesWithDetails,
  IParams_GetHistoricDepartureBoard,
  IParams_GetHistoricServiceDetails,
  IParams_GetHistoricTimeLine,
  IParams_GetNextDepartures,
  IParams_GetNextDeparturesWithDetails,
  IParams_GetReasonCode,
  IParams_GetReasonCodeList,
  IParams_GetServiceDetailsByRID,
  IParams_GetStationList,
  IParams_GetTocList,
  IParams_QueryHistoricServices,
  IParams_QueryServices,
  EListFields,
  ITSOpenLDBConstructorParams,
  EFilterType,
  EServices,
  EDateModifier
} from "./interfaces";

import {
  XMLClosing,
  XMLOpening,//.replace("$$_TOKEN_$$", this._apiKey),
  ESOAPNamespaces
} from "./constants";

import fetch from "node-fetch";
import xml2js from "xml2js";

export default class TSOpenLDB {
  private _apiKey: string;

  constructor({apiKey}:ITSOpenLDBConstructorParams){
    this._apiKey = apiKey;
  }

  CallRequiredParams = (params: IOperationParams):TStaffOperation => {
    const {
      time,
      timeOffset,
      timeWindow,
      getNonPassengerServices,
      crs,
      crsList,
      tiploc,
      numRows,
      filterCrs,
      filterCRSType,
      historicDateTime,
      depBoardDate,
      depBoardTime,
      serviceUID,
      scheduleStartDate,
      sdd,
      fullTiploc,
      rid,
      serviceID,
      timeFilter,
      routeCrsFilter,
      tocFilter,
      filterTiploc,
      filterType,
      filterTOC,
      services,
      filterList,
      filterTime,
      currentVersion,
      reasonCode
    } = params;
    const APICalls: TStaffOperation = {
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
      GetDepartureBoardByCRS:{
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
      GetDepartureBoardByTIPLOC:{
        numRows,
        tiploc,
        time,
        filterTiploc,
        filterType,
        filterTOC,
        services,
        getNonPassengerServices
      },
      GetDisruptionList:{
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
      GetHistoricDepartureBoard:{
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
      GetHistoricTimeLine:{
        serviceUID,
        scheduleStartDate,
        historicDateTime,
        fullTiploc
      },
      GetNextDepartures:{
        crs,
        filterList,
        time,
        timeWindow,
        filterTOC,
        services
      },
      GetNextDeparturesWithDetails:{
        crs,
        filterList,
        time,
        timeWindow,
        filterTOC,
        services
      },
      GetServiceDetailsByRID:{
        rid
      },
      QueryHistoricServices:{
        serviceID,
        historicDateTime,
        scheduleStartDate,
        timeFilter,
        routeCrsFilter,
        tocFilter
      },
      QueryServices:{
        serviceID,
        sdd,
        filterTime,
        filterCrs,
        tocFilter
      },
      GetTocList: {
        currentVersion
      },
      GetStationList:{
        currentVersion
      },
      GetReasonCode:{
        reasonCode
      },
      GetReasonCodeList:{

      }
    }
    return APICalls;
  }

  fetchFromDarwin = async (operation: ESOAPStaffAction, xml: string) => {
    const headers = {
      SOAPAction: operation,
      "Content-Type": "text/xml"
    };
    const data = await (await fetch("https://lite.realtime.nationalrail.co.uk/OpenLDBSVWS/ldbsv12.asmx", {
      method: "POST",
      body: xml,
      headers
    })).text();

    xml2js.parseString(data, {
      tagNameProcessors: [xml2js.processors.stripPrefix],
      explicitArray: false,
      ignoreAttrs: true
    }, (err, result)=>{
      if(err){
        console.log(err);
      };
    })
    return data;
  }

  mapParamsToSOAPXml = (operation: EStaffOperation, params: IOperationParams) => {
    return `<${ESOAPNamespaces.NAMESPACE_LDB}:${operation}Request>`+
      Object.entries(params).map(([key, value]) => (() => {
        switch(key){
          case "crsList":
            return `<${ESOAPNamespaces.NAMESPACE_LDB}:${key}>${
              value.length > 0 ? value.map(crs => `<${ESOAPNamespaces.NAMESPACE_LDB}:${EListFields.crsList}>${crs}</${ESOAPNamespaces.NAMESPACE_LDB}:${EListFields.crsList}>`).join("\n") : "\n"
            }</${ESOAPNamespaces.NAMESPACE_LDB}:${key}>`
          case "filterList":
              return `<${ESOAPNamespaces.NAMESPACE_LDB}:${key}>${
                value.length > 0 ? value.map(toc => `<${ESOAPNamespaces.NAMESPACE_LDB}:${EListFields.filterList}>${toc}</${ESOAPNamespaces.NAMESPACE_LDB}:${EListFields.filterList}>`).join("\n") : "\n"
              }</${ESOAPNamespaces.NAMESPACE_LDB}:${key}>`;
          case "filterTOC":
              return `<${ESOAPNamespaces.NAMESPACE_LDB}:${key}>${
                value.length > 0 ? value.map(toc => `<${ESOAPNamespaces.NAMESPACE_LDB}:${EListFields.filterTOC}>${toc}</${ESOAPNamespaces.NAMESPACE_LDB}:${EListFields.filterTOC}>`).join("\n") : "\n"
              }</${ESOAPNamespaces.NAMESPACE_LDB}:${key}>`;
          default:
            return `<${ESOAPNamespaces.NAMESPACE_LDB}:${key}>${value}</${ESOAPNamespaces.NAMESPACE_LDB}:${key}>`
        }
      })()).join("\n")+
    `</${ESOAPNamespaces.NAMESPACE_LDB}:${operation}Request>`
  }

  [EStaffOperation.getArrBoardWithDetails] = ({ filterType = EFilterType.to, timeOffset = 0, timeWindow = 120, ..._params}: IParams_GetArrBoardWithDetails) => {
    const params = {filterType, timeOffset, timeWindow, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getArrBoardWithDetails, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getArrDepBoardWithDetails] = ({filterType = EFilterType.to, timeOffset = 0, timeWindow = 120, ..._params}: IParams_GetArrDepBoardWithDetails) => {
    const params = {filterType, timeOffset, timeWindow, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getArrDepBoardWithDetails, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getArrivalBoardByCrs] = ({time = new Date(), services = EServices.TRAIN, numRows = 120, timeWindow = 120, getNonPassengerServices = false, ..._params}: IParams_GetArrivalBoardByCRS) => {
    const params = {time: time.toISOString(), services, numRows, timeWindow, getNonPassengerServices, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getArrivalBoardByCrs, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getArrivalBoardByTiploc] = ({time = new Date(), numRows = 120, services = EServices.TRAIN, getNonPassengerServices = false, ..._params}: IParams_GetArrivalBoardByTIPLOC) => {
    const params = {time: time.toISOString(), services, numRows, getNonPassengerServices, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getArrivalBoardByTiploc, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getArrivalDepartureBoardByCrs] = ({time = new Date(), numRows = 120, services = EServices.TRAIN, getNonPassengerServices = false, ..._params}: IParams_GetArrivalDepartureBoardByCRS) => {
    const params = {timetime: time.toISOString(), services, numRows, getNonPassengerServices, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getArrivalDepartureBoardByCrs, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getArrivalDepartureBoardByTiploc] = ({time = new Date(), numRows = 120, services = EServices.TRAIN, getNonPassengerServices = false, ..._params}: IParams_GetArrivalDepartureBoardByTIPLOC) => {
    const params = {timetime: time.toISOString(), services, numRows, getNonPassengerServices, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getArrivalDepartureBoardByTiploc, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getDepBoardWithDetails] = ({numRows = 120, timeWindow = 120, timeOffset = 0, ..._params}: IParams_GetDepBoardWithDetails) => {
    const params = {numRows, timeWindow, timeOffset, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getDepBoardWithDetails, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getDepartureBoardByCrs] = ({timeWindow = 120, time = new Date(), getNonPassengerServices = false, services = EServices.TRAIN, numRows = 120, filterType = EFilterType.to, ..._params}: IParams_GetDepartureBoardByCRS) => {
    const params = {time: time.toISOString(), timeWindow, getNonPassengerServices, services, numRows, filterType, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getDepartureBoardByCrs, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getDepartureBoardByTiploc] = ({time = new Date(), getNonPassengerServices = false, services = EServices.TRAIN, numRows = 120, filterType = EFilterType.to, ..._params}: IParams_GetDepartureBoardByTIPLOC) => {
    const params = {timetime: time.toISOString(), getNonPassengerServices, services, numRows, filterType, ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getDepartureBoardByTiploc, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getDisruptionList] = ({..._params}: IParams_GetDisruptionList) => {
    const params = {..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getDisruptionList, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getFastestDepartures] = ({services = EServices.TRAIN, timeWindow = 120, time = new Date(), ..._params}: IParams_GetFastestDepartures) => {
    const params = {services, timeWindow, time: time.toISOString(), ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getFastestDepartures, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getFastestDeparturesWithDetails] = ({services = EServices.TRAIN, timeWindow = 120, time = new Date(), ..._params}: IParams_GetFastestDeparturesWithDetails) => {
    const params = {services, timeWindow, time: time.toISOString(), ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getFastestDeparturesWithDetails, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getHistoricDepartureBoard] = ({depBoardDate = EDateModifier.SAME, numRows = 120, services = EServices.TRAIN, timeWindow = 120, ..._params}: IParams_GetHistoricDepartureBoard) => {
    const params = {depBoardDate, numRows, services, timeWindow, ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getHistoricDepartureBoard, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getHistoricServiceDetails] = ({..._params}: IParams_GetHistoricServiceDetails) => {
    const params = {..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getHistoricServiceDetails, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getHistoricTimeLine] = ({..._params}: IParams_GetHistoricTimeLine) => {
    const params = {..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getHistoricTimeLine, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getNextDepartures] = ({time = new Date(), timeWindow = 120, services = EServices.TRAIN, ..._params}: IParams_GetNextDepartures) => {
    const params = {time: time.toISOString(), timeWindow, services, ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getNextDepartures, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getNextDeparturesWithDetails] = ({time = new Date(), timeWindow = 120, services = EServices.TRAIN, ..._params}: IParams_GetNextDeparturesWithDetails) => {
    const params = {time: time.toISOString(), timeWindow, services, ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getNextDeparturesWithDetails, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getReasonCode] = ({..._params}: IParams_GetReasonCode) => {
    const params = {..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getReasonCode, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getReasonCodeList] = ({..._params}: IParams_GetReasonCodeList) => {
    const params = {..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getReasonCodeList, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getServiceDetailsByRid] = ({..._params}: IParams_GetServiceDetailsByRID) => {
    const params = {..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getServiceDetailsByRid, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getStationList] = ({..._params}: IParams_GetStationList) => {
    const params = {..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getStationList, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.getTocList] = ({..._params}: IParams_GetTocList) => {
    const params = {..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getTocList, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.queryHistoricServices] = ({timeFilter = new Date(), ..._params}: IParams_QueryHistoricServices) => {
    const params = {timeFilter: timeFilter.toISOString(), ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.queryHistoricServices, params)}${XMLClosing}`
    return XML;
  }
  [EStaffOperation.queryServices] = ({sdd = new Date(), ..._params}: IParams_QueryServices) => {
    const params = {sdd: sdd.toISOString(), ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.queryServices, params)}${XMLClosing}`
    return XML;
  }
}

export {
  IOpenLDBWS,
  EOperation,
  EStaffOperation,
  ESOAPStaffAction,
  ESOAPAction,
  ILDBWSSoapOptions,
  ILDBWSSoap,
  IOperationInfo,
  EOperationInfoEntryType,
  EOperationInfoEntries,
  IOperationInfoEntry,
  ELDBWSOperationInfoKeys,
  IOperationParams,
  TStaffOperation,
  IParams_GetArrBoardWithDetails,
  IParams_GetArrDepBoardWithDetails,
  IParams_GetArrivalBoardByCRS,
  IParams_GetArrivalBoardByTIPLOC,
  IParams_GetArrivalDepartureBoardByCRS,
  IParams_GetArrivalDepartureBoardByTIPLOC,
  IParams_GetDepBoardWithDetails,
  IParams_GetDepartureBoardByCRS,
  IParams_GetDepartureBoardByTIPLOC,
  IParams_GetDisruptionList,
  IParams_GetFastestDepartures,
  IParams_GetFastestDeparturesWithDetails,
  IParams_GetHistoricDepartureBoard,
  IParams_GetHistoricServiceDetails,
  IParams_GetHistoricTimeLine,
  IParams_GetNextDepartures,
  IParams_GetNextDeparturesWithDetails,
  IParams_GetReasonCode,
  IParams_GetReasonCodeList,
  IParams_GetServiceDetailsByRID,
  IParams_GetStationList,
  IParams_GetTocList,
  IParams_QueryHistoricServices,
  IParams_QueryServices,
  EListFields,
  ITSOpenLDBConstructorParams,
  EFilterType,
  EServices,
  EDateModifier
};