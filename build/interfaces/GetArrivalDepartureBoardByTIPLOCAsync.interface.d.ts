export interface GetArrivalDepartureBoardByTIPLOCAsync {
    generatedAt: GeneratedAt;
    locationName: string;
    crs: string;
    stationManager: string;
    stationManagerCode: string;
    isTruncated: boolean;
    trainServices: TrainServices;
}
interface GeneratedAt {
}
interface TrainServices {
    service: Array<Service1 | Service6>;
}
interface Service1 {
    rid: string;
    uid: string;
    trainid: string;
    sdd: GeneratedAt;
    operator: string;
    operatorCode: string;
    isPassengerService: boolean;
    isOperationalCall: boolean;
    std: string;
    departureType: string;
    platformIsHidden: boolean;
    origin: Service1Origin;
    destination: Service1Destination;
    category: string;
    activities: string;
}
interface Service1Origin {
    location: Array<Location1>;
}
interface Location1 {
    locationName: string;
    crs: string;
    tiploc: string;
    isOperationalEndPoint: boolean;
}
interface Service1Destination {
    location: Array<Location3>;
}
interface Location3 {
    locationName: string;
    tiploc: string;
    isOperationalEndPoint: boolean;
}
interface Service6 {
    rid: string;
    uid: string;
    trainid: string;
    rsid: string;
    sdd: GeneratedAt;
    operator: string;
    operatorCode: string;
    sta: string;
    ata: string;
    arrivalType: string;
    platform: string;
    platformIsHidden: boolean;
    serviceIsSupressed: boolean;
    origin: Service6Origin;
    destination: Service6Origin;
    category: string;
    activities: string;
}
interface Service6Origin {
    location: Array<Location6>;
}
interface Location6 {
    locationName: string;
    crs: string;
    tiploc: string;
}
export {};
