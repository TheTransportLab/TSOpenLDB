import { Optional } from "utility-types";

import {
  GetArrivalBoardByCRSAsyncArgs,
  GetArrivalDepartureBoardByCRSAsyncArgs,
  GetArrivalDepartureBoardByTIPLOCAsyncArgs,
  GetDepartureBoardByCRSAsyncArgs,
  GetReasonCodeAsyncArgs,
  GetReasonCodeListAsyncArgs,
  GetSourceInstanceNamesAsyncArgs,
  GetStationListAsyncArgs,
  GetTOCListAsyncArgs,
  GetArrivalBoardByTIPLOCAsyncArgs,
  GetDepartureBoardByTIPLOCAsyncArgs,
  GetDisruptionListAsyncArgs,
  GetServiceDetailsByRIDAsyncArgs,
  QueryServicesAsyncArgs,
  GetArrivalBoardByCRSAsync,
  GetArrivalBoardByTIPLOCAsync,
  GetArrivalDepartureBoardByCRSAsync,
  GetArrivalDepartureBoardByTIPLOCAsync,
  GetDepartureBoardByCRSAsync,
  GetDepartureBoardByTIPLOCAsync,
  GetDisruptionListAsync,
  GetReasonCodeAsync,
  GetReasonCodeListAsync,
  GetSourceInstanceNamesAsync,
  GetServiceDetailsByRIDAsync,
  GetStationListAsync,
  GetTOCListAsync,
  QueryServicesAsync,
} from "@Interfaces/index";

// Non-reference functions
import { fn as GetArrivalDepartureBoardByCRS } from "@Functions/nonreference/GetArrivalDepartureBoardByCRS";
import { fn as GetArrivalDepartureBoardByTIPLOC } from "@Functions/nonreference/GetArrivalDepartureBoardByTIPLOC";
import { fn as GetDepartureBoardByCRS } from "@Functions/nonreference/GetDepartureBoardByCRS";
import { fn as GetArrivalBoardByCRS } from "@Functions/nonreference/GetArrivalBoardByCRS";
import { fn as GetArrivalBoardByTIPLOC } from "@Functions/nonreference/GetArrivalBoardByTIPLOC";
import { fn as GetDepartureBoardByTIPLOC } from "@Functions/nonreference/GetDepartureBoardByTIPLOC";
import { fn as GetDisruptionList } from "@Functions/nonreference/GetDisruptionList";
import { fn as GetServiceDetailsByRID } from "@Functions/nonreference/GetServiceDetailsByRID";
import { fn as QueryServices } from "@Functions/nonreference/QueryServices";

// Reference functions
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
class TSOpenLDBSV {
  #apiKey: string;
  #timeOffsetInMinutes = 0;
  constructor({ apiKey, timeOffsetInMinutes = 0 }: ILDBClientConstructorArgs) {
    this.#apiKey = apiKey;
    this.#timeOffsetInMinutes = timeOffsetInMinutes;
  }

  public set timeOffsetInMinutes(timeOffsetInMinutes: number) {
    if (!timeOffsetInMinutes) {
      return;
    }
    this.#timeOffsetInMinutes = timeOffsetInMinutes;
  }

  public get timeOffsetInMinutes() {
    return this.#timeOffsetInMinutes;
  }

  public GetArrivalDepartureBoardByCRS = async (
    args: Optional<GetArrivalDepartureBoardByCRSAsyncArgs> & { crs: string }
  ) =>
    await GetArrivalDepartureBoardByCRS({
      apiKey: this.#apiKey,
      args,
    });

  public GetArrivalDepartureBoardByTIPLOC = async (
    args: Optional<GetArrivalDepartureBoardByTIPLOCAsyncArgs> & {
      tipLoc: string;
    }
  ) =>
    await GetArrivalDepartureBoardByTIPLOC({
      apiKey: this.#apiKey,
      args,
    });

  public GetDepartureBoardByCRS = async (
    args: Optional<GetDepartureBoardByCRSAsyncArgs> & { crs: string }
  ) =>
    await GetDepartureBoardByCRS({
      apiKey: this.#apiKey,
      args,
    });

  public GetArrivalBoardByCRS = async (
    args: Optional<GetArrivalBoardByCRSAsyncArgs> & { crs: string }
  ) =>
    await GetArrivalBoardByCRS({
      apiKey: this.#apiKey,
      args,
    });

  public GetReasonCode = async (args: GetReasonCodeAsyncArgs) =>
    await GetReasonCode({
      apiKey: this.#apiKey,
      args,
    });

