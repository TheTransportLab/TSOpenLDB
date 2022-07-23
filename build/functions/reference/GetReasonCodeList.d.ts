import { IArgsBase } from "@Root/src/constants";
import { GetReasonCodeAsync, GetReasonCodeListAsyncArgs } from "@Interfaces/index";
export interface IArgs extends IArgsBase {
    args: GetReasonCodeListAsyncArgs;
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetReasonCodeAsync[]>;
