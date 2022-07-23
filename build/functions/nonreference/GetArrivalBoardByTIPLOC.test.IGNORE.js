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
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const chai_1 = __importStar(require("chai"));
const mocha_1 = require("mocha");
const GetArrivalBoardByTIPLOC_1 = require("./GetArrivalBoardByTIPLOC");
chai_1.default.use(require("chai-like"));
chai_1.default.use(require("chai-things"));
let result;
describe("GetArrivalBoardByTIPLOC", () => {
    (0, mocha_1.before)(async () => {
        result = await (0, GetArrivalBoardByTIPLOC_1.fn)({
            // @ts-ignore - Why the fuck is this broken? It IS fucking defined in the fucking interface, dipshit
            apiKey: process.env.OPENLDBSV_API_KEY,
            args: {
                tipLoc: "LEEDS",
            },
        });
        // console.log(result?.trainServices.service[0]);
    });
    // it("Should be an array", async () => {
    //   // expect(result).to.be.an("array");
    //   expect(true).to.be.true;
    // });
    it("Should contain correct properties", async () => {
        (0, chai_1.expect)(result).to.be.an("object");
        (0, chai_1.expect)(result).to.have.property("generatedAt");
        (0, chai_1.expect)(result).to.have.property("locationName");
        (0, chai_1.expect)(result).to.have.property("crs");
        (0, chai_1.expect)(result).to.have.property("stationManager");
        (0, chai_1.expect)(result).to.have.property("stationManagerCode");
        (0, chai_1.expect)(result).to.have.property("trainServices");
    });
    it("trainServices to contain a services property, which should be an array", async () => {
        (0, chai_1.expect)(result?.trainServices).to.be.an("object");
        (0, chai_1.expect)(result?.trainServices).to.have.property("service");
        (0, chai_1.expect)(result?.trainServices.service).to.be.an("array");
    });
    it("trainServices.services[0] should contain correct properties", async () => {
        (0, chai_1.expect)(result?.trainServices.service[0]).to.be.an("object");
        (0, chai_1.expect)(result?.trainServices.service[0]).to.have.property("rid");
        (0, chai_1.expect)(result?.trainServices.service[0]).to.have.property("uid");
        (0, chai_1.expect)(result?.trainServices.service[0]).to.have.property("trainid");
        (0, chai_1.expect)(result?.trainServices.service[0]).to.have.property("sdd");
        (0, chai_1.expect)(result?.trainServices.service[0]).to.have.property("operator");
        (0, chai_1.expect)(result?.trainServices.service[0]).to.have.property("operatorCode");
        (0, chai_1.expect)(result?.trainServices.service[0]).to.have.property("sta");
        (0, chai_1.expect)(result?.trainServices.service[0]).to.have.property("std");
        (0, chai_1.expect)(result?.trainServices.service[0]).to.have.property("origin");
        (0, chai_1.expect)(result?.trainServices.service[0]).to.have.property("destination");
        (0, chai_1.expect)(result?.trainServices.service[0]).to.have.property("category");
        (0, chai_1.expect)(result?.trainServices.service[0]).to.have.property("activities");
    });
});
