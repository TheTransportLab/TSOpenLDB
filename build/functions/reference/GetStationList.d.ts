import { IArgsBase } from "@Root/src/constants";
import { GetStationListAsync, GetStationListAsyncArgs } from "@Interfaces/index";
export interface IArgs extends IArgsBase {
    args: GetStationListAsyncArgs;
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetStationListAsync>;
