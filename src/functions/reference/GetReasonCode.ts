import path from "path";
import * as soap from "soap";
import { IArgsBase } from "@Root/src/constants";
import { GetReasonCodeAsync, GetReasonCodeAsyncArgs } from "@Interfaces/index";

const fnName = "GetReasonCodeAsync";

export interface IArgs extends IArgsBase {
  args: GetReasonCodeAsyncArgs;
}

export const fn = async ({ args, apiKey }: IArgs & { apiKey: string }) => {
  const wsdlPath = path.resolve(
    __dirname,
    "..",
    "..",
    "..",
    "OpenLDBSVWS.wsdl"
  );
  const soapClient = await soap.createClientAsync(wsdlPath);
  soapClient.addSoapHeader({ AccessToken: { TokenValue: apiKey } }, "", "tok");
  const result = await soapClient[fnName](args);
  // console.log(result);
  return Object.values(result?.[0])?.[0] as GetReasonCodeAsync;
};
