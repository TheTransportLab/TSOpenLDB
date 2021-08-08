import EDarwinStation from "./DarwinStations";
export declare enum ESOAPStaffAction {
    GetArrBoardWithDetails = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrBoardWithDetails",
    GetArrDepBoardWithDetails = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrDepBoardWithDetails",
    GetArrivalDepartureBoardByCrs = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalDepartureBoardByCRS",
    GetArrivalDepartureBoardByTiploc = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalDepartureBoardByTIPLOC",
    GetArrivalBoardByCrs = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalBoardByCRS",
    GetArrivalBoardByTiploc = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalBoardByTIPLOC",
    GetDepartureBoardByCrs = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetDepartureBoardByCRS",
    GetDepartureBoardByTiploc = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetDepartureBoardByTIPLOC",
    GetDepBoardWithDetails = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetDepBoardWithDetails",
    GetDisruptionList = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetDisruptionList",
    GetHistoricDepartureBoard = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetHistoricDepartureBoard",
    GetHistoricServiceDetails = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetHistoricServiceDetails",
    GetHistoricTimeLine = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetHistoricTimeLine",
    GetServiceDetailsByRid = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetServiceDetailsByRID",
    QueryHistoricServices = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/QueryHistoricServices",
    QueryServices = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/QueryServices",
    GetDepartureBoardWithDetails = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetDepBoardWithDetails",
    GetArrivalBoardWithDetails = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrBoardWithDetails",
    GetArrivalDepartureBoard = "GetArrivalDepartureBoard",
    GetArrivalDepartureBoardWithDetails = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrDepBoardWithDetails",
    GetNextDepartures = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetNextDepartures",
    GetNextDeparturesWithDetails = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetNextDeparturesWithDetails",
    GetFastestDepartures = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetFastestDepartures",
    GetFastestDeparturesWithDetails = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetFastestDeparturesWithDetails"
}
export declare enum ESOAPAction {
    GetDepartureBoard = "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetDepartureBoard",
    GetDepartureBoardWithDetails = "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetDepBoardWithDetails",
    GetArrivalBoard = "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetArrivalBoard",
    GetArrivalBoardWithDetails = "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetArrBoardWithDetails",
    GetArrivalDepartureBoard = "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetArrivalDepartureBoard",
    GetArrivalDepartureBoardWithDetails = "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetArrDepBoardWithDetails",
    GetNextDepartures = "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetNextDepartures",
    GetNextDeparturesWithDetails = "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetNextDeparturesWithDetails",
    GetFastestDepartures = "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetFastestDepartures",
    GetFastestDeparturesWithDetails = "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetFastestDeparturesWithDetails",
    GetServiceDetails = "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetServiceDetails"
}
export declare enum EOperation {
    getDepartureBoard = "GetDepartureBoard",
    getDepartureBoardWithDetails = "GetDepBoardWithDetails",
    getArrivalBoard = "GetArrivalBoard",
    getArrivalBoardWithDetails = "GetArrBoardWithDetails",
    getArrivalDepartureBoard = "GetArrivalDepartureBoard",
    getArrivalDepartureBoardWithDetails = "GetArrDepBoardWithDetails",
    getNextDepartures = "GetNextDepartures",
    getNextDeparturesWithDetails = "GetNextDeparturesWithDetails",
    getFastestDepartures = "GetFastestDepartures",
    getFastestDeparturesWithDetails = "GetFastestDeparturesWithDetails",
    getServiceDetails = "GetServiceDetails"
}
export declare enum EStaffOperation {
    getArrBoardWithDetails = "GetArrBoardWithDetails",
    getArrDepBoardWithDetails = "GetArrDepBoardWithDetails",
    getArrivalDepartureBoardByCrs = "GetArrivalDepartureBoardByCRS",
    getArrivalDepartureBoardByTiploc = "GetArrivalDepartureBoardByTIPLOC",
    getArrivalBoardByCrs = "GetArrivalBoardByCRS",
    getArrivalBoardByTiploc = "GetArrivalBoardByTIPLOC",
    getDepartureBoardByCrs = "GetDepartureBoardByCRS",
    getDepartureBoardByTiploc = "GetDepartureBoardByTIPLOC",
    getDepBoardWithDetails = "GetDepBoardWithDetails",
    getDisruptionList = "GetDisruptionList",
    getHistoricDepartureBoard = "GetHistoricDepartureBoard",
    getHistoricServiceDetails = "GetHistoricServiceDetails",
    getHistoricTimeLine = "GetHistoricTimeLine",
    getServiceDetailsByRid = "GetServiceDetailsByRID",
    queryHistoricServices = "QueryHistoricServices",
    queryServices = "QueryServices",
    getNextDepartures = "GetNextDepartures",
    getNextDeparturesWithDetails = "GetNextDeparturesWithDetails",
    getFastestDepartures = "GetFastestDepartures",
    getFastestDeparturesWithDetails = "GetFastestDeparturesWithDetails",
    getTocList = "GetTocList",
    getStationList = "GetStationList",
    getReasonCode = "GetReasonCode",
    getReasonCodeList = "GetReasonCodeList"
}
export interface IParams_GetArrBoardWithDetails {
    crs: string;
    numRows?: number;
    filterCrs?: string | string[];
    filterType?: EFilterType;
    timeOffset?: number;
    timeWindow?: number;
    time?: string;
}
export interface IParams_GetArrDepBoardWithDetails {
    crs: string;
    numRows?: number;
    filterCrs?: string | string[];
    filterType?: EFilterType;
    timeOffset?: number;
    timeWindow?: number;
}
export interface IParams_GetArrivalBoardByCRS {
    crs: string;
    numRows?: number;
    time?: Date;
    timeWindow?: number;
    filterCrs?: string | string[];
    filterType?: EFilterType;
    filterTOC?: string[] | string;
    services?: EServices;
    getNonPassengerServices?: boolean;
}
export interface IParams_GetArrivalBoardByTIPLOC {
    time: Date;
    numRows?: number;
    tiploc?: string;
    filterTiploc?: string;
    filterType?: EFilterType;
    filterTOC?: string[] | string;
    services?: EServices;
    getNonPassengerServices?: boolean;
}
export interface IParams_GetArrivalDepartureBoardByCRS {
    crs: string;
    numRows?: number;
    time?: Date;
    filterCrs?: string | string[];
    filterType?: EFilterType;
    filterTOC?: string[] | string;
    services?: EServices;
    getNonPassengerServices?: boolean;
}
export interface IParams_GetArrivalDepartureBoardByTIPLOC {
    tiploc: string;
    numRows?: number;
    time?: Date;
    filterTiploc?: string;
    filterType?: EFilterType;
    filterTOC?: string[] | string;
    services?: EServices;
    getNonPassengerServices: boolean;
}
export interface IParams_GetDepBoardWithDetails {
    crs: string;
    time?: string;
    numRows?: number;
    timeOffset?: number;
    filterCrs?: string | string[];
    filterType?: EFilterType;
    timeWindow?: number;
}
export interface IParams_GetDepartureBoardByCRS {
    crs: string;
    time?: Date;
    numRows?: number;
    timeWindow?: number;
    filterCrs?: string | string[];
    filterType?: EFilterType;
    filterTOC?: string[] | string;
    services?: EServices;
    getNonPassengerServices?: boolean;
}
export interface IParams_GetDepartureBoardByTIPLOC {
    tiploc: string;
    numRows?: number;
    time?: Date;
    filterTiploc?: string;
    filterType?: EFilterType;
    filterTOC?: string[] | string;
    services?: EServices;
    getNonPassengerServices?: boolean;
}
export interface IParams_GetDisruptionList {
    crsList: string[];
}
export interface IParams_GetFastestDepartures {
    crs: string;
    time?: Date;
    filterList?: string[];
    timeWindow?: number;
    filterTOC?: string[] | string;
    services?: EServices;
}
export interface IParams_GetFastestDeparturesWithDetails {
    crs: string;
    time?: Date;
    filterList?: string[];
    timeWindow?: number;
    filterTOC?: string[] | string;
    services?: EServices;
}
export interface IParams_GetHistoricDepartureBoard {
    crs: string;
    historicDateTime: Date;
    numRows?: number;
    depBoardDate?: EDateModifier;
    depBoardtime?: string;
    timeWindow?: number;
    filterCrs?: string | string[];
    filterCrsType?: EFilterType;
    filterTOC?: string[] | string;
    services?: EServices;
    getNonPassengerServices?: boolean;
}
export interface IParams_GetHistoricServiceDetails {
    serviceUID: string;
    historicDateTime: string;
    scheduleStartDate?: EDateModifier;
}
export interface IParams_GetHistoricTimeLine {
    serviceUID: string;
    scheduleStartDate: EDateModifier;
    historicDatetime: string;
    fullTiploc: string;
}
export interface IParams_GetNextDepartures {
    crs: string;
    time?: Date;
    filterList?: string[];
    timeWindow?: number;
    filterTOC?: string[] | string;
    services?: EServices;
}
export interface IParams_GetNextDeparturesWithDetails {
    crs: string;
    time?: Date;
    filterList?: string[];
    timeWindow?: number;
    filterTOC?: string[] | string;
    services?: EServices;
}
export interface IParams_GetServiceDetailsByRID {
    rid: string;
}
export interface IParams_QueryHistoricServices {
    serviceID: string;
    historicDatetime?: Date;
    scheduleStartDate?: EDateModifier;
    timeFilter?: Date;
    routeCrsFilter?: string;
    tocFilter?: string;
}
export interface IParams_QueryServices {
    serviceID: string;
    sdd?: Date | string;
    filtertime?: string;
    filterCrs?: string | string[];
    tocFilter?: string;
}
export interface IParams_GetTocList {
    currentVersion: string;
}
export interface IParams_GetStationList {
    currentVersion: string;
}
export interface IParams_GetReasonCode {
    reasonCode: number;
}
export interface IParams_GetReasonCodeList {
}
interface IDarwinServicesByHeadcodeServices {
    rid: string;
    uid: string;
    trainid: string;
    originName: string;
    originCrs: string;
    destinationName: string;
    destinationCrs: string;
    scheduledDeparture: string;
    scheduledArrival: string;
}
export interface IDarwinServicesByHeadcodeFnReturn {
    scheduleStartDate: string;
    serviceList: {
        service: IDarwinServicesByHeadcodeServices[];
    };
}
export declare enum EFilterType {
    from = "from",
    to = "to"
}
export declare enum EServices {
    TRAIN = "P",
    BUS = "B",
    SHIP = "S"
}
export declare enum EDateModifier {
    PREVIOUS = "Previous Day",
    SAME = "Same Day",
    NEXT = "Next Day"
}
export declare enum EListFields {
    crsList = "crs",
    filterList = "crs",
    filterCrs = "filtercrs",
    filterTOC = "toc"
}
export interface IOperationParams {
    crs?: string;
    crsList?: string[];
    currentVersion?: string;
    depBoardDate?: EDateModifier;
    depBoardTime?: string;
    filterCrs?: string | string[];
    filterCRSType?: EFilterType;
    filterList?: string[];
    filterTime?: string;
    filterTiploc?: string;
    filterTOC?: string[] | string;
    filterType?: EFilterType;
    fullTiploc?: string;
    getNonPassengerServices?: boolean;
    historicDateTime?: string;
    numRows?: number;
    reasonCode?: number;
    rid?: string;
    routeCrsFilter?: string;
    scheduleStartDate?: EDateModifier;
    sdd?: string;
    serviceID?: string;
    services?: EServices;
    serviceUID?: string;
    time?: string;
    timeFilter?: string;
    timeOffset?: number;
    timeWindow?: number;
    tiploc?: string;
    tocFilter?: string;
}
export declare type TStaffOperation = Record<EStaffOperation, IOperationParams>;
export interface IOpenLDBWS {
    accessToken: string;
    baseURL: string;
    staff: boolean;
    enableDebug: boolean;
    mapDelayCodeToReason: boolean;
    getDelayReason: (code: string | number) => string;
}
export interface ILDBWSSoapOptions {
    [key: string]: string;
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
}
export declare enum EOperationInfoEntryType {
    BOARD = "board",
    DEPARTURE = "departure",
    SERVICE = "service"
}
export declare enum EOperationInfoEntries {
    GetDeparturesBoard = 0,
    GetDepBoardWithDetails = 1,
    GetArrivalBoard = 2,
    GetArrBoardWithDetails = 3,
    GetArrivalDepartureBoard = 4,
    GetArrDepBoardWithDetails = 5,
    GetNextDepartures = 6,
    GetNextDeparturesWithDetails = 7,
    GetFastestDepartures = 8,
    GetFastestDeparturesWithDetails = 9,
    GetServiceDetails = 10,
    GetArrivalDepartureBoardByCrs = 11,
    GetArrivalDepartureBoardByTiploc = 12,
    GetArrivalBoardByCrs = 13,
    GetArrivalBoardByTiploc = 14,
    GetDepartureBoardByCrs = 15,
    GetDepartureBoardByTiploc = 16,
    GetHistoricDepartureBoard = 17
}
export interface IOperationInfoEntry {
    key: EOperation | EStaffOperation;
    type: EOperationInfoEntryType;
}
export declare enum ELDBWSOperationInfoKeys {
    GetStationBoardResult = "GetStationBoardResult",
    GetDeparturesBoard = "DeparturesBoard",
    GetServiceDetailsResult = "GetServiceDetailsResult"
}
export interface ITSOpenLDBConstructorParams {
    apiKey: string;
    debugEnabled?: boolean;
}
export declare type EStaffBodyKeys = "GetArrBoardWithDetailsResponse" | "GetArrDepBoardWithDetailsResponse" | "GetArrivalDepartureBoardByCRSResponse" | "GetArrivalDepartureBoardByTIPLOCResponse" | "GetArrivalBoardByCRSResponse" | "GetArrivalBoardByTIPLOCResponse" | "GetDepartureBoardByCRSResponse" | "GetDepartureBoardByTIPLOCResponse" | "GetDepBoardWithDetailsResponse" | "GetDisruptionListResponse" | "GetHistoricDepartureBoardResponse" | "GetHistoricServiceDetailsResponse" | "GetHistoricTimeLineResponse" | "GetServiceDetailsByRIDResponse" | "QueryHistoricServicesResponse" | "QueryServicesResponse" | "GetNextDeparturesResponse" | "GetNextDeparturesWithDetailsResponse" | "GetFastestDeparturesResponse" | "GetFastestDeparturesWithDetailsResponse" | "GetTocListResponse" | "GetStationListResponse" | "GetReasonCodeResponse" | "GetReasonCodeListResponse";
export interface IFetchFromDarwinResult {
    Envelope: {
        Body: {
            [key in EStaffBodyKeys]: {
                [key: string]: {};
            };
        };
    };
}
export declare enum EOpenLDBSVWSCoachClass {
    First = "First",
    Mixed = "Mixed",
    Standard = "Standard"
}
export interface IOpenLDBSVWSCoachLoading {
    value: number;
}
export declare enum EOpenLDBSVWSToiletStatus {
    Unknown = "Unknown",
    InService = "InService",
    NotInService = "NotInService"
}
export declare enum EOpenLDBSVWSToiletValue {
    Unknown = "Unknown",
    None = "None",
    Standard = "Standard",
    Accessible = "Accessible"
}
export interface IOpenLDBSVWSToiletAvailability {
    status: EOpenLDBSVWSToiletStatus;
    value: EOpenLDBSVWSToiletValue;
}
export interface IOpenLDBSVWSCoachData {
    coachClass: EOpenLDBSVWSCoachClass;
    loading: IOpenLDBSVWSCoachLoading;
    number: string;
    toilet: IOpenLDBSVWSToiletAvailability;
}
export interface IOpenLDBSVWSFormation {
    tiploc: string;
    avgLoading: number;
    coaches?: IOpenLDBSVWSCoachData[];
}
export declare enum EOpenLDBSVWSActualForecast {
    Actual = "Actual",
    Forecast = "Forecast",
    Delayed = "Delayed"
}
export interface IOpenLDBSVWSServiceItemOrigin {
    location?: {
        locationName: EDarwinStation;
        crs: EDarwinStation;
        tiploc: string;
    };
}
export interface IOpenLDBSVWSServiceItem {
    rid: string;
    uid: string;
    trainid: string;
    rsid: string;
    origin: IOpenLDBSVWSServiceItemOrigin;
    destination: IOpenLDBSVWSServiceItemOrigin;
    sdd?: Date;
    operator: string;
    operatorCode: string;
    isPassengerService?: boolean;
    isCharter?: boolean;
    isCancelled?: boolean;
    isCircularRoute?: boolean;
    filterLocationCancelled: boolean;
    filterLocationOperational: boolean;
    sta?: Date;
    ata?: Date;
    eta?: Date;
    arrivalType?: EOpenLDBSVWSActualForecast;
    arrivalSource?: string;
    arrivalSourceInstance?: string;
    std?: Date;
    atd?: Date;
    etd?: Date;
    departureType?: EOpenLDBSVWSActualForecast;
    departureSource?: any;
    departureSourceInstance?: string;
    platform: string;
    platformIsHidden?: boolean;
    serviceIsSuppressed?: boolean;
    adhocAlerts: string[];
    cancelReason?: string;
    delayReason?: string;
    category: string;
    activities: string;
    subsequentLocations?: {
        location: IOpenLDBSVWSServiceLocation[];
    };
    previousLocations?: {
        location: IOpenLDBSVWSServiceLocation[];
    };
    length?: number;
    isReverseFormation?: boolean;
    detachFront?: boolean;
    formation?: IOpenLDBSVWSFormation[];
}
export interface IOpenLDBSVWSStationBoard {
    generatedAt: Date;
    locationName: EDarwinStation;
    crs: EDarwinStation;
    filterLocationName?: string;
    filtercrs?: string | string[];
    stationManager: string;
    stationManagerCode: string;
    nrccMessages?: string[];
    platformsAreHidden?: boolean;
    servicesAreUnavailable?: boolean;
    isTruncated?: boolean;
    trainServices: {
        service: IOpenLDBSVWSServiceItem[];
    };
    busServices: {
        service: IOpenLDBSVWSServiceItem[];
    };
    ferryServices: {
        service: IOpenLDBSVWSServiceItem[];
    };
    qos: number;
}
export interface IOpenLDBSVWSServiceLocation {
    locationName: string;
    tiploc: string;
    crs: string;
    length?: number;
    detachFront?: boolean;
    isOperational?: boolean;
    isPass?: boolean;
    isCancelled?: boolean;
    platform?: string;
    platformIsHidden?: boolean;
    serviceIsSuppressed?: boolean;
    sta?: Date;
    ata?: Date;
    eta?: Date;
    std?: Date;
    atd?: Date;
    etd?: Date;
    departureType?: EOpenLDBSVWSActualForecast;
    lateness?: string | number;
}
export interface IOpenLDBSVWSServiceDetails {
    generatedAt: Date;
    rid: string;
    uid: string;
    rsid: string;
    sdd: Date;
    trainid: string;
    serviceType: EServices;
    isPassengerService?: boolean;
    isCharter?: boolean;
    operator: string;
    operatorCode: string;
    cancelReason?: string;
    delayReason?: string;
    isReverseFormation?: boolean;
    category?: string;
    locations?: {
        location: IOpenLDBSVWSServiceLocation[];
    };
    formation?: IOpenLDBSVWSFormation[];
}
export {};
