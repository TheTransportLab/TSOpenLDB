import { TFilterType } from '@Constants';

 export interface GetDisruptionListAsyncArgs {
  CRSList: Array<CRSList>;
}

interface CRSList {
  crs: string;
}
