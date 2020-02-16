import {
  // IOpenLDBWS,
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
  EDateModifier,
  IFetchFromDarwinResult,
  EStaffBodyKeys,
  IOpenLDBSVWSStationBoard,
  IOpenLDBSVWSServiceDetails,
  IOpenLDBSVWSServiceItem,
  IOpenLDBSVWSServiceLocation
} from "./interfaces";



import {
  XMLClosing,
  XMLOpening,//.replace("$$_TOKEN_$$", this._apiKey),
  ESOAPNamespaces
} from "./constants";

import fetch, {Response} from "node-fetch";
import xml2js from "xml2js";

export interface ITSOpenLDB {
  getArrBoardWithDetails: (params: IParams_GetArrBoardWithDetails) => Promise<IOpenLDBSVWSStationBoard>
  getArrDepBoardWithDetails: (params: IParams_GetArrDepBoardWithDetails) => Promise<IOpenLDBSVWSStationBoard>
  getArrivalDepartureBoardByCRS: (GetArrivalDepartureBoardByCRS) => Promise<IOpenLDBSVWSStationBoard>
  getArrivalDepartureBoardByTIPLOC: (params: IParams_GetArrivalDepartureBoardByTIPLOC) => Promise<IOpenLDBSVWSStationBoard>
  getArrivalBoardByCRS: (params: IParams_GetArrivalBoardByCRS) => Promise<IOpenLDBSVWSStationBoard>
  getArrivalBoardByTIPLOC: (params: IParams_GetArrivalBoardByTIPLOC) => Promise<IOpenLDBSVWSStationBoard>
  getDepartureBoardByCRS: (params: IParams_GetDepartureBoardByCRS) => Promise<IOpenLDBSVWSStationBoard>
  getDepartureBoardByTIPLOC: (params: IParams_GetDepartureBoardByTIPLOC) => Promise<IOpenLDBSVWSStationBoard>
  getDepBoardWithDetails: (params: IParams_GetDepBoardWithDetails) => Promise<IOpenLDBSVWSStationBoard>
  getDisruptionList: (params: IParams_GetDisruptionList) => Promise<string>
  getHistoricDepartureBoard: (params: IParams_GetHistoricDepartureBoard) => Promise<IOpenLDBSVWSStationBoard>
  getHistoricServiceDetails: (params: IParams_GetHistoricServiceDetails) => Promise<IOpenLDBSVWSServiceDetails>
  getHistoricTimeLine: (params: IParams_GetHistoricTimeLine) => Promise<string>
  getServiceDetailsByRid: (params: IParams_GetServiceDetailsByRID) => Promise<IOpenLDBSVWSServiceDetails>
  queryHistoricServices: (params: IParams_QueryHistoricServices) => Promise<string>
  queryServices: (params: IParams_QueryServices) => Promise<string>
  getNextDepartures: (params: IParams_GetNextDepartures) => Promise<IOpenLDBSVWSStationBoard>
  getNextDeparturesWithDetails: (params: IParams_GetNextDeparturesWithDetails) => Promise<IOpenLDBSVWSStationBoard>
  getFastestDepartures: (params: IParams_GetFastestDepartures) => Promise<IOpenLDBSVWSStationBoard>
  getFastestDeparturesWithDetails: (params: IParams_GetFastestDeparturesWithDetails) => Promise<IOpenLDBSVWSStationBoard>
  // [EStaffOperation.getArrBoardWithDetails] = () => void
  // [EStaffOperation.getArrDepBoardWithDetails] = () => void
}
// fetchFromDarwin
export default class TSOpenLDB implements ITSOpenLDB {
  private _apiKey: string;
  private _debugEnabled: boolean = false;

  constructor({apiKey, debugEnabled = false}:ITSOpenLDBConstructorParams){
    if (!apiKey || typeof apiKey !== "string"){
      throw new Error("You must provide an API key from the National Rail OpenLDB Staff Webservice. Register: http://openldbsv.nationalrail.co.uk/");
    }
    this._apiKey = apiKey;
    this._debugEnabled = debugEnabled;
  }

