require("dotenv").config();
import path from "path";
import fs from "fs";
import * as soap from "soap";
import { createInterfacesFromObject } from "typescript-interface-generator";
import { nonReferenceEndpoints, referenceEndpoints } from "../constants";

const apiKey = process.env.OPENLDBSV_API_KEY;

const wsdlPath = path.resolve(__dirname, "..", "..", "OpenLDBSVWS.wsdl");
const refWsdlPath = path.resolve(__dirname, "..", "..", "OpenLDBSVWS.ref.wsdl");

const nonReferenceFolder = path.resolve(
  __dirname,
  "..",
  "functions",
  "nonreference"
);

const interfacesFolderBase = path.resolve(__dirname, "..", "interfaces");

const referenceFolder = path.resolve(__dirname, "..", "functions", "reference");

const generateNonReferenceInterfaces = async () => {
  const soapClient = await soap.createClientAsync(wsdlPath);
  soapClient.addSoapHeader({ AccessToken: { TokenValue: apiKey } }, "", "tok");
  // console.log({ soapClient });

  for await (const { args, name, active } of nonReferenceEndpoints) {
    if (active === false) {
      return;
    }
    try {
      const result = await soapClient[name](args);

      const argsInterfaceCode = createInterfacesFromObject(
        [name, "Args"].join(""),
        args
      );

      fs.writeFileSync(
        path.resolve(
          interfacesFolderBase,
          [name, "interface", "args", "ts"].join(".")
        ),
        ["export", argsInterfaceCode].join(" ")
      );

      const interfaceCode = createInterfacesFromObject(
        name,
        Object.values(result?.[0])?.[0]
      );
      fs.writeFileSync(
        path.resolve(interfacesFolderBase, [name, "interface", "ts"].join(".")),
        ["export", interfaceCode].join(" ")
      );
    } catch (error) {
      // if (name === "GetNextDeparturesAsync") {
      //   console.log(error);
      // }
      // const outputPath = path.resolve(
      //   interfacesFolderBase,
      //   [name, "interface", "_ERROR_", "log"].join(".")
      // );
      // fs.writeFileSync(outputPath, error.toString());
      console.log(`${name} failed - see log`);
    }
  }

  // nonReferenceEndpoints.forEach(async ({ args, name, active }) => {
  //   if (active === false) {
  //     return;
  //   }
  //   try {
  //     const result = await soapClient[name](args);

  //     const argsInterfaceCode = createInterfacesFromObject(
  //       [name, "Args"].join(""),
  //       args
  //     );

  //     fs.writeFileSync(
  //       path.resolve(
  //         interfacesFolderBase,
  //         [name, "interface", "args", "ts"].join(".")
  //       ),
  //       ["export", argsInterfaceCode].join(" ")
  //     );

  //     const interfaceCode = createInterfacesFromObject(
  //       name,
  //       Object.values(result?.[0])?.[0]
  //     );
  //     fs.writeFileSync(
  //       path.resolve(interfacesFolderBase, [name, "interface", "ts"].join(".")),
  //       ["export", interfaceCode].join(" ")
  //     );
  //   } catch (error) {
  //     // if (name === "GetNextDeparturesAsync") {
  //     //   console.log(error);
  //     // }
  //     const outputPath = path.resolve(
  //       interfacesFolderBase,
  //       [name, "interface", "_ERROR_", "log"].join(".")
  //     );
  //     fs.writeFileSync(outputPath, error.toString());
  //     console.log(`${name} failed - see log at `, outputPath);
  //   }
  // });
};

const generateReferenceInterfaces = async () => {
  const soapClient = await soap.createClientAsync(refWsdlPath);
  soapClient.addSoapHeader({ AccessToken: { TokenValue: apiKey } }, "", "tok");
  for await (const { args, name, active } of referenceEndpoints) {
    try {
      const result = await soapClient[name](args);

      const argsInterfaceCode = createInterfacesFromObject(
        [name, "Args"].join(""),
        args
      );

      fs.writeFileSync(
        path.resolve(
          interfacesFolderBase,
          [name, "interface", "args", "ts"].join(".")
        ),
        ["export", argsInterfaceCode].join(" ")
      );

      const interfaceCode = createInterfacesFromObject(
        name,
        Object.values(result?.[0])?.[0]
      );
      fs.writeFileSync(
        path.resolve(interfacesFolderBase, [name, "interface", "ts"].join(".")),
        ["export", interfaceCode].join(" ")
      );
    } catch (error) {
      // if (name === "GetNextDeparturesAsync") {
      //   console.log(error);
      // }
      // const outputPath = path.resolve(
      //   interfacesFolderBase,
      //   [name, "interface", "_ERROR_", "log"].join(".")
      // );
      // fs.writeFileSync(outputPath, error.toString());
      console.log(`${name} failed - see log`);
    }
  }
};

const generate = () => {
  generateNonReferenceInterfaces().then(() => {
    generateReferenceInterfaces().then(() => {
      const fileList = fs.readdirSync(interfacesFolderBase);
      console.log(fileList);
      const exportAllString = fileList
        .filter(
          (file) => !file.includes("_ERROR_") && !file.includes("index.d.ts")
        )
        .map((file) => {
          return `export * from "./${file.slice(0, -3)}";`;
          // return fs.readFileSync(path.resolve(interfacesFolderBase, file), "utf8");
        })
        .join("\n");
      fs.writeFileSync(
        path.resolve(interfacesFolderBase, "index.d.ts"),
        exportAllString
      );
    });
  });
};

generate();
