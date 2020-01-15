import EDarwinStation from "./DarwinStations";

export enum ESOAPStaffAction {
  GetArrBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrBoardWithDetails",
  GetArrDepBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrDepBoardWithDetails",
  GetArrivalDepartureBoardByCrs =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalDepartureBoardByCRS",
  GetArrivalDepartureBoardByTiploc =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalDepartureBoardByTIPLOC",
  GetArrivalBoardByCrs =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalBoardByCRS",
  GetArrivalBoardByTiploc =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalBoardByTIPLOC",
  GetDepartureBoardByCrs =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetDepartureBoardByCRS",
  GetDepartureBoardByTiploc =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetDepartureBoardByTIPLOC",
  GetDepBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetDepBoardWithDetails",
  GetDisruptionList =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetDisruptionList",
  GetHistoricDepartureBoard =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetHistoricDepartureBoard",
  GetHistoricServiceDetails =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetHistoricServiceDetails",
  GetHistoricTimeLine =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetHistoricTimeLine",
  GetServiceDetailsByRid =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetServiceDetailsByRID",
  QueryHistoricServices =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/QueryHistoricServices",
  QueryServices =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/QueryServices",

  GetDepartureBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetDepBoardWithDetails",
  GetArrivalBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrBoardWithDetails",
  GetArrivalDepartureBoard =     "GetArrivalDepartureBoard",
  GetArrivalDepartureBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrDepBoardWithDetails",
  GetNextDepartures =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetNextDepartures",
  GetNextDeparturesWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetNextDeparturesWithDetails",
  GetFastestDepartures =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetFastestDepartures",
  GetFastestDeparturesWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetFastestDeparturesWithDetails",
}

export enum ESOAPAction {
  GetDepartureBoard =  "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetDepartureBoard",
  GetDepartureBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetDepBoardWithDetails",
  GetArrivalBoard =  "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetArrivalBoard",
  GetArrivalBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetArrBoardWithDetails",
  GetArrivalDepartureBoard =  "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetArrivalDepartureBoard",
  GetArrivalDepartureBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetArrDepBoardWithDetails",
  GetNextDepartures =  "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetNextDepartures",
  GetNextDeparturesWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetNextDeparturesWithDetails",
  GetFastestDepartures =  "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetFastestDepartures",
  GetFastestDeparturesWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetFastestDeparturesWithDetails",
  GetServiceDetails =  "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetServiceDetails",
}

export enum EOperation {
  getDepartureBoard =  "GetDepartureBoard",
  getDepartureBoardWithDetails =  "GetDepBoardWithDetails",
  getArrivalBoard =  "GetArrivalBoard",
  getArrivalBoardWithDetails =  "GetArrBoardWithDetails",
  getArrivalDepartureBoard =  "GetArrivalDepartureBoard",
  getArrivalDepartureBoardWithDetails =  "GetArrDepBoardWithDetails",
  getNextDepartures =  "GetNextDepartures",
  getNextDeparturesWithDetails =  "GetNextDeparturesWithDetails",
  getFastestDepartures =  "GetFastestDepartures",
  getFastestDeparturesWithDetails =  "GetFastestDeparturesWithDetails",
  getServiceDetails =  "GetServiceDetails",
}

