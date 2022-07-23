export interface GetArrivalBoardByTIPLOCAsyncArgs {
    numRows: number;
    tiploc: string;
    time: string;
    timeWindow: number;
    filterTiploc: string;
    filterType: string;
    filterTOC: string;
    services: string;
    getNonPassengerServices: boolean;
}
