import path from "path";
import * as soap from "soap";
import { IArgsBase } from "@Root/src/constants";
import {
  GetFastestDeparturesAsync,
  GetFastestDeparturesAsyncArgs,
} from "@Interfaces/index";
import { Optional } from "utility-types";
import { getLondonTimeViaTemporal } from "../misc/TimezoneOffset";

const fnName = "GetFastestDeparturesAsync";

export interface IArgs extends IArgsBase {
  args: Optional<GetFastestDeparturesAsyncArgs> & {
    crs: string;
    filterList: { crs: string }[];
  };
}

export const fn = async ({ apiKey, args }: IArgs) => {
  const defaultValues: Optional<
    GetFastestDeparturesAsyncArgs,
    "crs" | "filterList"
  > = {
    filterList: [{ crs: "YRK" }],
    time: getLondonTimeViaTemporal(0),
    timeOffset: 0,
    timeWindow: 120,
  };
  const wsdlPath = path.resolve(
    __dirname,
    "..",
    "..",
    "..",
    "OpenLDBSVWS.wsdl"
  );
  const soapClient = await soap.createClientAsync(wsdlPath);
  soapClient.addSoapHeader({ AccessToken: { TokenValue: apiKey } }, "", "tok");
  const result = await soapClient[fnName]({ ...defaultValues, ...args });
  return Object.values(result?.[0])?.[0] as GetFastestDeparturesAsync;
};
