import path from "path";
import * as soap from "soap";
import { IArgsBase } from "@Root/src/constants";
import {
  GetDepBoardWithDetailsAsync,
  GetDepBoardWithDetailsAsyncArgs,
} from "@Interfaces/index";
import { Optional } from "utility-types";
import { getLondonTimeViaTemporal } from "../misc/TimezoneOffset";

const fnName = "GetDepBoardWithDetailsAsync";

export interface IArgs extends IArgsBase {
  args: Optional<GetDepBoardWithDetailsAsyncArgs> & { crs: string };
}

export const fn = async ({ apiKey, args }: IArgs) => {
  const defaultValues: Optional<GetDepBoardWithDetailsAsyncArgs, "crs"> = {
    filtercrs: "",
    timeOffset: 0,
    filterType: "to",
    numRows: 150,
    time: getLondonTimeViaTemporal(0),
    timeWindow: 120,
    //@ts-ignore
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
  return Object.values(result?.[0])?.[0] as GetDepBoardWithDetailsAsync;
};
