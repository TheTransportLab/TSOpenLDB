import path from "path";
import * as soap from "soap";
import { IArgsBase } from "@Root/src/constants";
import { GetTOCListAsync, GetTOCListAsyncArgs } from "@Interfaces/index";
import { Optional } from "utility-types";

const fnName = "GetTOCListAsync";

export interface IArgs extends IArgsBase {
  args: Optional<GetTOCListAsyncArgs>;
}

export const fn = async ({ apiKey, args }: IArgs) => {
  const wsdlPath = path.resolve(__dirname, "..", "..", "OpenLDBSVWS.ref.wsdl");
  const soapClient = await soap.createClientAsync(wsdlPath);
  soapClient.addSoapHeader({ AccessToken: { TokenValue: apiKey } }, "", "tok");
  const result = await soapClient[fnName](args);
  //@ts-ignore
  return Object.values(result?.[0])?.[0] as GetTOCListAsync;
};
