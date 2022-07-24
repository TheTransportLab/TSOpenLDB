import { Optional } from "utility-types";
import { GetArrivalBoardByCRSAsyncArgs as _GetArrivalBoardByCRSAsyncArgs, GetArrivalDepartureBoardByCRSAsyncArgs as _GetArrivalDepartureBoardByCRSAsyncArgs, GetArrivalDepartureBoardByTIPLOCAsyncArgs as _GetArrivalDepartureBoardByTIPLOCAsyncArgs, GetDepartureBoardByCRSAsyncArgs as _GetDepartureBoardByCRSAsyncArgs, GetReasonCodeAsyncArgs as _GetReasonCodeAsyncArgs, GetReasonCodeListAsyncArgs as _GetReasonCodeListAsyncArgs, GetSourceInstanceNamesAsyncArgs as _GetSourceInstanceNamesAsyncArgs, GetStationListAsyncArgs as _GetStationListAsyncArgs, GetTOCListAsyncArgs as _GetTOCListAsyncArgs, GetArrivalBoardByTIPLOCAsyncArgs as _GetArrivalBoardByTIPLOCAsyncArgs, GetDepartureBoardByTIPLOCAsyncArgs as _GetDepartureBoardByTIPLOCAsyncArgs, GetDisruptionListAsyncArgs as _GetDisruptionListAsyncArgs, GetServiceDetailsByRIDAsyncArgs as _GetServiceDetailsByRIDAsyncArgs, QueryServicesAsyncArgs as _QueryServicesAsyncArgs, GetArrBoardWithDetailsAsyncArgs as _GetArrBoardWithDetailsAsyncArgs, GetArrDepBoardWithDetailsAsyncArgs as _GetArrDepBoardWithDetailsAsyncArgs, GetDepBoardWithDetailsAsyncArgs as _GetDepBoardWithDetailsAsyncArgs, GetFastestDeparturesAsyncArgs as _GetFastestDeparturesAsyncArgs, GetFastestDeparturesWithDetailsAsyncArgs as _GetFastestDeparturesWithDetailsAsyncArgs, GetNextDeparturesAsyncArgs as _GetNextDeparturesAsyncArgs, GetNextDeparturesWithDetailsAsyncArgs as _GetNextDeparturesWithDetailsAsyncArgs } from "@Interfaces/index";
import { fn as GetArrivalDepartureBoardByCRS } from "@Functions/nonreference/GetArrivalDepartureBoardByCRS";
import { fn as GetArrivalDepartureBoardByTIPLOC } from "@Functions/nonreference/GetArrivalDepartureBoardByTIPLOC";
import { fn as GetDepartureBoardByCRS } from "@Functions/nonreference/GetDepartureBoardByCRS";
import { fn as GetArrivalBoardByCRS } from "@Functions/nonreference/GetArrivalBoardByCRS";
import { fn as GetArrivalBoardByTIPLOC } from "@Functions/nonreference/GetArrivalBoardByTIPLOC";
import { fn as GetDepartureBoardByTIPLOC } from "@Functions/nonreference/GetDepartureBoardByTIPLOC";
import { fn as GetDisruptionList } from "@Functions/nonreference/GetDisruptionList";
import { fn as GetServiceDetailsByRID } from "@Functions/nonreference/GetServiceDetailsByRID";
import { fn as QueryServices } from "@Functions/nonreference/QueryServices";
import { fn as GetArrBoardWithDetails } from "@Functions/nonreference/GetArrBoardWithDetails";
import { fn as GetArrDepBoardWithDetails } from "@Functions/nonreference/GetArrDepBoardWithDetails";
import { fn as GetDepBoardWithDetails } from "@Functions/nonreference/GetDepBoardWithDetails";
import { fn as GetNextDepartures } from "@Functions/nonreference/GetNextDepartures";
import { fn as GetFastestDepartures } from "@Functions/nonreference/GetFastestDepartures";
import { fn as GetNextDeparturesWithDetails } from "@Functions/nonreference/GetNextDeparturesWithDetails";
import { fn as GetFastestDeparturesWithDetails } from "@Functions/nonreference/GetFastestDeparturesWithDetails";
import { fn as GetReasonCode } from "@Functions/reference/GetReasonCode";
import { fn as GetReasonCodeList } from "@Functions/reference/GetReasonCodeList";
import { fn as GetSourceInstanceNames } from "@Functions/reference/GetSourceInstanceNames";
import { fn as GetTOCList } from "@Functions/reference/GetTOCList";
import { fn as GetStationList } from "@Functions/reference/GetStationList";
import { getLondonTimeViaTemporal } from "./functions/misc/TimezoneOffset";
export { TFilterType } from "./constants";
export { GetArrivalBoardByCRSAsyncArgs, GetArrivalDepartureBoardByCRSAsyncArgs, GetArrivalDepartureBoardByTIPLOCAsyncArgs, GetDepartureBoardByCRSAsyncArgs, GetReasonCodeAsyncArgs, GetReasonCodeListAsyncArgs, GetSourceInstanceNamesAsyncArgs, GetStationListAsyncArgs, GetTOCListAsyncArgs, GetArrivalBoardByTIPLOCAsyncArgs, GetDepartureBoardByTIPLOCAsyncArgs, GetDisruptionListAsyncArgs, GetServiceDetailsByRIDAsyncArgs, QueryServicesAsyncArgs, GetArrBoardWithDetailsAsyncArgs, GetArrDepBoardWithDetailsAsyncArgs, GetDepBoardWithDetailsAsyncArgs, GetFastestDeparturesAsyncArgs, GetFastestDeparturesWithDetailsAsyncArgs, GetNextDeparturesAsyncArgs, GetNextDeparturesWithDetailsAsyncArgs, } from "@Interfaces/index";
interface ILDBClientConstructorArgs {
    apiKey: string;
    timeOffsetInMinutes?: number;
}
declare class TSOpenLDBSV {
    #private;
    constructor({ apiKey, timeOffsetInMinutes }: ILDBClientConstructorArgs);
    set timeOffsetInMinutes(timeOffsetInMinutes: number);
    get timeOffsetInMinutes(): number;
    GetArrivalDepartureBoardByCRS: (args: Optional<_GetArrivalDepartureBoardByCRSAsyncArgs> & {
        crs: string;
    }) => Promise<import("@Interfaces/index").GetArrivalBoardByCRSAsync>;
    GetArrivalDepartureBoardByTIPLOC: (args: Optional<_GetArrivalDepartureBoardByTIPLOCAsyncArgs> & {
        tipLoc: string;
    }) => Promise<import("@Interfaces/index").GetArrivalDepartureBoardByTIPLOCAsync>;
    GetDepartureBoardByCRS: (args: Optional<_GetDepartureBoardByCRSAsyncArgs> & {
        crs: string;
    }) => Promise<import("@Interfaces/index").GetDepartureBoardByCRSAsync>;
    GetArrivalBoardByCRS: (args: Optional<_GetArrivalBoardByCRSAsyncArgs> & {
        crs: string;
    }) => Promise<import("@Interfaces/index").GetArrivalBoardByCRSAsync>;
    GetReasonCode: (args: _GetReasonCodeAsyncArgs) => Promise<import("@Interfaces/index").GetReasonCodeAsync>;
    GetReasonCodeList: (args: _GetReasonCodeListAsyncArgs) => Promise<import("@Interfaces/index").GetReasonCodeAsync[]>;
    GetSourceInstanceNames: (args: _GetSourceInstanceNamesAsyncArgs) => Promise<import("@Interfaces/index").GetSourceInstanceNamesAsync[]>;
    GetTOCList: (args: Optional<_GetTOCListAsyncArgs>) => Promise<import("@Interfaces/index").GetTOCListAsync>;
    GetStationList: (args: _GetStationListAsyncArgs) => Promise<import("@Interfaces/index").GetStationListAsync>;
    GetArrivalBoardByTIPLOC: (args: Optional<_GetArrivalBoardByTIPLOCAsyncArgs> & {
        tipLoc: string;
    }) => Promise<import("@Interfaces/index").GetArrivalBoardByTIPLOCAsync>;
    GetDepartureBoardByTIPLOC: (args: Optional<_GetDepartureBoardByTIPLOCAsyncArgs> & {
        tipLoc: string;
    }) => Promise<import("@Interfaces/index").GetDepartureBoardByTIPLOCAsync>;
    GetDisruptionList: (args: _GetDisruptionListAsyncArgs) => Promise<import("@Interfaces/index").GetDisruptionListAsync>;
    GetServiceDetailsByRID: (args: _GetServiceDetailsByRIDAsyncArgs) => Promise<import("@Interfaces/index").GetServiceDetailsByRIDAsync>;
    QueryServices: (args: _QueryServicesAsyncArgs) => Promise<import("@Interfaces/index").QueryServicesAsync>;
    GetArrBoardWithDetails: (args: _GetArrBoardWithDetailsAsyncArgs) => Promise<import("@Interfaces/index").GetArrBoardWithDetailsAsync>;
    GetArrDepBoardWithDetails: (args: _GetArrDepBoardWithDetailsAsyncArgs) => Promise<import("@Interfaces/index").GetArrDepBoardWithDetailsAsync>;
    GetDepBoardWithDetails: (args: _GetDepBoardWithDetailsAsyncArgs) => Promise<import("@Interfaces/index").GetDepBoardWithDetailsAsync>;
    GetNextDepartures: (args: _GetNextDeparturesAsyncArgs) => Promise<import("@Interfaces/index").GetNextDeparturesAsync>;
    GetFastestDepartures: (args: _GetFastestDeparturesAsyncArgs) => Promise<import("@Interfaces/index").GetFastestDeparturesAsync>;
    GetNextDeparturesWithDetails: (args: _GetNextDeparturesWithDetailsAsyncArgs) => Promise<import("@Interfaces/index").GetNextDeparturesWithDetailsAsync>;
    GetFastestDeparturesWithDetails: (args: _GetFastestDeparturesWithDetailsAsyncArgs) => Promise<import("@Interfaces/index").GetFastestDeparturesWithDetailsAsync>;
}
export interface ITSOpenLDBSV extends TSOpenLDBSV {
}
export { GetDepBoardWithDetailsAsync } from "@Interfaces/index";
export { GetArrBoardWithDetailsAsync } from "@Interfaces/index";
export { GetNextDeparturesAsync } from "@Interfaces/index";
export { GetArrDepBoardWithDetailsAsync } from "@Interfaces/index";
export { GetFastestDeparturesAsync } from "@Interfaces/index";
export { GetFastestDeparturesWithDetailsAsync } from "@Interfaces/index";
export { GetNextDeparturesWithDetailsAsync } from "@Interfaces/index";
export { GetArrivalBoardByCRSAsync } from "@Interfaces/index";
export { GetArrivalBoardByTIPLOCAsync } from "@Interfaces/index";
export { GetArrivalDepartureBoardByCRSAsync } from "@Interfaces/index";
export { GetArrivalDepartureBoardByTIPLOCAsync } from "@Interfaces/index";
export { GetDepartureBoardByCRSAsync } from "@Interfaces/index";
export { GetDepartureBoardByTIPLOCAsync } from "@Interfaces/index";
export { GetDisruptionListAsync } from "@Interfaces/index";
export { GetReasonCodeAsync } from "@Interfaces/index";
export { GetReasonCodeListAsync } from "@Interfaces/index";
export { GetSourceInstanceNamesAsync } from "@Interfaces/index";
export { GetServiceDetailsByRIDAsync } from "@Interfaces/index";
export { GetStationListAsync } from "@Interfaces/index";
export { GetTOCListAsync } from "@Interfaces/index";
export { QueryServicesAsync } from "@Interfaces/index";
export { TSOpenLDBSV, getLondonTimeViaTemporal, GetArrivalDepartureBoardByCRS, GetArrivalDepartureBoardByTIPLOC, GetDepartureBoardByCRS, GetArrivalBoardByCRS, GetArrivalBoardByTIPLOC, GetDepartureBoardByTIPLOC, GetDisruptionList, GetServiceDetailsByRID, QueryServices, GetReasonCode, GetReasonCodeList, GetSourceInstanceNames, GetTOCList, GetStationList, GetArrBoardWithDetails, GetArrDepBoardWithDetails, GetDepBoardWithDetails, GetNextDepartures, GetFastestDepartures, GetNextDeparturesWithDetails, GetFastestDeparturesWithDetails, };
