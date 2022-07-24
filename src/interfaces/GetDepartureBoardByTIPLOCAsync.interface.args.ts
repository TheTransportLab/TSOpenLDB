import { TFilterType } from '@Constants';

 export interface GetDepartureBoardByTIPLOCAsyncArgs {
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
