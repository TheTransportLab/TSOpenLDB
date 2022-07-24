require("dotenv").config();
import { getLondonTimeViaTemporal, TSOpenLDBSV } from "../index";
const apiKey = process.env.OPENLDBSV_API_KEY;

const RunFn = async () => {
  const LDB = new TSOpenLDBSV({ apiKey });
  const data = await LDB.GetArrivalDepartureBoardByCRS({
    crs: "LDS",
    time: getLondonTimeViaTemporal(-10),
  });
  console.log({ data });
};

RunFn();
