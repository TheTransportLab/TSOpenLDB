import { IArgsBase } from "@Root/src/constants";
import { GetNextDeparturesAsync, GetNextDeparturesAsyncArgs } from "@Interfaces/index";
import { Optional } from "utility-types";
export interface IArgs extends IArgsBase {
    args: Optional<GetNextDeparturesAsyncArgs> & {
        crs: string;
        filterList: {
            crs: string;
        }[];
    };
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetNextDeparturesAsync>;
