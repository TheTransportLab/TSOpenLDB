require("dotenv").config();
import chai, { expect } from "chai";
import { before } from "mocha";
import { fn as GetArrDepBoardWithDetails } from "./GetArrDepBoardWithDetails";

chai.use(require("chai-like"));
chai.use(require("chai-things"));

let result;

describe("GetArrDepBoardWithDetails", () => {
  before(async () => {
    result = await GetArrDepBoardWithDetails({
      // @ts-ignore
      apiKey: process.env.OPENLDBSV_API_KEY!,
      args: {
        crs: "LDS",
      },
    });
    // console.log(result);
  });
  // it("Should be an array", async () => {
  //   // expect(result).to.be.an("array");
  //   expect(true).to.be.true;
  // });
  it("Should contain correct properties", async () => {
    expect(result).to.be.an("object");
    expect(result).to.have.property("generatedAt");
    expect(result).to.have.property("locationName");
    expect(result).to.have.property("crs");
    expect(result).to.have.property("stationManager");
    expect(result).to.have.property("stationManagerCode");
    expect(result).to.have.property("trainServices");
  });
  it("trainServices to contain a services property, which should be an array", async () => {
    expect(result?.trainServices).to.be.an("object");
    expect(result?.trainServices).to.have.property("service");
    expect(result?.trainServices.service).to.be.an("array");
  });
  it("trainServices.services[0] should contain correct properties", async () => {
    expect(result?.trainServices.service[0]).to.be.an("object");
    expect(result?.trainServices.service[0]).to.have.property("rid");
    expect(result?.trainServices.service[0]).to.have.property("uid");
    expect(result?.trainServices.service[0]).to.have.property("trainid");
    expect(result?.trainServices.service[0]).to.have.property("sdd");
    expect(result?.trainServices.service[0]).to.have.property("operator");
    expect(result?.trainServices.service[0]).to.have.property("operatorCode");
    expect(result?.trainServices.service[0]).to.have.property("sta");
    expect(result?.trainServices.service[0]).to.have.property("origin");
    expect(result?.trainServices.service[0]).to.have.property("destination");
    expect(result?.trainServices.service[0]).to.have.property("category");
    expect(result?.trainServices.service[0]).to.have.property("activities");
  });
});
