require("dotenv").config();
import { GetArrivalDepartureBoardByCRS } from "../index";
const apiKey = process.env.OPENLDBSV_API_KEY;

const test = async () => {
  const data = await GetArrivalDepartureBoardByCRS({
    apiKey,
    args: {
      crs: "LDS",
    },
  });
  console.log({ data });
};

test();