  public GetReasonCodeList = async (args: GetReasonCodeListAsyncArgs) =>
    await GetReasonCodeList({
      apiKey: this.#apiKey,
      args,
    });

  public GetSourceInstanceNames = async (
    args: GetSourceInstanceNamesAsyncArgs
  ) =>
    await GetSourceInstanceNames({
      apiKey: this.#apiKey,
      args,
    });

  public GetTOCList = async (args: Optional<GetTOCListAsyncArgs>) =>
    await GetTOCList({
      apiKey: this.#apiKey,
      args,
    });

  public GetStationList = async (args: GetStationListAsyncArgs) =>
    await GetStationList({
      apiKey: this.#apiKey,
      args,
    });

  public GetArrivalBoardByTIPLOC = async (
    args: Optional<GetArrivalBoardByTIPLOCAsyncArgs> & { tipLoc: string }
  ) =>
    await GetArrivalBoardByTIPLOC({
      apiKey: this.#apiKey,
      args,
    });

  public GetDepartureBoardByTIPLOC = async (
    args: Optional<GetDepartureBoardByTIPLOCAsyncArgs> & { tipLoc: string }
  ) =>
    await GetDepartureBoardByTIPLOC({
      apiKey: this.#apiKey,
      args,
    });

  public GetDisruptionList = async (args: GetDisruptionListAsyncArgs) =>
    await GetDisruptionList({
      apiKey: this.#apiKey,
      args,
    });

  public GetServiceDetailsByRID = async (
    args: GetServiceDetailsByRIDAsyncArgs
  ) =>
    await GetServiceDetailsByRID({
      apiKey: this.#apiKey,
      args,
    });

  public QueryServices = async (args: QueryServicesAsyncArgs) =>
    await QueryServices({
      apiKey: this.#apiKey,
      args: {
        ...args,
        filterTime: "",
      },
    });
}

// export default {
//   TSOpenLDBSV,
//   getLondonTimeViaTemporal,
//   GetArrivalDepartureBoardByCRS,
//   GetArrivalDepartureBoardByTIPLOC,
//   GetDepartureBoardByCRS,
//   GetArrivalBoardByCRS,
//   GetArrivalBoardByTIPLOC,
//   GetDepartureBoardByTIPLOC,
//   GetDisruptionList,
//   GetServiceDetailsByRID,
//   QueryServices,
//   GetReasonCode,
//   GetReasonCodeList,
//   GetSourceInstanceNames,
//   GetTOCList,
//   GetStationList,

//   //
// };

export {
  TSOpenLDBSV,
  getLondonTimeViaTemporal,
  GetArrivalDepartureBoardByCRS,
  GetArrivalDepartureBoardByTIPLOC,
  GetDepartureBoardByCRS,
  GetArrivalBoardByCRS,
  GetArrivalBoardByTIPLOC,
  GetDepartureBoardByTIPLOC,
  GetDisruptionList,
  GetServiceDetailsByRID,
  QueryServices,
  GetReasonCode,
  GetReasonCodeList,
  GetSourceInstanceNames,
  GetTOCList,
  GetStationList,
  GetArrivalBoardByCRSAsyncArgs,
  GetArrivalDepartureBoardByCRSAsyncArgs,
  GetArrivalDepartureBoardByTIPLOCAsyncArgs,
  GetDepartureBoardByCRSAsyncArgs,
  GetReasonCodeAsyncArgs,
  GetReasonCodeListAsyncArgs,
  GetSourceInstanceNamesAsyncArgs,
  GetStationListAsyncArgs,
  GetTOCListAsyncArgs,
  GetArrivalBoardByTIPLOCAsyncArgs,
  GetDepartureBoardByTIPLOCAsyncArgs,
  GetDisruptionListAsyncArgs,
  GetServiceDetailsByRIDAsyncArgs,
  QueryServicesAsyncArgs,
  GetArrivalBoardByCRSAsync,
  GetArrivalBoardByTIPLOCAsync,
  GetArrivalDepartureBoardByCRSAsync,
  GetArrivalDepartureBoardByTIPLOCAsync,
  GetDepartureBoardByCRSAsync,
  GetDepartureBoardByTIPLOCAsync,
  GetDisruptionListAsync,
  GetReasonCodeAsync,
  GetReasonCodeListAsync,
  GetSourceInstanceNamesAsync,
  GetServiceDetailsByRIDAsync,
  GetStationListAsync,
  GetTOCListAsync,
  QueryServicesAsync,
};
