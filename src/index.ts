import { Optional } from "utility-types";

import {
  GetArrivalBoardByCRSAsyncArgs as _GetArrivalBoardByCRSAsyncArgs,
  GetArrivalDepartureBoardByCRSAsyncArgs as _GetArrivalDepartureBoardByCRSAsyncArgs,
  GetArrivalDepartureBoardByTIPLOCAsyncArgs as _GetArrivalDepartureBoardByTIPLOCAsyncArgs,
  GetDepartureBoardByCRSAsyncArgs as _GetDepartureBoardByCRSAsyncArgs,
  GetReasonCodeAsyncArgs as _GetReasonCodeAsyncArgs,
  GetReasonCodeListAsyncArgs as _GetReasonCodeListAsyncArgs,
  GetSourceInstanceNamesAsyncArgs as _GetSourceInstanceNamesAsyncArgs,
  GetStationListAsyncArgs as _GetStationListAsyncArgs,
  GetTOCListAsyncArgs as _GetTOCListAsyncArgs,
  GetArrivalBoardByTIPLOCAsyncArgs as _GetArrivalBoardByTIPLOCAsyncArgs,
  GetDepartureBoardByTIPLOCAsyncArgs as _GetDepartureBoardByTIPLOCAsyncArgs,
  GetDisruptionListAsyncArgs as _GetDisruptionListAsyncArgs,
  GetServiceDetailsByRIDAsyncArgs as _GetServiceDetailsByRIDAsyncArgs,
  QueryServicesAsyncArgs as _QueryServicesAsyncArgs,
  GetArrBoardWithDetailsAsyncArgs as _GetArrBoardWithDetailsAsyncArgs,
  GetArrDepBoardWithDetailsAsyncArgs as _GetArrDepBoardWithDetailsAsyncArgs,
  GetDepBoardWithDetailsAsyncArgs as _GetDepBoardWithDetailsAsyncArgs,
  GetFastestDeparturesAsyncArgs as _GetFastestDeparturesAsyncArgs,
  GetFastestDeparturesWithDetailsAsyncArgs as _GetFastestDeparturesWithDetailsAsyncArgs,
  GetNextDeparturesAsyncArgs as _GetNextDeparturesAsyncArgs,
  GetNextDeparturesWithDetailsAsyncArgs as _GetNextDeparturesWithDetailsAsyncArgs,
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
import { fn as GetArrBoardWithDetails } from "@Functions/nonreference/GetArrBoardWithDetails";
import { fn as GetArrDepBoardWithDetails } from "@Functions/nonreference/GetArrDepBoardWithDetails";
import { fn as GetDepBoardWithDetails } from "@Functions/nonreference/GetDepBoardWithDetails";
import { fn as GetNextDepartures } from "@Functions/nonreference/GetNextDepartures";
import { fn as GetFastestDepartures } from "@Functions/nonreference/GetFastestDepartures";
import { fn as GetNextDeparturesWithDetails } from "@Functions/nonreference/GetNextDeparturesWithDetails";
import { fn as GetFastestDeparturesWithDetails } from "@Functions/nonreference/GetFastestDeparturesWithDetails";

// Reference functions
import { fn as GetReasonCode } from "@Functions/reference/GetReasonCode";
import { fn as GetReasonCodeList } from "@Functions/reference/GetReasonCodeList";
import { fn as GetSourceInstanceNames } from "@Functions/reference/GetSourceInstanceNames";
import { fn as GetTOCList } from "@Functions/reference/GetTOCList";
import { fn as GetStationList } from "@Functions/reference/GetStationList";
import { getLondonTimeViaTemporal } from "./functions/misc/TimezoneOffset";

export { TFilterType } from "./constants";

export {
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
  GetArrBoardWithDetailsAsyncArgs,
  GetArrDepBoardWithDetailsAsyncArgs,
  GetDepBoardWithDetailsAsyncArgs,
  GetFastestDeparturesAsyncArgs,
  GetFastestDeparturesWithDetailsAsyncArgs,
  GetNextDeparturesAsyncArgs,
  GetNextDeparturesWithDetailsAsyncArgs,
} from "@Interfaces/index";

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
    args: Optional<_GetArrivalDepartureBoardByCRSAsyncArgs> & { crs: string }
  ) =>
    await GetArrivalDepartureBoardByCRS({
      apiKey: this.#apiKey,
      args,
    });

  public GetArrivalDepartureBoardByTIPLOC = async (
    args: Optional<_GetArrivalDepartureBoardByTIPLOCAsyncArgs> & {
      tipLoc: string;
    }
  ) =>
    await GetArrivalDepartureBoardByTIPLOC({
      apiKey: this.#apiKey,
      args,
    });

  public GetDepartureBoardByCRS = async (
    args: Optional<_GetDepartureBoardByCRSAsyncArgs> & { crs: string }
  ) =>
    await GetDepartureBoardByCRS({
      apiKey: this.#apiKey,
      args,
    });

  public GetArrivalBoardByCRS = async (
    args: Optional<_GetArrivalBoardByCRSAsyncArgs> & { crs: string }
  ) =>
    await GetArrivalBoardByCRS({
      apiKey: this.#apiKey,
      args,
    });

  public GetReasonCode = async (args: _GetReasonCodeAsyncArgs) =>
    await GetReasonCode({
      apiKey: this.#apiKey,
      args,
    });

  public GetReasonCodeList = async (args: _GetReasonCodeListAsyncArgs) =>
    await GetReasonCodeList({
      apiKey: this.#apiKey,
      args,
    });

  public GetSourceInstanceNames = async (
    args: _GetSourceInstanceNamesAsyncArgs
  ) =>
    await GetSourceInstanceNames({
      apiKey: this.#apiKey,
      args,
    });

  public GetTOCList = async (args: Optional<_GetTOCListAsyncArgs>) =>
    await GetTOCList({
      apiKey: this.#apiKey,
      args,
    });

  public GetStationList = async (args: _GetStationListAsyncArgs) =>
    await GetStationList({
      apiKey: this.#apiKey,
      args,
    });

  public GetArrivalBoardByTIPLOC = async (
    args: Optional<_GetArrivalBoardByTIPLOCAsyncArgs> & { tipLoc: string }
  ) =>
    await GetArrivalBoardByTIPLOC({
      apiKey: this.#apiKey,
      args,
    });

  public GetDepartureBoardByTIPLOC = async (
    args: Optional<_GetDepartureBoardByTIPLOCAsyncArgs> & { tipLoc: string }
  ) =>
    await GetDepartureBoardByTIPLOC({
      apiKey: this.#apiKey,
      args,
    });

  public GetDisruptionList = async (args: _GetDisruptionListAsyncArgs) =>
    await GetDisruptionList({
      apiKey: this.#apiKey,
      args,
    });

  public GetServiceDetailsByRID = async (
    args: _GetServiceDetailsByRIDAsyncArgs
  ) =>
    await GetServiceDetailsByRID({
      apiKey: this.#apiKey,
      args,
    });

  public QueryServices = async (args: _QueryServicesAsyncArgs) =>
    await QueryServices({
      apiKey: this.#apiKey,
      args: {
        ...args,
        filterTime: "",
      },
    });

  public GetArrBoardWithDetails = async (
    args: _GetArrBoardWithDetailsAsyncArgs
  ) =>
    await GetArrBoardWithDetails({
      apiKey: this.#apiKey,
      args,
    });

  public GetArrDepBoardWithDetails = async (
    args: _GetArrDepBoardWithDetailsAsyncArgs
  ) =>
    await GetArrDepBoardWithDetails({
      apiKey: this.#apiKey,
      args,
    });

  public GetDepBoardWithDetails = async (
    args: _GetDepBoardWithDetailsAsyncArgs
  ) =>
    await GetDepBoardWithDetails({
      apiKey: this.#apiKey,
      args,
    });

  public GetNextDepartures = async (args: _GetNextDeparturesAsyncArgs) =>
    await GetNextDepartures({
      apiKey: this.#apiKey,
      args,
    });

  public GetFastestDepartures = async (args: _GetFastestDeparturesAsyncArgs) =>
    await GetFastestDepartures({
      apiKey: this.#apiKey,
      args,
    });

  public GetNextDeparturesWithDetails = async (
    args: _GetNextDeparturesWithDetailsAsyncArgs
  ) =>
    await GetNextDeparturesWithDetails({
      apiKey: this.#apiKey,
      args,
    });

  public GetFastestDeparturesWithDetails = async (
    args: _GetFastestDeparturesWithDetailsAsyncArgs
  ) =>
    await GetFastestDeparturesWithDetails({
      apiKey: this.#apiKey,
      args,
    });
}