export enum EStaffOperation {
  getArrBoardWithDetails =   "GetArrBoardWithDetails",
  getArrDepBoardWithDetails =   "GetArrDepBoardWithDetails",
  getArrivalDepartureBoardByCrs =   "GetArrivalDepartureBoardByCRS",
  getArrivalDepartureBoardByTiploc =   "GetArrivalDepartureBoardByTIPLOC",
  getArrivalBoardByCrs =   "GetArrivalBoardByCRS",
  getArrivalBoardByTiploc =   "GetArrivalBoardByTIPLOC",
  getDepartureBoardByCrs =   "GetDepartureBoardByCRS",
  getDepartureBoardByTiploc =   "GetDepartureBoardByTIPLOC",
  getDepBoardWithDetails =   "GetDepBoardWithDetails",
  getDisruptionList =   "GetDisruptionList",
  getHistoricDepartureBoard =   "GetHistoricDepartureBoard",
  getHistoricServiceDetails =   "GetHistoricServiceDetails",
  getHistoricTimeLine =   "GetHistoricTimeLine",
  getServiceDetailsByRid =   "GetServiceDetailsByRID",
  queryHistoricServices =   "QueryHistoricServices",
  queryServices =   "QueryServices",
  getNextDepartures =   "GetNextDepartures",
  getNextDeparturesWithDetails =   "GetNextDeparturesWithDetails",
  getFastestDepartures =   "GetFastestDepartures",
  getFastestDeparturesWithDetails =   "GetFastestDeparturesWithDetails",

  getTocList = "GetTocList",
  getStationList = "GetStationList",
  getReasonCode = "GetReasonCode",
  getReasonCodeList = "GetReasonCodeList",


  // getDepartureBoard =      "GetDepartureBoard",
  // getDepartureBoardWithDetails =   "GetDepBoardWithDetails",
  // getArrivalBoard =      "GetArrivalBoard",
  // getArrivalBoardWithDetails =   "GetArrBoardWithDetails",
  // getArrivalDepartureBoard =      "GetArrivalDepartureBoard",
  // getArrivalDepartureBoardWithDetails =   "GetArrDepBoardWithDetails",
  // getServiceDetails =      "GetServiceDetails",
}

export interface IParams_GetArrBoardWithDetails {
  numRows: number,
  crs: string,
  filterCrs?: string,
  filterType?: EFilterType,
  timeOffset?: number,
  timeWindow?: number
}
export interface IParams_GetArrDepBoardWithDetails {
  numRows: number,
  crs: string,
  filterCrs?: string,
  filterType?: EFilterType,
  timeOffset?: number,
  timeWindow?: number
}
export interface IParams_GetArrivalBoardByCRS {
  numRows: number,
  crs: string,
  time: Date,
  timeWindow?: number,
  filterCrs?: string,
  filterType?: EFilterType,
  filterTOC?: string[] | string,
  services?: EServices,
  getNonPassengerServices?: boolean
}
export interface IParams_GetArrivalBoardByTIPLOC {
  numRows: number,
  tiploc: string,
  time: Date,
  filterTiploc?: string,
  filterType?: EFilterType,
  filterTOC?: string[] | string,
  services?: EServices,
  getNonPassengerServices?: boolean
}
export interface IParams_GetArrivalDepartureBoardByCRS {
  numRows: number,
  crs: string,
  time: Date,
  filterCrs?: string,
  filterType?: EFilterType,
  filterTOC?: string[] | string,
  services?: EServices,
  getNonPassengerServices?: boolean
}
export interface IParams_GetArrivalDepartureBoardByTIPLOC {
  numRows: number,
  tiploc: string,
  time: Date,
  filterTiploc: string,
  filterType: EFilterType,
  filterTOC: string[] | string,
  services?: EServices,
  getNonPassengerServices: boolean
}
export interface IParams_GetDepBoardWithDetails {
  numRows: number,
  crs: string,
  timeOffset?: number,
  filterCrs?: string,
  filterType?: EFilterType,
  timeWindow?: number
}
export interface IParams_GetDepartureBoardByCRS {
  crs: string,
  time: Date,
  numRows: number,
  timeWindow?: number,
  filterCrs?: string,
  filterType?: EFilterType,
  filterTOC?: string[] | string,
  services?: EServices,
  getNonPassengerServices?: boolean
}
export interface IParams_GetDepartureBoardByTIPLOC {
  numRows: number,
  tiploc: string,
  time: Date,
  filterTiploc?: string,
  filterType?: EFilterType,
  filterTOC?: string[] | string,
  services?: EServices,
  getNonPassengerServices?: boolean
}
export interface IParams_GetDisruptionList{ crsList: string[] }
export interface IParams_GetFastestDepartures {
  crs: string,
  filterList: string[],
  time: Date,
  timeWindow?: number,
  filterTOC?: string[] | string,
  services?: EServices
}
export interface IParams_GetFastestDeparturesWithDetails {
  crs: string
  filterList: string[]
  time: Date
  timeWindow?: number
  filterTOC?: string[] | string
  services?: EServices
}
export interface IParams_GetHistoricDepartureBoard {
  numRows: number,
  crs: string,
  historicDatetime: Date,
  depBoardDate?: EDateModifier,
  depBoardtime?: string,
  timeWindow?: number,
  filterCrs?: string,
  filterCrsType?: EFilterType,
  filterTOC?: string[] | string,
  services?: EServices,
  getNonPassengerServices?: boolean
}
export interface IParams_GetHistoricServiceDetails {
  serviceUID: string,
  historicDateTime: string
  scheduleStartDate?: EDateModifier,
}
export interface IParams_GetHistoricTimeLine {
  serviceUID: string,
  scheduleStartDate: EDateModifier,
  historicDatetime: string,
  fullTiploc: string
}
export interface IParams_GetNextDepartures {
  crs: string,
  filterList: string[],
  time: Date,
  timeWindow?: number,
  filterTOC?: string[] | string,
  services?: EServices
}
export interface IParams_GetNextDeparturesWithDetails {
  crs: string,
  filterList: string[],
  time: Date,
  timeWindow?: number,
  filterTOC?: string[] | string,
  services?: EServices
}
export interface IParams_GetServiceDetailsByRID{ rid: string }
export interface IParams_QueryHistoricServices {
  serviceID: string,
  historicDatetime?: Date,
  scheduleStartDate?: EDateModifier,
  timeFilter?: Date,
  routeCrsFilter?: string,
  tocFilter?: string
}
export interface IParams_QueryServices {
  serviceID: string,
  sdd: Date,
  filtertime?: string,
  filterCrs?: string,
  tocFilter?: string
}
export interface IParams_GetTocList{ currentVersion: string }
export interface IParams_GetStationList{ currentVersion: string }
export interface IParams_GetReasonCode{ reasonCode: number }
export interface IParams_GetReasonCodeList{}

