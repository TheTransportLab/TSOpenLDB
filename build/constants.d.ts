export interface IArgsBase {
    apiKey: string;
}
export declare type TNonReferenceEndpoints = "GetArrivalDepartureBoardByCRSAsync" | "GetArrivalBoardByCRSAsync" | "GetArrivalDepartureBoardByTIPLOCAsync" | "GetDepartureBoardByCRSAsync" | "GetArrivalBoardByTIPLOCAsync" | "GetDepartureBoardByTIPLOCAsync" | "GetServiceDetailsByRIDAsync" | "QueryServicesAsync" | "GetDisruptionListAsync" | "GetHistoricDepartureBoardAsync" | "GetHistoricServiceDetailsAsync" | "GetHistoricTimeLineAsync" | "QueryHistoricServicesAsync" | "GetArrDepBoardWithDetailsAsync" | "GetArrBoardWithDetailsAsync" | "GetDepBoardWithDetailsAsync" | "GetNextDeparturesAsync" | "GetFastestDeparturesAsync" | "GetNextDeparturesWithDetailsAsync" | "GetFastestDeparturesWithDetailsAsync";
export declare type TReferenceEndpoints = "GetReasonCodeAsync" | "GetReasonCodeListAsync" | "GetSourceInstanceNamesAsync" | "GetTOCListAsync" | "GetStationListAsync";
interface IEndpointStructBase<T = any> {
    active?: boolean;
    args: Record<string, T>;
}
export interface TReferenceEndpointStruct extends IEndpointStructBase {
    name: TReferenceEndpoints;
}
export interface TNonReferenceEndpointStruct extends IEndpointStructBase {
    name: TNonReferenceEndpoints;
}
export declare const referenceEndpoints: TReferenceEndpointStruct[];
export declare const nonReferenceEndpoints: TNonReferenceEndpointStruct[];
export {};
