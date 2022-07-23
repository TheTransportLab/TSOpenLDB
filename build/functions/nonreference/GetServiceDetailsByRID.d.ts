import { IArgsBase } from "@Root/src/constants";
import { GetServiceDetailsByRIDAsync, GetServiceDetailsByRIDAsyncArgs } from "@Interfaces/index";
export interface IArgs extends IArgsBase {
    args: GetServiceDetailsByRIDAsyncArgs;
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetServiceDetailsByRIDAsync>;
