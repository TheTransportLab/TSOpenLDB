require("dotenv").config();
import chai, { expect } from "chai";
import { before } from "mocha";
import { fn as GetServiceDetailsByRID } from "./GetServiceDetailsByRID";

chai.use(require("chai-like"));
chai.use(require("chai-things"));

let result;

const serviceRid = "202207217636931";

describe("GetServiceDetailsByRID", () => {
  before(async () => {
    result = await GetServiceDetailsByRID({
      // @ts-ignore - Why the fuck is this broken? It IS fucking defined in the fucking interface, dipshit
      apiKey: process.env.OPENLDBSV_API_KEY!,
      args: {
        rid: serviceRid,
      },
    });
    // console.log(result?.locations?.location[0]);
  });
  // it("Should be an array", async () => {
  //   // expect(result).to.be.an("array");
  //   expect(true).to.be.true;
  // });
  it("Should contain correct properties", async () => {
    expect(result).to.be.an("object");
    expect(result).to.have.property("generatedAt");
    expect(result).to.have.property("rid");
    expect(result).to.have.property("uid");
    expect(result).to.have.property("trainid");
    expect(result).to.have.property("sdd");
    expect(result).to.have.property("operator");
    expect(result).to.have.property("operatorCode");
    expect(result).to.have.property("serviceType");
    expect(result).to.have.property("cancelReason");
    expect(result).to.have.property("category");
    expect(result).to.have.property("locations");
  });
  it("locations to contain a location property, which should be an array", async () => {
    expect(result?.locations).to.be.an("object");
    expect(result?.locations).to.have.property("location");
    expect(result?.locations.location).to.be.an("array");
  });
  it("locations.location[0] should contain correct properties", async () => {
    expect(result?.locations.location[0]).to.be.an("object");
    expect(result?.locations.location[0]).to.have.property("std");
    expect(result?.locations.location[0]).to.have.property("departureSource");
    expect(result?.locations.location[0]).to.have.property("locationName");
    expect(result?.locations.location[0]).to.have.property("tiploc");
    expect(result?.locations.location[0]).to.have.property("crs");
  });
});
