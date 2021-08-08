import { EOperation, EStaffOperation, ESOAPStaffAction, ESOAPAction, ILDBWSSoapOptions, ILDBWSSoap, IOperationInfo, EOperationInfoEntryType, EOperationInfoEntries, IOperationInfoEntry, ELDBWSOperationInfoKeys, IOperationParams, TStaffOperation, IParams_GetArrBoardWithDetails, IParams_GetArrDepBoardWithDetails, IParams_GetArrivalBoardByCRS, IParams_GetArrivalBoardByTIPLOC, IParams_GetArrivalDepartureBoardByCRS, IParams_GetArrivalDepartureBoardByTIPLOC, IParams_GetDepBoardWithDetails, IParams_GetDepartureBoardByCRS, IParams_GetDepartureBoardByTIPLOC, IParams_GetDisruptionList, IParams_GetFastestDepartures, IParams_GetFastestDeparturesWithDetails, IParams_GetHistoricDepartureBoard, IParams_GetHistoricServiceDetails, IParams_GetHistoricTimeLine, IParams_GetNextDepartures, IParams_GetNextDeparturesWithDetails, IParams_GetReasonCode, IParams_GetReasonCodeList, IParams_GetServiceDetailsByRID, IParams_GetStationList, IParams_GetTocList, IParams_QueryHistoricServices, IParams_QueryServices, EListFields, ITSOpenLDBConstructorParams, EFilterType, EServices, EDateModifier, IOpenLDBSVWSStationBoard, IOpenLDBSVWSServiceDetails, IOpenLDBSVWSServiceItem, IOpenLDBSVWSServiceLocation, IDarwinServicesByHeadcodeFnReturn } from "./interfaces";
export interface ITSOpenLDB {
    getArrBoardWithDetails: (params: IParams_GetArrBoardWithDetails) => Promise<IOpenLDBSVWSStationBoard>;
    getArrDepBoardWithDetails: (params: IParams_GetArrDepBoardWithDetails) => Promise<IOpenLDBSVWSStationBoard>;
    getArrivalDepartureBoardByCRS: (GetArrivalDepartureBoardByCRS: any) => Promise<IOpenLDBSVWSStationBoard>;
    getArrivalDepartureBoardByTIPLOC: (params: IParams_GetArrivalDepartureBoardByTIPLOC) => Promise<IOpenLDBSVWSStationBoard>;
    getArrivalBoardByCRS: (params: IParams_GetArrivalBoardByCRS) => Promise<IOpenLDBSVWSStationBoard>;
    getArrivalBoardByTIPLOC: (params: IParams_GetArrivalBoardByTIPLOC) => Promise<IOpenLDBSVWSStationBoard>;
    getDepartureBoardByCRS: (params: IParams_GetDepartureBoardByCRS) => Promise<IOpenLDBSVWSStationBoard>;
    getDepartureBoardByTIPLOC: (params: IParams_GetDepartureBoardByTIPLOC) => Promise<IOpenLDBSVWSStationBoard>;
    getDepBoardWithDetails: (params: IParams_GetDepBoardWithDetails) => Promise<IOpenLDBSVWSStationBoard>;
    getDisruptionList: (params: IParams_GetDisruptionList) => Promise<string>;
    getHistoricDepartureBoard: (params: IParams_GetHistoricDepartureBoard) => Promise<IOpenLDBSVWSStationBoard>;
    getHistoricServiceDetails: (params: IParams_GetHistoricServiceDetails) => Promise<IOpenLDBSVWSServiceDetails>;
    getHistoricTimeLine: (params: IParams_GetHistoricTimeLine) => Promise<string>;
    getServiceDetailsByRid: (params: IParams_GetServiceDetailsByRID) => Promise<IOpenLDBSVWSServiceDetails>;
    queryHistoricServices: (params: IParams_QueryHistoricServices) => Promise<string>;
    queryServices: (params: IParams_QueryServices) => Promise<IDarwinServicesByHeadcodeFnReturn>;
    getNextDepartures: (params: IParams_GetNextDepartures) => Promise<IOpenLDBSVWSStationBoard>;
    getNextDeparturesWithDetails: (params: IParams_GetNextDeparturesWithDetails) => Promise<IOpenLDBSVWSStationBoard>;
    getFastestDepartures: (params: IParams_GetFastestDepartures) => Promise<IOpenLDBSVWSStationBoard>;
    getFastestDeparturesWithDetails: (params: IParams_GetFastestDeparturesWithDetails) => Promise<IOpenLDBSVWSStationBoard>;
}
export default class TSOpenLDB implements ITSOpenLDB {
    private _apiKey;
    private _debugEnabled;
    constructor({ apiKey, debugEnabled }: ITSOpenLDBConstructorParams);
    private CallRequiredParams;
    private logToConsole;
    private fetchFromDarwin;
    private mapParamsToSOAPXml;
    getArrBoardWithDetails: ({ numRows, timeWindow, timeOffset, time, ..._params }: IParams_GetArrBoardWithDetails) => Promise<IOpenLDBSVWSStationBoard>;
    getArrDepBoardWithDetails: ({ filterType, timeOffset, timeWindow, ..._params }: IParams_GetArrDepBoardWithDetails) => Promise<IOpenLDBSVWSStationBoard>;
    getArrivalBoardByCRS: ({ time, services, numRows, timeWindow, getNonPassengerServices, ..._params }: IParams_GetArrivalBoardByCRS) => Promise<IOpenLDBSVWSStationBoard>;
    getArrivalBoardByTIPLOC: ({ time, numRows, services, getNonPassengerServices, ..._params }: IParams_GetArrivalBoardByTIPLOC) => Promise<IOpenLDBSVWSStationBoard>;
    getArrivalDepartureBoardByCRS: ({ time, numRows, services, getNonPassengerServices, ..._params }: IParams_GetArrivalDepartureBoardByCRS) => Promise<IOpenLDBSVWSStationBoard>;
    getArrivalDepartureBoardByTIPLOC: ({ time, numRows, services, getNonPassengerServices, ..._params }: IParams_GetArrivalDepartureBoardByTIPLOC) => Promise<IOpenLDBSVWSStationBoard>;
    getDepBoardWithDetails: ({ numRows, timeWindow, timeOffset, time, ..._params }: IParams_GetDepBoardWithDetails) => Promise<IOpenLDBSVWSStationBoard>;
    getDepartureBoardByCRS: ({ timeWindow, time, getNonPassengerServices, services, numRows, filterType, ..._params }: IParams_GetDepartureBoardByCRS) => Promise<IOpenLDBSVWSStationBoard>;
    getDepartureBoardByTIPLOC: ({ time, getNonPassengerServices, services, numRows, filterType, ..._params }: IParams_GetDepartureBoardByTIPLOC) => Promise<IOpenLDBSVWSStationBoard>;
    getDisruptionList: ({ ..._params }: IParams_GetDisruptionList) => Promise<string>;
    getFastestDepartures: ({ services, timeWindow, time, ..._params }: IParams_GetFastestDepartures) => Promise<IOpenLDBSVWSStationBoard>;
    getFastestDeparturesWithDetails: ({ services, timeWindow, time, ..._params }: IParams_GetFastestDeparturesWithDetails) => Promise<IOpenLDBSVWSStationBoard>;
    /**
     *
     * @note This function is not supported by Darwin - See https://groups.google.com/g/openraildata-talk/c/_gfoJ79WGbw/m/YKGvv9FVAwAJ
     *
     */
    getHistoricDepartureBoard: ({ numRows, timeWindow, ..._params }: IParams_GetHistoricDepartureBoard) => Promise<IOpenLDBSVWSStationBoard>;
    /**
     *
     * @note This function is not supported by Darwin - See https://groups.google.com/g/openraildata-talk/c/_gfoJ79WGbw/m/YKGvv9FVAwAJ
     *
     */
    getHistoricServiceDetails: ({ ..._params }: IParams_GetHistoricServiceDetails) => Promise<IOpenLDBSVWSServiceDetails>;
    /**
     *
     * @note This function is not supported by Darwin - See https://groups.google.com/g/openraildata-talk/c/_gfoJ79WGbw/m/YKGvv9FVAwAJ
     *
     */
    getHistoricTimeLine: ({ ..._params }: IParams_GetHistoricTimeLine) => Promise<string>;
    getNextDepartures: ({ time, timeWindow, services, ..._params }: IParams_GetNextDepartures) => Promise<IOpenLDBSVWSStationBoard>;
    getNextDeparturesWithDetails: ({ time, timeWindow, services, ..._params }: IParams_GetNextDeparturesWithDetails) => Promise<IOpenLDBSVWSStationBoard>;
    getServiceDetailsByRid: ({ ..._params }: IParams_GetServiceDetailsByRID) => Promise<IOpenLDBSVWSServiceDetails>;
    queryHistoricServices: ({ timeFilter, ..._params }: IParams_QueryHistoricServices) => Promise<string>;
    queryServices: ({ sdd, ..._params }: IParams_QueryServices) => Promise<IDarwinServicesByHeadcodeFnReturn>;
}
export { EOperation, EStaffOperation, ESOAPStaffAction, ESOAPAction, ILDBWSSoapOptions, ILDBWSSoap, IOperationInfo, EOperationInfoEntryType, EOperationInfoEntries, IOperationInfoEntry, ELDBWSOperationInfoKeys, IOperationParams, TStaffOperation, IParams_GetArrBoardWithDetails, IParams_GetArrDepBoardWithDetails, IParams_GetArrivalBoardByCRS, IParams_GetArrivalBoardByTIPLOC, IParams_GetArrivalDepartureBoardByCRS, IParams_GetArrivalDepartureBoardByTIPLOC, IParams_GetDepBoardWithDetails, IParams_GetDepartureBoardByCRS, IParams_GetDepartureBoardByTIPLOC, IParams_GetDisruptionList, IParams_GetFastestDepartures, IParams_GetFastestDeparturesWithDetails, IParams_GetHistoricDepartureBoard, IParams_GetHistoricServiceDetails, IParams_GetHistoricTimeLine, IParams_GetNextDepartures, IParams_GetNextDeparturesWithDetails, IParams_GetReasonCode, IParams_GetReasonCodeList, IParams_GetServiceDetailsByRID, IParams_GetStationList, IParams_GetTocList, IParams_QueryHistoricServices, IParams_QueryServices, EListFields, ITSOpenLDBConstructorParams, EFilterType, IOpenLDBSVWSServiceLocation, EServices, EDateModifier, IOpenLDBSVWSStationBoard, IOpenLDBSVWSServiceDetails, IOpenLDBSVWSServiceItem, IDarwinServicesByHeadcodeFnReturn };