export enum EFilterType {
  from = "from",
  to = "to"
}

export enum EServices {
  TRAIN = "P",
  BUS = "B",
  SHIP = "S"
}

export enum EDateModifier {
  PREVIOUS = "Previous Day",
  SAME = "Same Day",
  NEXT = "Next Day"
}

export enum EListFields {
  crsList = "crs",
  filterList = "crs",
  filterTOC = "toc"
}

export interface IOperationParams {
  crs?: string
  crsList?: string[]
  currentVersion?: string
  depBoardDate?: EDateModifier
  depBoardTime?: string
  filterCrs?: string
  filterCRSType?: EFilterType
  filterList?: string[]
  filterTime?: string
  filterTiploc?: string
  filterTOC?: string[] | string
  filterType?: EFilterType
  fullTiploc?: string
  getNonPassengerServices?: boolean
  historicDateTime?: string
  numRows?: number
  reasonCode?: number
  rid?: string
  routeCrsFilter?: string
  scheduleStartDate?: EDateModifier
  sdd?: string
  serviceID?: string
  services?: EServices
  serviceUID?: string
  time?: string
  timeFilter?: string
  timeOffset?: number
  timeWindow?: number
  tiploc?: string
  tocFilter?: string
}
export type TStaffOperation = Record<EStaffOperation, IOperationParams>;

export interface IOpenLDBWS {
  accessToken: string;
  baseURL: string;
  staff: boolean;
  enableDebug: boolean
  mapDelayCodeToReason: boolean;
  getDelayReason: (code: string | number) => string;
}

export interface ILDBWSSoapOptions {
  [key:string]: string
}

