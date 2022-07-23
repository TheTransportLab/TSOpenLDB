export interface QueryServicesAsyncArgs {
    serviceID: string;
    sdd: string;
    /**
     * @example "08:00:00+01:00"
     */
    filterTime: string;
    filtercrs: string;
    tocFilter: string;
}
