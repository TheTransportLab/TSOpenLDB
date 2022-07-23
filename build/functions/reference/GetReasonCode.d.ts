import { IArgsBase } from "@Root/src/constants";
import { GetReasonCodeAsync, GetReasonCodeAsyncArgs } from "@Interfaces/index";
export interface IArgs extends IArgsBase {
    args: GetReasonCodeAsyncArgs;
}
export declare const fn: ({ args, apiKey }: IArgs & {
    apiKey: string;
}) => Promise<GetReasonCodeAsync>;
