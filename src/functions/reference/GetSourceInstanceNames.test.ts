require("dotenv").config();
import { fn as GetSourceInstanceNames } from "./GetSourceInstanceNames";
import chai, { expect } from "chai";
import { before } from "mocha";

chai.use(require("chai-like"));
chai.use(require("chai-things"));

let result;

describe("GetSourceInstanceNames", () => {
  before(async () => {
    result = await GetSourceInstanceNames({
      // @ts-ignore
      apiKey: process.env.OPENLDBSV_API_KEY!,
      args: {},
    });
  });
  it("Should be an array", async () => {
    expect(result).to.be.an("array");
    // expect(true).to.be.true;
  });
  it("Should contain properties id and name", async () => {
    expect(result[0]).to.be.an("object");
    expect(result[0]).to.have.property("id");
    expect(result[0]).to.have.property("name");
  });
});
