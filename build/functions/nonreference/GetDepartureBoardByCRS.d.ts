import { IArgsBase } from "@Root/src/constants";
import { GetDepartureBoardByCRSAsyncArgs, GetDepartureBoardByCRSAsync } from "@Interfaces/index";
import { Optional } from "utility-types";
export interface IArgs extends IArgsBase {
    args: Optional<GetDepartureBoardByCRSAsyncArgs> & {
        crs: string;
    };
}
export declare const fn: ({ apiKey, args }: IArgs) => Promise<GetDepartureBoardByCRSAsync>;
