export interface IArgsBase {
  apiKey: string;
}

export type TFilterType = "to" | "from";

export type TNonReferenceEndpoints =
  | "GetArrivalDepartureBoardByCRSAsync"
  | "GetArrivalBoardByCRSAsync"
  | "GetArrivalDepartureBoardByTIPLOCAsync"
  | "GetDepartureBoardByCRSAsync"
  | "GetArrivalBoardByTIPLOCAsync"
  | "GetDepartureBoardByTIPLOCAsync"
  | "GetServiceDetailsByRIDAsync"
  | "QueryServicesAsync"
  | "GetDisruptionListAsync"
  | "GetHistoricDepartureBoardAsync"
  | "GetHistoricServiceDetailsAsync"
  | "GetHistoricTimeLineAsync"
  | "QueryHistoricServicesAsync"
  | "GetArrDepBoardWithDetailsAsync"
  | "GetArrBoardWithDetailsAsync"
  | "GetDepBoardWithDetailsAsync"
  | "GetNextDeparturesAsync"
  | "GetFastestDeparturesAsync"
  | "GetNextDeparturesWithDetailsAsync"
  | "GetFastestDeparturesWithDetailsAsync";

export type TReferenceEndpoints =
  | "GetReasonCodeAsync"
  | "GetReasonCodeListAsync"
  | "GetSourceInstanceNamesAsync"
  | "GetTOCListAsync"
  | "GetStationListAsync";

interface IEndpointStructBase<T = any> {
  active?: boolean;
  args: Record<string, T>;
}

export interface TReferenceEndpointStruct extends IEndpointStructBase {
  name: TReferenceEndpoints;
}

export interface TNonReferenceEndpointStruct extends IEndpointStructBase {
  name: TNonReferenceEndpoints;
}

export const referenceEndpoints: TReferenceEndpointStruct[] = [
  {
    name: "GetReasonCodeAsync",
    args: {
      reasonCode: 501,
    },
  },
  {
    name: "GetReasonCodeListAsync",
    args: {},
  },
  {
    name: "GetSourceInstanceNamesAsync",
    args: {},
  },
  {
    name: "GetTOCListAsync",
    args: {
      currentVersion: "",
    },
  },
  {
    name: "GetStationListAsync",
    args: {
      currentVersion: "",
    },
  },
];

