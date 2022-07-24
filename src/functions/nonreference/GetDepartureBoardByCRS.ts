import path from "path";
import * as soap from "soap";
import { IArgsBase } from "@Root/src/constants";
import {
  GetDepartureBoardByCRSAsyncArgs,
  GetDepartureBoardByCRSAsync,
} from "@Interfaces/index";
import { Optional } from "utility-types";
import { getLondonTimeViaTemporal } from "../misc/TimezoneOffset";

const fnName = "GetDepartureBoardByCRSAsync";

export interface IArgs extends IArgsBase {
  args: Optional<GetDepartureBoardByCRSAsyncArgs> & { crs: string };
}

export const fn = async ({ apiKey, args }: IArgs) => {
  const defaultValues: Optional<GetDepartureBoardByCRSAsyncArgs> = {
    filtercrs: "",
    filterTOC: "",
    filterType: "to",
    getNonPassengerServices: true,
    numRows: 150,
    services: "PBS",
    time: getLondonTimeViaTemporal(0),
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
  return Object.values(result?.[0])?.[0] as GetDepartureBoardByCRSAsync;
};
