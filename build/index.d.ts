import { Optional } from "utility-types";
import { GetArrivalBoardByCRSAsyncArgs, GetArrivalDepartureBoardByCRSAsyncArgs, GetArrivalDepartureBoardByTIPLOCAsyncArgs, GetDepartureBoardByCRSAsyncArgs, GetReasonCodeAsyncArgs, GetReasonCodeListAsyncArgs, GetSourceInstanceNamesAsyncArgs, GetStationListAsyncArgs, GetTOCListAsyncArgs, GetArrivalBoardByTIPLOCAsyncArgs, GetDepartureBoardByTIPLOCAsyncArgs, GetDisruptionListAsyncArgs, GetServiceDetailsByRIDAsyncArgs, QueryServicesAsyncArgs, GetArrivalBoardByCRSAsync, GetArrivalBoardByTIPLOCAsync, GetArrivalDepartureBoardByCRSAsync, GetArrivalDepartureBoardByTIPLOCAsync, GetDepartureBoardByCRSAsync, GetDepartureBoardByTIPLOCAsync, GetDisruptionListAsync, GetReasonCodeAsync, GetReasonCodeListAsync, GetSourceInstanceNamesAsync, GetServiceDetailsByRIDAsync, GetStationListAsync, GetTOCListAsync, QueryServicesAsync } from "@Interfaces/index";
import { fn as GetArrivalDepartureBoardByCRS } from "@Functions/nonreference/GetArrivalDepartureBoardByCRS";
import { fn as GetArrivalDepartureBoardByTIPLOC } from "@Functions/nonreference/GetArrivalDepartureBoardByTIPLOC";
import { fn as GetDepartureBoardByCRS } from "@Functions/nonreference/GetDepartureBoardByCRS";
import { fn as GetArrivalBoardByCRS } from "@Functions/nonreference/GetArrivalBoardByCRS";
import { fn as GetArrivalBoardByTIPLOC } from "@Functions/nonreference/GetArrivalBoardByTIPLOC";
import { fn as GetDepartureBoardByTIPLOC } from "@Functions/nonreference/GetDepartureBoardByTIPLOC";
import { fn as GetDisruptionList } from "@Functions/nonreference/GetDisruptionList";
import { fn as GetServiceDetailsByRID } from "@Functions/nonreference/GetServiceDetailsByRID";
import { fn as QueryServices } from "@Functions/nonreference/QueryServices";
import { fn as GetReasonCode } from "@Functions/reference/GetReasonCode";
import { fn as GetReasonCodeList } from "@Functions/reference/GetReasonCodeList";
import { fn as GetSourceInstanceNames } from "@Functions/reference/GetSourceInstanceNames";
import { fn as GetTOCList } from "@Functions/reference/GetTOCList";
import { fn as GetStationList } from "@Functions/reference/GetStationList";
import { getLondonTimeViaTemporal } from "./functions/misc/TimezoneOffset";
interface ILDBClientConstructorArgs {
    apiKey: string;
    timeOffsetInMinutes?: number;
}
declare class TSOpenLDBSV {
    #private;
    constructor({ apiKey, timeOffsetInMinutes }: ILDBClientConstructorArgs);
    set timeOffsetInMinutes(timeOffsetInMinutes: number);
    get timeOffsetInMinutes(): number;
    GetArrivalDepartureBoardByCRS: (args: Optional<GetArrivalDepartureBoardByCRSAsyncArgs> & {
        crs: string;
    }) => Promise<GetArrivalBoardByCRSAsync>;
    GetArrivalDepartureBoardByTIPLOC: (args: Optional<GetArrivalDepartureBoardByTIPLOCAsyncArgs> & {
        tipLoc: string;
    }) => Promise<GetArrivalDepartureBoardByTIPLOCAsync>;
    GetDepartureBoardByCRS: (args: Optional<GetDepartureBoardByCRSAsyncArgs> & {
        crs: string;
    }) => Promise<GetDepartureBoardByCRSAsync>;
    GetArrivalBoardByCRS: (args: Optional<GetArrivalBoardByCRSAsyncArgs> & {
        crs: string;
    }) => Promise<GetArrivalBoardByCRSAsync>;
    GetReasonCode: (args: GetReasonCodeAsyncArgs) => Promise<GetReasonCodeAsync>;
    GetReasonCodeList: (args: GetReasonCodeListAsyncArgs) => Promise<GetReasonCodeAsync[]>;
    GetSourceInstanceNames: (args: GetSourceInstanceNamesAsyncArgs) => Promise<GetSourceInstanceNamesAsync[]>;
    GetTOCList: (args: Optional<GetTOCListAsyncArgs>) => Promise<GetTOCListAsync>;
    GetStationList: (args: GetStationListAsyncArgs) => Promise<GetStationListAsync>;
    GetArrivalBoardByTIPLOC: (args: Optional<GetArrivalBoardByTIPLOCAsyncArgs> & {
        tipLoc: string;
    }) => Promise<GetArrivalBoardByTIPLOCAsync>;
    GetDepartureBoardByTIPLOC: (args: Optional<GetDepartureBoardByTIPLOCAsyncArgs> & {
        tipLoc: string;
    }) => Promise<GetDepartureBoardByTIPLOCAsync>;
    GetDisruptionList: (args: GetDisruptionListAsyncArgs) => Promise<GetDisruptionListAsync>;
    GetServiceDetailsByRID: (args: GetServiceDetailsByRIDAsyncArgs) => Promise<GetServiceDetailsByRIDAsync>;
    QueryServices: (args: QueryServicesAsyncArgs) => Promise<QueryServicesAsync>;
}
export { TSOpenLDBSV, getLondonTimeViaTemporal, GetArrivalDepartureBoardByCRS, GetArrivalDepartureBoardByTIPLOC, GetDepartureBoardByCRS, GetArrivalBoardByCRS, GetArrivalBoardByTIPLOC, GetDepartureBoardByTIPLOC, GetDisruptionList, GetServiceDetailsByRID, QueryServices, GetReasonCode, GetReasonCodeList, GetSourceInstanceNames, GetTOCList, GetStationList, GetArrivalBoardByCRSAsyncArgs, GetArrivalDepartureBoardByCRSAsyncArgs, GetArrivalDepartureBoardByTIPLOCAsyncArgs, GetDepartureBoardByCRSAsyncArgs, GetReasonCodeAsyncArgs, GetReasonCodeListAsyncArgs, GetSourceInstanceNamesAsyncArgs, GetStationListAsyncArgs, GetTOCListAsyncArgs, GetArrivalBoardByTIPLOCAsyncArgs, GetDepartureBoardByTIPLOCAsyncArgs, GetDisruptionListAsyncArgs, GetServiceDetailsByRIDAsyncArgs, QueryServicesAsyncArgs, GetArrivalBoardByCRSAsync, GetArrivalBoardByTIPLOCAsync, GetArrivalDepartureBoardByCRSAsync, GetArrivalDepartureBoardByTIPLOCAsync, GetDepartureBoardByCRSAsync, GetDepartureBoardByTIPLOCAsync, GetDisruptionListAsync, GetReasonCodeAsync, GetReasonCodeListAsync, GetSourceInstanceNamesAsync, GetServiceDetailsByRIDAsync, GetStationListAsync, GetTOCListAsync, QueryServicesAsync, };
