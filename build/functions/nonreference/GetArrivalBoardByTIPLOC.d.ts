import { IArgsBase } from "@Root/src/constants";
import { GetArrivalBoardByTIPLOCAsync, GetArrivalBoardByTIPLOCAsyncArgs } from "@Interfaces/index";
import { Optional } from "utility-types";
export interface IArgs extends IArgsBase {
    args: Optional<GetArrivalBoardByTIPLOCAsyncArgs> & {
        tipLoc: string;
    };
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetArrivalBoardByTIPLOCAsync>;
