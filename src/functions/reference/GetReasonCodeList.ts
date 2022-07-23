import path from "path";
import * as soap from "soap";
import { IArgsBase } from "@Root/src/constants";
import {
  GetReasonCodeAsync,
  GetReasonCodeListAsyncArgs,
} from "@Interfaces/index";

const fnName = "GetReasonCodeListAsync";

export interface IArgs extends IArgsBase {
  args: GetReasonCodeListAsyncArgs;
}

export const fn = async ({ apiKey, args }: IArgs) => {
  const wsdlPath = path.resolve(__dirname, "..", "..", "OpenLDBSVWS.ref.wsdl");
  const soapClient = await soap.createClientAsync(wsdlPath);
  soapClient.addSoapHeader({ AccessToken: { TokenValue: apiKey } }, "", "tok");
  const result = await soapClient[fnName](args);
  return Object.values(
    Object.values(result?.[0])?.[0]
  )?.[0] as GetReasonCodeAsync[];
};
