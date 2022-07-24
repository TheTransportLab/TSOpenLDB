import { IArgsBase } from "@Root/src/constants";
import { GetArrDepBoardWithDetailsAsync, GetArrDepBoardWithDetailsAsyncArgs } from "@Interfaces/index";
import { Optional } from "utility-types";
export interface IArgs extends IArgsBase {
    args: Optional<GetArrDepBoardWithDetailsAsyncArgs> & {
        crs: string;
    };
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetArrDepBoardWithDetailsAsync>;