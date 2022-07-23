export interface GetServiceDetailsByRIDAsync {
    generatedAt: GeneratedAt;
    rid: string;
    uid: string;
    trainid: string;
    sdd: GeneratedAt;
    operator: string;
    operatorCode: string;
    serviceType: string;
    cancelReason: CancelReason;
    category: string;
    locations: Locations;
}
interface GeneratedAt {
}
interface CancelReason {
    attributes: CancelReasonAttributes;
    $value: string;
}
interface CancelReasonAttributes {
    tiploc: string;
}
interface Locations {
    location: Array<Location3 | Location4 | Location5 | Location6 | Location7 | Location8>;
}
interface Location3 {
    isCancelled: boolean;
    platform: string;
    platformIsHidden: boolean;
    std: string;
    etd: string;
    departureSource: string;
    locationName: string;
    tiploc: string;
    crs: string;
    activities: string;
}
interface Location4 {
    isPass: boolean;
    isCancelled: boolean;
    platformIsHidden: boolean;
    std: string;
    etd: string;
    departureSource: string;
    locationName: string;
    tiploc: string;
    activities: null;
}
interface Location5 {
    isPass: boolean;
    isCancelled: boolean;
    platformIsHidden: boolean;
    std: string;
    etd: string;
    departureSource: string;
    locationName: string;
    tiploc: string;
    crs: string;
    activities: null;
}
interface Location6 {
    isCancelled: boolean;
    platform: string;
    platformIsHidden: boolean;
    sta: string;
    eta: string;
    arrivalSource: string;
    std: string;
    etd: string;
    departureSource: string;
    locationName: string;
    tiploc: string;
    crs: string;
    activities: string;
}
interface Location7 {
    isPass: boolean;
    isCancelled: boolean;
    platformIsHidden: boolean;
    std: string;
    etd: string;
    departureSource: string;
    locationName: string;
    tiploc: string;
    activities: string;
}
interface Location8 {
    isCancelled: boolean;
    platform: string;
    platformIsHidden: boolean;
    sta: string;
    eta: string;
    arrivalSource: string;
    locationName: string;
    tiploc: string;
    crs: string;
    activities: string;
}
export {};
