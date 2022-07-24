import { IArgsBase } from "@Root/src/constants";
import { GetFastestDeparturesWithDetailsAsync, GetFastestDeparturesWithDetailsAsyncArgs } from "@Interfaces/index";
import { Optional } from "utility-types";
export interface IArgs extends IArgsBase {
    args: Optional<GetFastestDeparturesWithDetailsAsyncArgs> & {
        crs: string;
        filterList: {
            crs: string;
        }[];
    };
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetFastestDeparturesWithDetailsAsync>;
