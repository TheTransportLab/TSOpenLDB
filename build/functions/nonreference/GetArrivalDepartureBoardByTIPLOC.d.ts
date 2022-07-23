import { IArgsBase } from "@Root/src/constants";
import { GetArrivalDepartureBoardByTIPLOCAsyncArgs, GetArrivalDepartureBoardByTIPLOCAsync } from "@Interfaces/index";
import { Optional } from "utility-types";
export interface IArgs extends IArgsBase {
    args: Optional<GetArrivalDepartureBoardByTIPLOCAsyncArgs> & {
        tipLoc: string;
    };
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetArrivalDepartureBoardByTIPLOCAsync>;
