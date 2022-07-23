import { IArgsBase } from "@Root/src/constants";
import { GetDepartureBoardByTIPLOCAsync, GetDepartureBoardByTIPLOCAsyncArgs } from "@Interfaces/index";
import { Optional } from "utility-types";
export interface IArgs extends IArgsBase {
    args: Optional<GetDepartureBoardByTIPLOCAsyncArgs> & {
        tipLoc: string;
    };
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetDepartureBoardByTIPLOCAsync>;
