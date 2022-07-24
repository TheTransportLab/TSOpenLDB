import { IArgsBase } from "@Root/src/constants";
import { GetNextDeparturesWithDetailsAsync, GetNextDeparturesWithDetailsAsyncArgs } from "@Interfaces/index";
export interface IArgs extends IArgsBase {
    args: GetNextDeparturesWithDetailsAsyncArgs;
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetNextDeparturesWithDetailsAsync>;
