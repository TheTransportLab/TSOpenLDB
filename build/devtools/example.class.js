"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const index_1 = require("../index");
const apiKey = process.env.OPENLDBSV_API_KEY;
const RunFn = async () => {
    const LDB = new index_1.TSOpenLDBSV({ apiKey });
    const data = await LDB.GetArrivalDepartureBoardByCRS({
        crs: "LDS",
        time: (0, index_1.getLondonTimeViaTemporal)(-10),
    });
    console.log({ data });
};
RunFn();
