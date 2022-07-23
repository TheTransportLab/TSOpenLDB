require("dotenv").config();
import path from "path";
import fs from "fs";
import * as soap from "soap";

const wsdlPath = path.resolve(__dirname, "..", "..", "OpenLDBSVWS.wsdl");
const refWsdlPath = path.resolve(__dirname, "..", "..", "OpenLDBSVWS.ref.wsdl");

const viewReferenceSoapEndpoints = async () => {
  const soapClient = await soap.createClientAsync(refWsdlPath);
  const result = soapClient.wsdl.definitions;
  fs.writeFileSync(
    path.resolve(__dirname, "referenceEndpoints.json"),
    JSON.stringify(result, null, 2)
  );
};

const viewNonReferenceSoapEndpoints = async () => {
  const soapClient = await soap.createClientAsync(wsdlPath);
  const result = soapClient.wsdl.definitions;
  fs.writeFileSync(
    path.resolve(__dirname, "nonreferenceEndpoints.json"),
    JSON.stringify(result, null, 2)
  );
};

viewReferenceSoapEndpoints();
viewNonReferenceSoapEndpoints();
