import { IArgsBase } from "@Root/src/constants";
import { GetDepBoardWithDetailsAsync, GetDepBoardWithDetailsAsyncArgs } from "@Interfaces/index";
import { Optional } from "utility-types";
export interface IArgs extends IArgsBase {
    args: Optional<GetDepBoardWithDetailsAsyncArgs> & {
        crs: string;
    };
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetDepBoardWithDetailsAsync>;
