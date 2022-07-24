require("dotenv").config();
import {
  GetArrivalDepartureBoardByCRS,
  getLondonTimeViaTemporal,
} from "../index";
const apiKey = process.env.OPENLDBSV_API_KEY;

const RunFn = async () => {
  const data = await GetArrivalDepartureBoardByCRS({
    apiKey,
    args: {
      crs: "LDS",
      time: getLondonTimeViaTemporal(-10),
    },
  });
  console.log({ data });
};

RunFn();
