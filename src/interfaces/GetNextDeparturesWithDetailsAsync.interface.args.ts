import { TFilterType } from '@Constants';

 export interface GetNextDeparturesWithDetailsAsyncArgs {
  crs: string;
  filterList: Array<FilterList>;
  time: string;
  timeOffset: number;
  timeWindow: number;
  filterTOC: string;
}

interface FilterList {
  crs: string;
}
