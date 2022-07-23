require("dotenv").config();
import { fn as GetReasonCodeList } from "./GetReasonCodeList";
import chai, { expect } from "chai";
import { before } from "mocha";

chai.use(require("chai-like"));
chai.use(require("chai-things"));

let result;

describe("GetReasonCodeList", () => {
  before(async () => {
    result = await GetReasonCodeList({
      // @ts-ignore - Why the fuck is this broken? It IS fucking defined in the fucking interface, dipshit
      apiKey: process.env.OPENLDBSV_API_KEY!,
      args: {},
    });
  });
  it("Should be an array", async () => {
    expect(result).to.be.an("array");
  });
  it("Should contain properties code, cancReason and lateReason", async () => {
    expect(result[0]).to.be.an("object");
    expect(result[0]).to.have.property("code");
    expect(result[0]).to.have.property("cancReason");
    expect(result[0]).to.have.property("lateReason");
  });
});
