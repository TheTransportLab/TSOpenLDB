import { IArgsBase } from "@Root/src/constants";
import { GetArrivalBoardByCRSAsyncArgs, GetArrivalBoardByCRSAsync } from "@Interfaces/index";
import { Optional } from "utility-types";
export interface IArgs extends IArgsBase {
    args: Optional<GetArrivalBoardByCRSAsyncArgs> & {
        crs: string;
    };
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetArrivalBoardByCRSAsync>;
