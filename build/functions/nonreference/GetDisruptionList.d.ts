import { IArgsBase } from "@Root/src/constants";
import { GetDisruptionListAsync, GetDisruptionListAsyncArgs } from "@Interfaces/index";
export interface IArgs extends IArgsBase {
    args: GetDisruptionListAsyncArgs;
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetDisruptionListAsync>;
