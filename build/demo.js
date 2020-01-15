"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importStar(require("./src/index"));
const LDB = new index_1.default({ apiKey: "ABCDE" });
const data = LDB.getDepartureBoardByCRS({ crs: "LDS", numRows: 150, time: new Date() });
console.log(data);
//# sourceMappingURL=demo.js.map