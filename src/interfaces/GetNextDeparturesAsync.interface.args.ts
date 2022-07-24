import { TFilterType } from '@Constants';

 export interface GetNextDeparturesAsyncArgs {
  crs: string;
  filterList: Array<FilterList>;
  time: string;
  timeOffset: number;
  timeWindow: number;
  filterTOC: string;
  services: string;
}

interface FilterList {
  crs: string;
}