export interface ILDBWSSoap {
  token: string;
  request: any;
  options: ILDBWSSoapOptions;
  staff: boolean;
  generateCall: () => string;
  _payload: (options: ILDBWSSoapOptions) => string;
  _header: () => string;
}

export interface IOperationInfo {
  //
}

export enum EOperationInfoEntryType {
  BOARD = "board",
  DEPARTURE = "departure",
  SERVICE = "service"
}

export enum EOperationInfoEntries {
  GetDeparturesBoard,
  GetDepBoardWithDetails,
  GetArrivalBoard,
  GetArrBoardWithDetails,
  GetArrivalDepartureBoard,
  GetArrDepBoardWithDetails,
  GetNextDepartures,
  GetNextDeparturesWithDetails,
  GetFastestDepartures,
  GetFastestDeparturesWithDetails,
  GetServiceDetails,
  GetArrivalDepartureBoardByCrs,
  GetArrivalDepartureBoardByTiploc,
  GetArrivalBoardByCrs,
  GetArrivalBoardByTiploc,
  GetDepartureBoardByCrs,
  GetDepartureBoardByTiploc,
  GetHistoricDepartureBoard
}

export interface IOperationInfoEntry {
  key: EOperation | EStaffOperation,
  type: EOperationInfoEntryType
}

export enum ELDBWSOperationInfoKeys {
  GetStationBoardResult = "GetStationBoardResult",
  GetDeparturesBoard = "DeparturesBoard",
  GetServiceDetailsResult = "GetServiceDetailsResult"
}

export interface ITSOpenLDBConstructorParams {
  apiKey: string
}


export type EStaffBodyKeys = "GetArrBoardWithDetailsResponse" |
"GetArrDepBoardWithDetailsResponse" |
"GetArrivalDepartureBoardByCRSResponse" |
"GetArrivalDepartureBoardByTIPLOCResponse" |
"GetArrivalBoardByCRSResponse" |
"GetArrivalBoardByTIPLOCResponse" |
"GetDepartureBoardByCRSResponse" |
"GetDepartureBoardByTIPLOCResponse" |
"GetDepBoardWithDetailsResponse" |
"GetDisruptionListResponse" |
"GetHistoricDepartureBoardResponse" |
"GetHistoricServiceDetailsResponse" |
"GetHistoricTimeLineResponse" |
"GetServiceDetailsByRIDResponse" |
"QueryHistoricServicesResponse" |
"QueryServicesResponse" |
"GetNextDeparturesResponse" |
"GetNextDeparturesWithDetailsResponse" |
"GetFastestDeparturesResponse" |
"GetFastestDeparturesWithDetailsResponse" |
"GetTocListResponse" |
"GetStationListResponse" |
"GetReasonCodeResponse" |
"GetReasonCodeListResponse"

export interface IFetchFromDarwinResult {
  Envelope: {
    Body: {
      [key in EStaffBodyKeys] : {
        [key: string] : {}
      }
    }
  }
}




export enum EOpenLDBSVWSCoachClass {
  First = "First",
  Mixed = "Mixed",
  Standard = "Standard"
}

export interface IOpenLDBSVWSCoachLoading {
  // source
  // sourceInstance
  value: number
}

export enum EOpenLDBSVWSToiletStatus {
  Unknown = "Unknown",
  InService = "InService",
  NotInService = "NotInService"
}
export enum EOpenLDBSVWSToiletValue {
  Unknown = "Unknown",
  None = "None",
  Standard = "Standard",
  Accessible = "Accessible"
}
export interface IOpenLDBSVWSToiletAvailability {
  status: EOpenLDBSVWSToiletStatus
  value: EOpenLDBSVWSToiletValue
}

export interface IOpenLDBSVWSCoachData {
  coachClass: EOpenLDBSVWSCoachClass
  loading: IOpenLDBSVWSCoachLoading
  number: string
  toilet: IOpenLDBSVWSToiletAvailability
}

