import path from "path";
import * as soap from "soap";
import { IArgsBase } from "@Constants";
import { QueryServicesAsync, QueryServicesAsyncArgs } from "@Interfaces/index";

const fnName = "QueryServicesAsync";

export interface IArgs extends IArgsBase {
  args: QueryServicesAsyncArgs;
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
  return Object.values(result?.[0])?.[0] as QueryServicesAsync;
};
