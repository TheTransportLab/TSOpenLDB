export interface GetArrivalBoardByCRSAsyncArgs {
    numRows: number;
    crs: string;
    time: string;
    timeWindow: number;
    filtercrs: string;
    filterType: string;
    filterTOC: string;
    services: string;
    getNonPassengerServices: boolean;
}
