import { IArgsBase } from "@Root/src/constants";
import { GetFastestDeparturesAsync, GetFastestDeparturesAsyncArgs } from "@Interfaces/index";
import { Optional } from "utility-types";
export interface IArgs extends IArgsBase {
    args: Optional<GetFastestDeparturesAsyncArgs> & {
        crs: string;
        filterList: {
            crs: string;
        }[];
    };
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetFastestDeparturesAsync>;
