import { IArgsBase } from "@Constants";
import { QueryServicesAsync, QueryServicesAsyncArgs } from "@Interfaces/index";
export interface IArgs extends IArgsBase {
    args: QueryServicesAsyncArgs;
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<QueryServicesAsync>;
