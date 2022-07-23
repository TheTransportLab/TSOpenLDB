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
const GetReasonCode_1 = require("./GetReasonCode");
const chai_1 = __importStar(require("chai"));
const mocha_1 = require("mocha");
chai_1.default.use(require("chai-like"));
chai_1.default.use(require("chai-things"));
let result;
describe("GetReasonCode", () => {
    (0, mocha_1.before)(async () => {
        result = await (0, GetReasonCode_1.fn)({
            apiKey: process.env.OPENLDBSV_API_KEY,
            args: {
                reasonCode: 100,
            },
        });
        console.log({ result });
    });
    it("Should be an object", async () => {
        (0, chai_1.expect)(result).to.be.an("object");
    });
    it("Should contain properties code, cancReason and lateReason", async () => {
        (0, chai_1.expect)(result[0]).to.be.an("object");
        (0, chai_1.expect)(result[0]).to.have.property("code");
        (0, chai_1.expect)(result[0]).to.have.property("cancReason");
        (0, chai_1.expect)(result[0]).to.have.property("lateReason");
    });
});
