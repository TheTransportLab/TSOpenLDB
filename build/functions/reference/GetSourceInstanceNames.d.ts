import { IArgsBase } from "@Root/src/constants";
import { GetSourceInstanceNamesAsync, GetSourceInstanceNamesAsyncArgs } from "@Interfaces/index";
export interface IArgs extends IArgsBase {
    args: GetSourceInstanceNamesAsyncArgs;
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetSourceInstanceNamesAsync[]>;
