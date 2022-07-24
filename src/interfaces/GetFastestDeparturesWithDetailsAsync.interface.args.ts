import { TFilterType } from '@Constants';

 export interface GetFastestDeparturesWithDetailsAsyncArgs {
  crs: string;
  filterList: Array<FilterList>;
  time: string;
  timeOffset: number;
  timeWindow: number;
}

interface FilterList {
  crs: string;
}
