require("dotenv").config();
import chai, { expect } from "chai";
import { before } from "mocha";
import { fn as GetNextDepartures } from "./GetNextDepartures";

chai.use(require("chai-like"));
chai.use(require("chai-things"));

let result;

describe("GetNextDepartures", () => {
  before(async () => {
    result = await GetNextDepartures({
      // @ts-ignore
      apiKey: process.env.OPENLDBSV_API_KEY!,
      args: {
        crs: "LDS",
        filterList: [
          {
            crs: "YRK",
          },
        ],
      },
    });
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
    expect(result).to.have.property("departures");
  });
  it("departures to contain a destination property, which should be an array", async () => {
    expect(result?.departures).to.be.an("object");
    expect(result?.departures).to.have.property("destination");
    expect(result?.departures.destination).to.be.an("array");
  });
  // it("trainServices.services[0] should contain correct properties", async () => {
  //   expect(result?.trainServices.service[0]).to.be.an("object");
  //   expect(result?.trainServices.service[0]).to.have.property("rid");
  //   expect(result?.trainServices.service[0]).to.have.property("uid");
  //   expect(result?.trainServices.service[0]).to.have.property("trainid");
  //   expect(result?.trainServices.service[0]).to.have.property("sdd");
  //   expect(result?.trainServices.service[0]).to.have.property("operator");
  //   expect(result?.trainServices.service[0]).to.have.property("operatorCode");
  //   expect(result?.trainServices.service[0]).to.have.property("std");
  //   expect(result?.trainServices.service[0]).to.have.property("origin");
  //   expect(result?.trainServices.service[0]).to.have.property("destination");
  //   expect(result?.trainServices.service[0]).to.have.property("category");
  //   expect(result?.trainServices.service[0]).to.have.property("activities");
  // });
});
