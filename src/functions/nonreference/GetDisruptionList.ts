import path from "path";
import * as soap from "soap";
import { IArgsBase } from "@Root/src/constants";
import {
  GetDisruptionListAsync,
  GetDisruptionListAsyncArgs,
} from "@Interfaces/index";

const fnName = "GetDisruptionListAsync";

export interface IArgs extends IArgsBase {
  args: GetDisruptionListAsyncArgs;
}

export const fn = async ({ apiKey, args }: IArgs) => {
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
  return Object.values(result?.[0])?.[0] as GetDisruptionListAsync;
};