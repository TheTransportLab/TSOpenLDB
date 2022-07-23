export interface GetDepartureBoardByTIPLOCAsync {
    generatedAt: GeneratedAt;
    locationName: string;
    crs: string;
    stationManager: string;
    stationManagerCode: string;
    nrccMessages: NrccMessages;
    isTruncated: boolean;
    trainServices: TrainServices;
}
interface GeneratedAt {
}
interface NrccMessages {
    message: Array<Message1>;
}
interface Message1 {
    category: string;
    severity: string;
    xhtmlMessage: string;
}
interface TrainServices {
    service: Array<Service3>;
}
interface Service3 {
    rid: string;
    uid: string;
    trainid: string;
    sdd: GeneratedAt;
    operator: string;
    operatorCode: string;
    isPassengerService: boolean;
    isOperationalCall: boolean;
    std: string;
    atd: string;
    departureType: string;
    departureSource: string;
    platform: string;
    platformIsHidden: boolean;
    origin: Service3Origin;
    destination: Service3Destination;
    category: string;
    activities: string;
}
interface Service3Origin {
    location: Array<Location3>;
}
interface Location3 {
    locationName: string;
    crs: string;
    tiploc: string;
    isOperationalEndPoint: boolean;
}
interface Service3Destination {
    location: Array<Location5>;
}
interface Location5 {
    locationName: string;
    tiploc: string;
    isOperationalEndPoint: boolean;
}
export {};
