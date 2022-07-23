require("dotenv").config();
import { fn as GetTOCList } from "./GetTOCList";
import chai, { expect } from "chai";
import { before } from "mocha";

chai.use(require("chai-like"));
chai.use(require("chai-things"));

let result;

describe("GetTOCList", () => {
  before(async () => {
    result = await GetTOCList({
      // @ts-ignore
      apiKey: process.env.OPENLDBSV_API_KEY!,
      args: {},
    });
    // console.log(result?.TOCList.TOC);
  });
  it("Should contain properties version and TOCList", async () => {
    expect(result).to.be.an("object");
    expect(result).to.have.property("version");
    expect(result).to.have.property("TOCList");
  });
  it("Should contain TOCList.TOC, and TOCList.TOC should be an array", async () => {
    expect(result.TOCList).to.be.an("object");
    expect(result.TOCList).to.have.property("TOC");
    expect(result.TOCList.TOC).to.be.an("array");
  });
  it("Should contain TOCList.TOC[0] with properties attributes.toc and $value", async () => {
    expect(result.TOCList.TOC[0]).to.be.an("object");
    expect(result.TOCList.TOC[0]).to.have.property("$value");
    expect(result.TOCList.TOC[0]).to.have.property("attributes");
    expect(result.TOCList.TOC[0].attributes).to.be.an("object");
    expect(result.TOCList.TOC[0].attributes).to.have.property("toc");
  });
});