export interface IOpenLDBSVWSFormation {
  avgLoading: number
  // coaches
  // source
  // sourceInstance
}

export enum EOpenLDBSVWSActualForecast {
  Actual = "Actual",
  Forecast = "Forecast",
  Delayed = "Delayed"
}

export interface IOpenLDBSVWSServiceItemOrigin {
  locationName: EDarwinStation,
  crs: EDarwinStation,
  tiploc: string
}
export interface IOpenLDBSVWSServiceItem {
  rid: string
  uid: string
  trainid: string
  rsid: string
  origin: IOpenLDBSVWSServiceItemOrigin | IOpenLDBSVWSServiceItemOrigin[]
  destination: IOpenLDBSVWSServiceItemOrigin | IOpenLDBSVWSServiceItemOrigin[]
  // currentOrigins
  // currentDestinations
  
  sdd?: Date
  operator: string
  operatorCode: string
  isPassengerService?: boolean
  isCharter?: boolean
  isCancelled?: boolean
  isCircularRoute?: boolean
  filterLocationCancelled: boolean
  filterLocationOperational: boolean
  sta?: Date
  ata?: Date
  eta?: Date
  arrivalType?: EOpenLDBSVWSActualForecast
  arrivalSource?: string
  arrivalSourceInstance?: string
  std?: Date
  atd?: Date
  etd?: Date
  departureType?: EOpenLDBSVWSActualForecast
  departureSource?: any
  departureSourceInstance?: string
  platform: string
  platformIsHidden?: boolean
  serviceIsSuppressed?: boolean
  adhocAlerts: string[]
  cancelReason?: string
  delayReason?: string
  // category: string
  // activities
  length?: number
  isReverseFormation?: boolean
  detachFront?: boolean
  formation?: IOpenLDBSVWSFormation
}

export interface IOpenLDBSVWSStationBoard {
  generatedAt: Date
  locationName: EDarwinStation
  crs: EDarwinStation
  filterLocationName?: string
  filtercrs?: string
  // filterType?
  stationManager: string
  stationManagerCode: string
  nrccMessages?: string[]
  platformsAreHidden?: boolean
  servicesAreUnavailable?: boolean
  isTruncated?: boolean
  trainServices: {service: IOpenLDBSVWSServiceItem[]}
  busServices: {service: IOpenLDBSVWSServiceItem[]}
  ferryServices: {service: IOpenLDBSVWSServiceItem[]}
  qos: number
}

export interface IOpenLDBSVWSServiceLocation {
  locationName: string
  tiploc: string
  crs: EDarwinStation
  // associations
  // adhocAlerts
  // activities
  length?: number
  detachFront?: boolean
  isOperational?: boolean
  isPass?: boolean
  isCancelled?: boolean
  // falseDest?: 
  // fdTiploc?: string
  platform?: string
  platformIsHidden?: boolean
  serviceIsSuppressed?: boolean
  sta?: Date // If not present, this is destination or does not pick up passengers here
  ata?: Date // Only if arrivalType has 'Actual'
  eta?: Date // Only if sta is present, and arrivalType is 'Forecast'
  // arrivalSource
  // arrivalSourceInstance
  std?: Date // If not present, this is destination or does not pick up passengers here
  atd?: Date // Only if std is present, and departureType is "Actual"
  etd?: Date // Only if std is present, and departureType is "Forecast"
  departureType?: EOpenLDBSVWSActualForecast // only if std is present
  // departureSource
  // depatureSourceInstance
  lateness?: string | number
}

export interface IOpenLDBSVWSServiceDetails {
  generatedAt: Date
  rid: string
  uid: string
  rsid: string
  sdd: Date
  trainid: string
  serviceType: EServices
  isPassengerService?: boolean
  isCharter?: boolean
  operator: string
  operatorCode: string
  cancelReason?: string
  delayReason?: string
  isReverseFormation?: boolean
  // locations
  // formation
}