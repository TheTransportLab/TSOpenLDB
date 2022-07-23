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
require("dotenv").config();
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const soap = __importStar(require("soap"));
const typescript_interface_generator_1 = require("typescript-interface-generator");
const constants_1 = require("../constants");
const apiKey = process.env.OPENLDBSV_API_KEY;
const wsdlPath = path_1.default.resolve(__dirname, "..", "..", "OpenLDBSVWS.wsdl");
const refWsdlPath = path_1.default.resolve(__dirname, "..", "..", "OpenLDBSVWS.ref.wsdl");
const nonReferenceFolder = path_1.default.resolve(__dirname, "..", "functions", "nonreference");
const interfacesFolderBase = path_1.default.resolve(__dirname, "..", "interfaces");
const referenceFolder = path_1.default.resolve(__dirname, "..", "functions", "reference");
const generateNonReferenceInterfaces = async () => {
    const soapClient = await soap.createClientAsync(wsdlPath);
    soapClient.addSoapHeader({ AccessToken: { TokenValue: apiKey } }, "", "tok");
    // console.log({ soapClient });
    for await (const { args, name, active } of constants_1.nonReferenceEndpoints) {
        if (active === false) {
            return;
        }
        try {
            const result = await soapClient[name](args);
            const argsInterfaceCode = (0, typescript_interface_generator_1.createInterfacesFromObject)([name, "Args"].join(""), args);
            fs_1.default.writeFileSync(path_1.default.resolve(interfacesFolderBase, [name, "interface", "args", "ts"].join(".")), ["export", argsInterfaceCode].join(" "));
            const interfaceCode = (0, typescript_interface_generator_1.createInterfacesFromObject)(name, Object.values(result?.[0])?.[0]);
            fs_1.default.writeFileSync(path_1.default.resolve(interfacesFolderBase, [name, "interface", "ts"].join(".")), ["export", interfaceCode].join(" "));
        }
        catch (error) {
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
    for await (const { args, name, active } of constants_1.referenceEndpoints) {
        try {
            const result = await soapClient[name](args);
            const argsInterfaceCode = (0, typescript_interface_generator_1.createInterfacesFromObject)([name, "Args"].join(""), args);
            fs_1.default.writeFileSync(path_1.default.resolve(interfacesFolderBase, [name, "interface", "args", "ts"].join(".")), ["export", argsInterfaceCode].join(" "));
            const interfaceCode = (0, typescript_interface_generator_1.createInterfacesFromObject)(name, Object.values(result?.[0])?.[0]);
            fs_1.default.writeFileSync(path_1.default.resolve(interfacesFolderBase, [name, "interface", "ts"].join(".")), ["export", interfaceCode].join(" "));
        }
        catch (error) {
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
            const fileList = fs_1.default.readdirSync(interfacesFolderBase);
            console.log(fileList);
            const exportAllString = fileList
                .filter((file) => !file.includes("_ERROR_") && !file.includes("index.d.ts"))
                .map((file) => {
                return `export * from "./${file.slice(0, -3)}";`;
                // return fs.readFileSync(path.resolve(interfacesFolderBase, file), "utf8");
            })
                .join("\n");
            fs_1.default.writeFileSync(path_1.default.resolve(interfacesFolderBase, "index.d.ts"), exportAllString);
        });
    });
};
generate();
