import path from "path";
import * as soap from "soap";
import { IArgsBase } from "@Root/src/constants";
import {
  GetArrivalBoardByCRSAsyncArgs,
  GetArrivalBoardByCRSAsync,
} from "@Interfaces/index";
import { Optional } from "utility-types";
import { getLondonTimeViaTemporal } from "../misc/TimezoneOffset";

const fnName = "GetArrivalDepartureBoardByCRSAsync";

export interface IArgs extends IArgsBase {
  args: Optional<GetArrivalBoardByCRSAsyncArgs> & { crs: string };
}

export const fn = async ({ apiKey, args }: IArgs) => {
  const defaultValues: Optional<GetArrivalBoardByCRSAsyncArgs, "crs"> = {
    filtercrs: "",
    filterTOC: "",
    filterType: "to",
    getNonPassengerServices: true,
    numRows: 150,
    services: "PBS",
    timeWindow: 120,
    time: getLondonTimeViaTemporal(0) ?? args.time,
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
  return Object.values(result?.[0])?.[0] as GetArrivalBoardByCRSAsync;
};
