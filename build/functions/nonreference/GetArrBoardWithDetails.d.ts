import { IArgsBase } from "@Root/src/constants";
import { GetArrBoardWithDetailsAsync, GetArrBoardWithDetailsAsyncArgs } from "@Interfaces/index";
import { Optional } from "utility-types";
export interface IArgs extends IArgsBase {
    args: Optional<GetArrBoardWithDetailsAsyncArgs> & {
        crs: string;
    };
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetArrBoardWithDetailsAsync>;
