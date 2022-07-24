import path from "path";
import * as soap from "soap";
import { IArgsBase } from "@Root/src/constants";
import {
  GetNextDeparturesAsync,
  GetNextDeparturesAsyncArgs,
} from "@Interfaces/index";
import { Optional } from "utility-types";
import { getLondonTimeViaTemporal } from "../misc/TimezoneOffset";

const fnName = "GetNextDeparturesAsync";

export interface IArgs extends IArgsBase {
  args: Optional<GetNextDeparturesAsyncArgs> & {
    crs: string;
    filterList: { crs: string }[];
  };
}

export const fn = async ({ apiKey, args }: IArgs) => {
  const defaultValues: Optional<
    GetNextDeparturesAsyncArgs,
    "crs" | "filterList"
  > = {
    filterList: [{ crs: "YRK" }],
    time: getLondonTimeViaTemporal(0),
    timeOffset: 0,
    timeWindow: 120,
    services: "P",
    filterTOC: "",
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
  return Object.values(result?.[0])?.[0] as GetNextDeparturesAsync;
};