  private CallRequiredParams = (params: IOperationParams):TStaffOperation => {
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

  private logToConsole = (message: string | object = "No message") => {
    console.log(`${new Date().toISOString()} ${typeof message === "object" ? JSON.stringify(message) : message}`);
  }

  
  private fetchFromDarwin = async (operation: ESOAPStaffAction, xml: string): Promise<IOpenLDBSVWSStationBoard | IOpenLDBSVWSServiceDetails | string> => {
    const headers = {
      SOAPAction: operation,
      "Content-Type": "text/xml"
    };

    const fetchRequest = await fetch("https://lite.realtime.nationalrail.co.uk/OpenLDBSVWS/ldbsv12.asmx", {
      method: "POST",
      body: xml,
      headers
    });

    if (this._debugEnabled){
      this.logToConsole({headers, xml, operation})
    }

    if ((fetchRequest as Response).status !== 200){
      throw new Error(`Request error (Status code ${(fetchRequest as Response).status}). Please ensure your key is correct, and that it is valid.`)
    }
    
    const responseData = await (fetchRequest as Response).text();

    const parsedXML = await xml2js.parseStringPromise(responseData, {
      tagNameProcessors: [xml2js.processors.stripPrefix],
      explicitArray: false,
      ignoreAttrs: true
    });

    const firstTree = {...Object.values((parsedXML as IFetchFromDarwinResult).Envelope.Body)[0]};
    const result = {...Object.values(firstTree)[0]};

    if (this._debugEnabled){
      this.logToConsole({result})
    }
    //@ts-ignore
    return result;
  }

  private mapParamsToSOAPXml = (operation: EStaffOperation, params: IOperationParams) => {
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

  public getArrBoardWithDetails = async ({numRows = 120, timeWindow = 120, timeOffset = 0, time = new Date().toISOString(), ..._params}: IParams_GetArrBoardWithDetails): Promise<IOpenLDBSVWSStationBoard> => {
    const _time = Boolean(timeOffset)
      ? timeOffset < 0 ? new Date(new Date().getTime() - 1000 * (60 * timeOffset)).toISOString() : new Date(new Date().getTime() + 1000 * (60 * timeOffset)).toISOString()
      : time;
    const params = {numRows, timeWindow, time: _time, timeOffset, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getArrBoardWithDetails, params)}${XMLClosing}`;
    return {
      trainServices:{ service: []},
      busServices:{ service: []},
      ferryServices:{ service: []},
      platformsAreHidden: false,
      servicesAreUnavailable: false,
      ...await this.fetchFromDarwin(ESOAPStaffAction.GetArrBoardWithDetails, XML) as IOpenLDBSVWSStationBoard
    };
  }
  public getArrDepBoardWithDetails = async ({filterType = EFilterType.to, timeOffset = 0, timeWindow = 120, ..._params}: IParams_GetArrDepBoardWithDetails): Promise<IOpenLDBSVWSStationBoard> => {
    const params = {filterType, timeOffset, timeWindow, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getArrDepBoardWithDetails, params)}${XMLClosing}`
    return {
      trainServices:{ service: []},
      busServices:{ service: []},
      ferryServices:{ service: []},
      platformsAreHidden: false,
      servicesAreUnavailable: false,
      ...await this.fetchFromDarwin(ESOAPStaffAction.GetArrDepBoardWithDetails, XML) as IOpenLDBSVWSStationBoard
    };
  }
  public getArrivalBoardByCRS = async ({time = new Date(), services = EServices.TRAIN, numRows = 120, timeWindow = 120, getNonPassengerServices = false, ..._params}: IParams_GetArrivalBoardByCRS): Promise<IOpenLDBSVWSStationBoard> => {
    const params = {time: time.toISOString(), services, numRows, timeWindow, getNonPassengerServices, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getArrivalBoardByCrs, params)}${XMLClosing}`
    return {
      trainServices:{ service: []},
      busServices:{ service: []},
      ferryServices:{ service: []},
      platformsAreHidden: false,
      servicesAreUnavailable: false,
      ...await this.fetchFromDarwin(ESOAPStaffAction.GetArrivalBoardByCrs, XML) as IOpenLDBSVWSStationBoard
    };
  }
  public getArrivalBoardByTIPLOC = async ({time = new Date(), numRows = 120, services = EServices.TRAIN, getNonPassengerServices = false, ..._params}: IParams_GetArrivalBoardByTIPLOC): Promise<IOpenLDBSVWSStationBoard> => {
    const params = {time: time.toISOString(), services, numRows, getNonPassengerServices, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getArrivalBoardByTiploc, params)}${XMLClosing}`
    return {
      trainServices:{ service: []},
      busServices:{ service: []},
      ferryServices:{ service: []},
      platformsAreHidden: false,
      servicesAreUnavailable: false,
      ...await this.fetchFromDarwin(ESOAPStaffAction.GetArrivalBoardByTiploc, XML) as IOpenLDBSVWSStationBoard
    };
  }
  public getArrivalDepartureBoardByCRS = async ({time = new Date(), numRows = 120, services = EServices.TRAIN, getNonPassengerServices = false, ..._params}: IParams_GetArrivalDepartureBoardByCRS): Promise<IOpenLDBSVWSStationBoard> => {
    const params = {timetime: time.toISOString(), services, numRows, getNonPassengerServices, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getArrivalDepartureBoardByCrs, params)}${XMLClosing}`
    return {
      trainServices:{ service: []},
      busServices:{ service: []},
      ferryServices:{ service: []},
      platformsAreHidden: false,
      servicesAreUnavailable: false,
      ...await this.fetchFromDarwin(ESOAPStaffAction.GetArrivalDepartureBoardByCrs, XML) as IOpenLDBSVWSStationBoard
    };
  }
  public getArrivalDepartureBoardByTIPLOC = async ({time = new Date(), numRows = 120, services = EServices.TRAIN, getNonPassengerServices = false, ..._params}: IParams_GetArrivalDepartureBoardByTIPLOC): Promise<IOpenLDBSVWSStationBoard> => {
    const params = {timetime: time.toISOString(), services, numRows, getNonPassengerServices, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getArrivalDepartureBoardByTiploc, params)}${XMLClosing}`
    return {
      trainServices:{ service: []},
      busServices:{ service: []},
      ferryServices:{ service: []},
      platformsAreHidden: false,
      servicesAreUnavailable: false,
      ...await this.fetchFromDarwin(ESOAPStaffAction.GetArrivalDepartureBoardByCrs, XML) as IOpenLDBSVWSStationBoard
    };
  }
  public getDepBoardWithDetails = async ({numRows = 120, timeWindow = 120, timeOffset = 0, time = new Date().toISOString(), ..._params}: IParams_GetDepBoardWithDetails): Promise<IOpenLDBSVWSStationBoard> => {
    const _time = Boolean(timeOffset)
      ? timeOffset < 0 ? new Date(new Date().getTime() - 1000 * (60 * timeOffset)).toISOString() : new Date(new Date().getTime() + 1000 * (60 * timeOffset)).toISOString()
      : time;
    const params = {numRows, timeWindow, time: _time, timeOffset, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getDepBoardWithDetails, params)}${XMLClosing}`;
    return {
      trainServices:{ service: []},
      busServices:{ service: []},
      ferryServices:{ service: []},
      platformsAreHidden: false,
      servicesAreUnavailable: false,
      ...await this.fetchFromDarwin(ESOAPStaffAction.GetDepBoardWithDetails, XML) as IOpenLDBSVWSStationBoard
    };
  }
  public getDepartureBoardByCRS = async ({timeWindow = 120, time = new Date(), getNonPassengerServices = false, services = EServices.TRAIN, numRows = 120, filterType = EFilterType.to, ..._params}: IParams_GetDepartureBoardByCRS): Promise<IOpenLDBSVWSStationBoard> => {
    const params = {time: time.toISOString(), timeWindow, getNonPassengerServices, services, numRows, filterType, ..._params}
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getDepartureBoardByCrs, params)}${XMLClosing}`
    return {
      trainServices:{ service: []},
      busServices:{ service: []},
      ferryServices:{ service: []},
      platformsAreHidden: false,
      servicesAreUnavailable: false,
      ...await this.fetchFromDarwin(ESOAPStaffAction.GetDepartureBoardByCrs, XML) as IOpenLDBSVWSStationBoard
    };
  }
  public getDepartureBoardByTIPLOC = async ({time = new Date(), getNonPassengerServices = false, services = EServices.TRAIN, numRows = 120, filterType = EFilterType.to, ..._params}: IParams_GetDepartureBoardByTIPLOC): Promise<IOpenLDBSVWSStationBoard> => {
    const params = {timetime: time.toISOString(), getNonPassengerServices, services, numRows, filterType, ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getDepartureBoardByTiploc, params)}${XMLClosing}`
    return {
      trainServices:{ service: []},
      busServices:{ service: []},
      ferryServices:{ service: []},
      platformsAreHidden: false,
      servicesAreUnavailable: false,
      ...await this.fetchFromDarwin(ESOAPStaffAction.GetDepartureBoardByTiploc, XML) as IOpenLDBSVWSStationBoard
    };
  }
  public getDisruptionList = async ({..._params}: IParams_GetDisruptionList): Promise<string> => {
    const params = {..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getDisruptionList, params)}${XMLClosing}`
    return await this.fetchFromDarwin(ESOAPStaffAction.GetDisruptionList, XML) as string;
  }
  public getFastestDepartures = async ({services = EServices.TRAIN, timeWindow = 120, time = new Date(), ..._params}: IParams_GetFastestDepartures): Promise<IOpenLDBSVWSStationBoard> => {
    const params = {services, timeWindow, time: time.toISOString(), ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getFastestDepartures, params)}${XMLClosing}`
    return {
      trainServices:{ service: []},
      busServices:{ service: []},
      ferryServices:{ service: []},
      platformsAreHidden: false,
      servicesAreUnavailable: false,
      ...await this.fetchFromDarwin(ESOAPStaffAction.GetFastestDepartures, XML) as IOpenLDBSVWSStationBoard
    };
  }
  public getFastestDeparturesWithDetails = async ({services = EServices.TRAIN, timeWindow = 120, time = new Date(), ..._params}: IParams_GetFastestDeparturesWithDetails): Promise<IOpenLDBSVWSStationBoard> => {
    const params = {services, timeWindow, time: time.toISOString(), ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getFastestDeparturesWithDetails, params)}${XMLClosing}`
    return {
      trainServices:{ service: []},
      busServices:{ service: []},
      ferryServices:{ service: []},
      platformsAreHidden: false,
      servicesAreUnavailable: false,
      ...await this.fetchFromDarwin(ESOAPStaffAction.GetFastestDeparturesWithDetails, XML) as IOpenLDBSVWSStationBoard
    };
  }
  public getHistoricDepartureBoard = async ({depBoardDate = EDateModifier.SAME, numRows = 120, services = EServices.TRAIN, timeWindow = 120, ..._params}: IParams_GetHistoricDepartureBoard): Promise<IOpenLDBSVWSStationBoard> => {
    const params = {depBoardDate, numRows, services, timeWindow, ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getHistoricDepartureBoard, params)}${XMLClosing}`
    return {
      trainServices:{ service: []},
      busServices:{ service: []},
      ferryServices:{ service: []},
      platformsAreHidden: false,
      servicesAreUnavailable: false,
      ...await this.fetchFromDarwin(ESOAPStaffAction.GetArrivalDepartureBoardByCrs, XML) as IOpenLDBSVWSStationBoard
    };
  }
  public getHistoricServiceDetails = async ({..._params}: IParams_GetHistoricServiceDetails): Promise<IOpenLDBSVWSServiceDetails> => {
    const params = {..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getHistoricServiceDetails, params)}${XMLClosing}`
    return await this.fetchFromDarwin(ESOAPStaffAction.GetHistoricServiceDetails, XML) as IOpenLDBSVWSServiceDetails;
  }
  public getHistoricTimeLine = async ({..._params}: IParams_GetHistoricTimeLine): Promise<string> => {
    const params = {..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getHistoricTimeLine, params)}${XMLClosing}`
    return await this.fetchFromDarwin(ESOAPStaffAction.GetHistoricTimeLine, XML) as string;
  }
  public getNextDepartures = async ({time = new Date(), timeWindow = 120, services = EServices.TRAIN, ..._params}: IParams_GetNextDepartures): Promise<IOpenLDBSVWSStationBoard> => {
    const params = {time: time.toISOString(), timeWindow, services, ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getNextDepartures, params)}${XMLClosing}`
    return {
      trainServices:{ service: []},
      busServices:{ service: []},
      ferryServices:{ service: []},
      platformsAreHidden: false,
      servicesAreUnavailable: false,
      ...await this.fetchFromDarwin(ESOAPStaffAction.GetNextDepartures, XML) as IOpenLDBSVWSStationBoard
    };
  }
  public getNextDeparturesWithDetails = async ({time = new Date(), timeWindow = 120, services = EServices.TRAIN, ..._params}: IParams_GetNextDeparturesWithDetails): Promise<IOpenLDBSVWSStationBoard> => {
    const params = {time: time.toISOString(), timeWindow, services, ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getNextDeparturesWithDetails, params)}${XMLClosing}`
    return {
      trainServices:{ service: []},
      busServices:{ service: []},
      ferryServices:{ service: []},
      platformsAreHidden: false,
      servicesAreUnavailable: false,
      ...await this.fetchFromDarwin(ESOAPStaffAction.GetNextDeparturesWithDetails, XML) as IOpenLDBSVWSStationBoard
    };
  }

  getServiceDetailsByRid = async ({..._params}: IParams_GetServiceDetailsByRID): Promise<IOpenLDBSVWSServiceDetails> => {
    const params = {..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.getServiceDetailsByRid, params)}${XMLClosing}`
    return await this.fetchFromDarwin(ESOAPStaffAction.GetServiceDetailsByRid, XML) as IOpenLDBSVWSServiceDetails;
  }

  public queryHistoricServices = async ({timeFilter = new Date(), ..._params}: IParams_QueryHistoricServices): Promise<string> => {
    const params = {timeFilter: timeFilter.toISOString(), ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.queryHistoricServices, params)}${XMLClosing}`
    return await this.fetchFromDarwin(ESOAPStaffAction.QueryHistoricServices, XML) as string;
  }
  public queryServices = async ({sdd = new Date(), ..._params}: IParams_QueryServices): Promise<string> => {
    const params = {sdd: sdd.toISOString(), ..._params};
    const XML = `${XMLOpening.replace("$$_TOKEN_$$", this._apiKey)}${this.mapParamsToSOAPXml(EStaffOperation.queryServices, params)}${XMLClosing}`
    return await this.fetchFromDarwin(ESOAPStaffAction.QueryServices, XML) as string;
  }
}


export {
  // IOpenLDBWS,
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
  IOpenLDBSVWSServiceLocation,
  EServices,
  EDateModifier,
  IOpenLDBSVWSStationBoard,
  IOpenLDBSVWSServiceDetails,
  IOpenLDBSVWSServiceItem
}