import { TFilterType } from '@Constants';
export interface GetArrivalBoardByTIPLOCAsyncArgs {
    numRows: number;
    tiploc: string;
    time: string;
    timeWindow: number;
    filterTiploc: string;
    filterType: TFilterType;
    filterTOC: string;
    services: string;
    getNonPassengerServices: boolean;
}
