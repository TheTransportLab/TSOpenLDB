import { IArgsBase } from "@Root/src/constants";
import { GetTOCListAsync, GetTOCListAsyncArgs } from "@Interfaces/index";
import { Optional } from "utility-types";
export interface IArgs extends IArgsBase {
    args: Optional<GetTOCListAsyncArgs>;
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetTOCListAsync>;
