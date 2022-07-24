export interface GetFastestDeparturesAsyncArgs {
    crs: string;
    filterList: Array<FilterList>;
    time: string;
    timeOffset: number;
    timeWindow: number;
}
interface FilterList {
    crs: string;
}
export {};
