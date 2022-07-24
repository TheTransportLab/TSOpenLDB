import path from "path";
import * as soap from "soap";
import { IArgsBase } from "@Root/src/constants";
import {
  GetDepartureBoardByTIPLOCAsync,
  GetDepartureBoardByTIPLOCAsyncArgs,
} from "@Interfaces/index";
import { Optional } from "utility-types";
import { getLondonTimeViaTemporal } from "@Functions/misc/TimezoneOffset";

const fnName = "GetDepartureBoardByTIPLOCAsync";

export interface IArgs extends IArgsBase {
  args: Optional<GetDepartureBoardByTIPLOCAsyncArgs> & { tipLoc: string };
}

export const fn = async ({ apiKey, args }: IArgs) => {
  const defaultValues: Optional<GetDepartureBoardByTIPLOCAsyncArgs, "tiploc"> =
    {
      filterTiploc: "",
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
  return Object.values(result?.[0])?.[0] as GetDepartureBoardByTIPLOCAsync;
};
