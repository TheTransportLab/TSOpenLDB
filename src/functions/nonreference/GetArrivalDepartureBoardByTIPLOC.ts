import path from "path";
import * as soap from "soap";
import { IArgsBase } from "@Root/src/constants";
import {
  GetArrivalDepartureBoardByTIPLOCAsyncArgs,
  GetArrivalDepartureBoardByTIPLOCAsync,
} from "@Interfaces/index";
import { Optional } from "utility-types";
import { getLondonTimeViaTemporal } from "@Functions/misc/TimezoneOffset";

const fnName = "GetArrivalDepartureBoardByTIPLOCAsync";

export interface IArgs extends IArgsBase {
  args: Optional<GetArrivalDepartureBoardByTIPLOCAsyncArgs> & {
    tipLoc: string;
  };
}

export const fn = async ({ apiKey, args }: IArgs) => {
  const defaultValues: Optional<
    GetArrivalDepartureBoardByTIPLOCAsyncArgs,
    "tiploc"
  > = {
    filterTiploc: "",
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
  return Object.values(
    result?.[0]
  )?.[0] as GetArrivalDepartureBoardByTIPLOCAsync;
};
