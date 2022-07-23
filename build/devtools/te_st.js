"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const index_1 = require("../index");
const apiKey = process.env.OPENLDBSV_API_KEY;
const test = async () => {
    const data = await (0, index_1.GetArrivalDepartureBoardByCRS)({
        apiKey,
        args: {
            crs: "LDS",
        },
    });
    console.log({ data });
};
test();