export const nonReferenceEndpoints: TNonReferenceEndpointStruct[] = [
  {
    name: "GetArrivalDepartureBoardByCRSAsync",
    args: {
      numRows: 2,
      crs: "LDS",
      time: "00:01:00",
      timeWindow: 120,
      filtercrs: "",
      filterType: "to" as TFilterType,
      filterTOC: "",
      services: "PBS",
      getNonPassengerServices: true,
    },
  },
  {
    name: "GetArrivalDepartureBoardByTIPLOCAsync",
    args: {
      numRows: 2,
      tiploc: "LEEDS",
      time: "00:01:00",
      timeWindow: 120,
      filterTiploc: "",
      filterType: "to" as TFilterType,
      filterTOC: "",
      services: "PBS",
      getNonPassengerServices: true,
    },
  },
  {
    name: "GetArrivalBoardByCRSAsync",
    args: {
      numRows: 2,
      crs: "LDS",
      time: "00:01:00",
      timeWindow: 120,
      filtercrs: "",
      filterType: "to" as TFilterType,
      filterTOC: "",
      services: "PBS",
      getNonPassengerServices: true,
    },
  },
  {
    name: "GetDepartureBoardByCRSAsync",
    args: {
      numRows: 2,
      crs: "LDS",
      time: "00:01:00",
      timeWindow: 120,
      filtercrs: "",
      filterType: "to" as TFilterType,
      filterTOC: "",
      services: "PBS",
      getNonPassengerServices: true,
    },
  },
  {
    name: "GetArrivalBoardByTIPLOCAsync",
    // active: false,
    args: {
      numRows: 2,
      tiploc: "LEEDS",
      time: "00:01:00",
      timeWindow: 120,
      filterTiploc: "",
      filterType: "to" as TFilterType,
      filterTOC: "",
      services: "PBS",
      getNonPassengerServices: true,
    },
  },
  {
    name: "GetDepartureBoardByTIPLOCAsync",
    // active: false,
    args: {
      numRows: 2,
      tiploc: "LEEDS",
      time: "00:01:00",
      timeWindow: 120,
      filterTiploc: "",
      filterType: "to" as TFilterType,
      filterTOC: "",
      services: "PBS",
      getNonPassengerServices: true,
    },
  },
  {
    name: "GetServiceDetailsByRIDAsync",
    // active: false,
    args: {
      rid: "202207218013572",
    },
  },
  {
    name: "QueryServicesAsync",
    // active: true,
    args: {
      serviceID: "1P03",
      sdd: new Date().toISOString().toString().slice(0, -14), //"2022-07-20",
      filterTime: "08:00:00+01:00",
      filtercrs: "",
      tocFilter: "",
    },
  },
  {
    name: "GetArrDepBoardWithDetailsAsync",
    args: {
      numRows: 2,
      crs: "LDS",
      filtercrs: "",
      filterType: "to" as TFilterType,
      filterTOC: [],
      timeOffset: 0,
      timeWindow: 120,
      time: new Date().toISOString().toString().slice(0, -5), //"2016-10-18T22:00:00",
    },
  },
  {
    name: "GetArrBoardWithDetailsAsync",
    args: {
      numRows: 2,
      crs: "LDS",
      filtercrs: "",
      filterType: "to" as TFilterType,
      filterTOC: [],
      timeOffset: 0,
      timeWindow: 120,
      time: new Date().toISOString().toString().slice(0, -5), //"2016-10-18T22:00:00",
    },
  },
  {
    name: "GetDepBoardWithDetailsAsync",
    args: {
      numRows: 2,
      crs: "LDS",
      filtercrs: "",
      filterType: "to" as TFilterType,
      filterTOC: [],
      timeOffset: 0,
      timeWindow: 120,
      time: new Date().toISOString().toString().slice(0, -5), //"2016-10-18T22:00:00",
    },
  },
  {
    name: "GetNextDeparturesAsync",
    args: {
      crs: "LDS",
      filterList: [
        {
          crs: "YRK",
        },
      ],
      time: new Date().toISOString().toString().slice(0, -5), //"2016-10-18T22:00:00",
      timeOffset: 0,
      timeWindow: 120,
      filterTOC: "",
      services: "P",
    },
  },
  {
    name: "GetFastestDeparturesAsync",
    args: {
      crs: "LDS",
      filterList: [
        {
          crs: "YRK",
        },
      ],
      time: new Date().toISOString().toString().slice(0, -5), //"2016-10-18T22:00:00",
      timeOffset: 0,
      timeWindow: 120,
    },
  },
  {
    name: "GetNextDeparturesWithDetailsAsync",
    args: {
      crs: "LDS",
      filterList: [
        {
          crs: "YRK",
        },
      ],
      time: new Date().toISOString().toString().slice(0, -5), //"2016-10-18T22:00:00",
      timeOffset: 0,
      timeWindow: 120,
      filterTOC: "",
    },
  },
  {
    name: "GetFastestDeparturesWithDetailsAsync",
    args: {
      crs: "LDS",
      filterList: [
        {
          crs: "YRK",
        },
      ],
      time: new Date().toISOString().toString().slice(0, -5), //"2016-10-18T22:00:00",
      timeOffset: 0,
      timeWindow: 120,
    },
  },
  {
    name: "GetDisruptionListAsync",
    args: {
      CRSList: [{ crs: "LDS" }],
    },
  },
  {
    name: "GetHistoricDepartureBoardAsync",
    active: false,
    args: {},
  },
  {
    name: "GetHistoricServiceDetailsAsync",
    active: false,
    args: {},
  },
  {
    name: "GetHistoricTimeLineAsync",
    active: false,
    args: {},
  },
  {
    name: "QueryHistoricServicesAsync",
    active: false,
    args: {},
  },
];
