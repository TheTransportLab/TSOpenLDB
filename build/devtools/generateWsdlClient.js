"use strict";
// Do not use this - it doesn't do what we want
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const wsdl_tsclient_1 = require("wsdl-tsclient");
const wsdlPath = path_1.default.resolve(__dirname, "..", "..", "OpenLDBSVWS.wsdl");
const refWsdlPath = path_1.default.resolve(__dirname, "..", "..", "OpenLDBSVWS.ref.wsdl");
const outputPathBase = path_1.default.resolve(__dirname, "..", "wsdlClient");
const srcPath = path_1.default.resolve(__dirname, "..", "..", "src", "wsdlClient");
(0, wsdl_tsclient_1.parseAndGenerate)(wsdlPath, path_1.default.resolve(outputPathBase, "nonreference"));
(0, wsdl_tsclient_1.parseAndGenerate)(refWsdlPath, path_1.default.resolve(outputPathBase, "reference"));
(0, wsdl_tsclient_1.parseAndGenerate)(wsdlPath, path_1.default.resolve(srcPath, "nonreference"));
(0, wsdl_tsclient_1.parseAndGenerate)(refWsdlPath, path_1.default.resolve(srcPath, "reference"));
