// Do not use this - it doesn't do what we want

import path from "path";
import { parseAndGenerate } from "wsdl-tsclient";

const wsdlPath = path.resolve(__dirname, "..", "..", "OpenLDBSVWS.wsdl");
const refWsdlPath = path.resolve(__dirname, "..", "..", "OpenLDBSVWS.ref.wsdl");

const outputPathBase = path.resolve(__dirname, "..", "wsdlClient");
const srcPath = path.resolve(__dirname, "..", "..", "src", "wsdlClient");

parseAndGenerate(wsdlPath, path.resolve(outputPathBase, "nonreference"));
parseAndGenerate(refWsdlPath, path.resolve(outputPathBase, "reference"));
parseAndGenerate(wsdlPath, path.resolve(srcPath, "nonreference"));
parseAndGenerate(refWsdlPath, path.resolve(srcPath, "reference"));
