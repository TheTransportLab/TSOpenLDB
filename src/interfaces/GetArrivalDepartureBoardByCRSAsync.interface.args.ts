import { TFilterType } from '@Constants';

 export interface GetArrivalDepartureBoardByCRSAsyncArgs {
  numRows: number;
  crs: string;
  time: string;
  timeWindow: number;
  filtercrs: string;
  filterType: TFilterType;
  filterTOC: string;
  services: string;
  getNonPassengerServices: boolean;
}
