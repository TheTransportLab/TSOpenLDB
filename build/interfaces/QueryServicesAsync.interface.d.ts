export interface QueryServicesAsync {
    scheduleStartDate: ScheduleStartDate;
    serviceList: ServiceList;
}
interface ScheduleStartDate {
}
interface ServiceList {
    service: Array<Service1>;
}
interface Service1 {
    rid: string;
    uid: string;
    trainid: string;
    rsid: null;
    originName: string;
    originCrs: string;
    destinationName: string;
    destinationCrs: string;
    scheduledDeparture: ScheduleStartDate;
    scheduledArrival: ScheduleStartDate;
}
export {};
