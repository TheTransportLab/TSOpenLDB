import { TFilterType } from '@Constants';

 export interface GetArrDepBoardWithDetailsAsyncArgs {
  numRows: number;
  crs: string;
  filtercrs: string;
  filterType: TFilterType;
  filterTOC: Array<any>;
  timeOffset: number;
  timeWindow: number;
  time: string;
}