// Create the interface for all properties and methods defined in the TSOpenLDBSV class
export interface ITSOpenLDBSV extends TSOpenLDBSV {}

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
  GetArrBoardWithDetails,
  GetArrDepBoardWithDetails,
  GetDepBoardWithDetails,
  GetNextDepartures,
  GetFastestDepartures,
  GetNextDeparturesWithDetails,
  GetFastestDeparturesWithDetails,

  // GetArrivalBoardByCRSAsyncArgs,
  // GetArrivalDepartureBoardByCRSAsyncArgs,
  // GetArrivalDepartureBoardByTIPLOCAsyncArgs,
  // GetDepartureBoardByCRSAsyncArgs,
  // GetReasonCodeAsyncArgs,
  // GetReasonCodeListAsyncArgs,
  // GetSourceInstanceNamesAsyncArgs,
  // GetStationListAsyncArgs,
  // GetTOCListAsyncArgs,
  // GetArrivalBoardByTIPLOCAsyncArgs,
  // GetDepartureBoardByTIPLOCAsyncArgs,
  // GetDisruptionListAsyncArgs,
  // GetServiceDetailsByRIDAsyncArgs,
  // QueryServicesAsyncArgs,
  // GetArrivalBoardByCRSAsync,
  // GetArrivalBoardByTIPLOCAsync,
  // GetArrivalDepartureBoardByCRSAsync,
  // GetArrivalDepartureBoardByTIPLOCAsync,
  // GetDepartureBoardByCRSAsync,
  // GetDepartureBoardByTIPLOCAsync,
  // GetDisruptionListAsync,
  // GetReasonCodeAsync,
  // GetReasonCodeListAsync,
  // GetSourceInstanceNamesAsync,
  // GetServiceDetailsByRIDAsync,
  // GetStationListAsync,
  // GetTOCListAsync,
  // QueryServicesAsync,
};

// export default _exports;