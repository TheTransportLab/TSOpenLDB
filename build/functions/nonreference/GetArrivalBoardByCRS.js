"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fn = void 0;
const path_1 = __importDefault(require("path"));
const soap = __importStar(require("soap"));
const TimezoneOffset_1 = require("../misc/TimezoneOffset");
const fnName = "GetArrivalBoardByCRSAsync";
const fn = async ({ apiKey, args }) => {
    const defaultValues = {
        filtercrs: "",
        filterTOC: "",
        filterType: "to",
        getNonPassengerServices: true,
        numRows: 150,
        services: "PBS",
        time: (0, TimezoneOffset_1.getLondonTimeViaTemporal)(0),
        timeWindow: 120,
    };
    const wsdlPath = path_1.default.resolve(__dirname, "..", "..", "..", "OpenLDBSVWS.wsdl");
    const soapClient = await soap.createClientAsync(wsdlPath);
    soapClient.addSoapHeader({ AccessToken: { TokenValue: apiKey } }, "", "tok");
    const result = await soapClient[fnName]({ ...defaultValues, ...args });
    return Object.values(result?.[0])?.[0];
};
exports.fn = fn;
