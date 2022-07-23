require("dotenv").config();
import { fn as GetReasonCode } from "./GetReasonCode";
import chai, { expect } from "chai";
import { before } from "mocha";

chai.use(require("chai-like"));
chai.use(require("chai-things"));

let result;

describe("GetReasonCode", () => {
  before(async () => {
    result = await GetReasonCode({
      apiKey: process.env.OPENLDBSV_API_KEY!,
      args: {
        reasonCode: 100,
      },
    });
    console.log({ result });
  });
  it("Should be an object", async () => {
    expect(result).to.be.an("object");
  });
  it("Should contain properties code, cancReason and lateReason", async () => {
    expect(result[0]).to.be.an("object");
    expect(result[0]).to.have.property("code");
    expect(result[0]).to.have.property("cancReason");
    expect(result[0]).to.have.property("lateReason");
  });
});
