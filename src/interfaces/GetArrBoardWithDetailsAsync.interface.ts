export interface GetArrBoardWithDetailsAsync {
  generatedAt: GeneratedAt;
  locationName: string;
  crs: string;
  stationManager: string;
  stationManagerCode: string;
  trainServices: TrainServices;
}

interface GeneratedAt {
}

interface TrainServices {
  service: Array<Service1>;
}

interface Service1 {
  rid: string;
  uid: string;
  trainid: string;
  sdd: GeneratedAt;
  operator: string;
  operatorCode: string;
  sta: string;
  ata: string;
  arrivalType: string;
  platform: string;
  origin: Service1Origin;
  destination: Service1Origin;
  cancelReason: Service1CancelReason;
  delayReason: Service1CancelReason;
  category: string;
  activities: string;
  previousLocations: Service1PreviousLocations;
}

interface Service1Origin {
  location: Array<Location1>;
}

interface Location1 {
  locationName: string;
  crs: string;
  tiploc: string;
}

interface Service1CancelReason {
  attributes: CancelReasonAttributes;
  $value: string;
}

interface CancelReasonAttributes {
  tiploc: string;
}

interface Service1PreviousLocations {
  location: Array<Location5 | Location8 | Location9 | Location10 | Location11 | Location12 | Location13 | Location14 | Location15>;
}

interface Location5 {
  locationName: string;
  tiploc: string;
  crs: string;
  platform: string;
  platformIsHidden: boolean;
  serviceIsSuppressed: boolean;
  std: string;
  atd: string;
  departureType: string;
  departureSource: string;
  departureSourceInstance: string;
  associations: Location5Associations;
}

interface Location5Associations {
  association: Array<Association5>;
}

interface Association5 {
  category: string;
  rid: string;
  uid: string;
  trainid: string;
  sdd: GeneratedAt;
  origin: string;
  originCRS: string;
  originTiploc: string;
  destination: string;
  destCRS: string;
  destTiploc: string;
}

interface Location8 {
  locationName: string;
  tiploc: string;
  isPass: boolean;
  platformIsHidden: boolean;
  std: string;
  atd: string;
  departureType: string;
  departureSource: string;
  lateness: string;
}

interface Location9 {
  locationName: string;
  tiploc: string;
  isPass: boolean;
  platformIsHidden: boolean;
  std: string;
  atd: string;
  departureType: string;
  departureSource: string;
  departureSourceInstance: string;
}

interface Location10 {
  locationName: string;
  tiploc: string;
  crs: string;
  isPass: boolean;
  platformIsHidden: boolean;
  std: string;
  atd: string;
  departureType: string;
  departureSource: string;
  lateness: string;
}

interface Location11 {
  locationName: string;
  tiploc: string;
  crs: string;
  isPass: boolean;
  platformIsHidden: boolean;
  std: string;
  departureType: string;
}

interface Location12 {
  locationName: string;
  tiploc: string;
  crs: string;
  isPass: boolean;
  isCancelled: boolean;
  platformIsHidden: boolean;
  std: string;
  atd: string;
  departureType: string;
  departureSource: string;
  departureSourceInstance: string;
  lateness: string;
}

interface Location13 {
  locationName: string;
  tiploc: string;
  crs: string;
  platform: string;
  sta: string;
  ata: string;
  arrivalType: string;
  arrivalSource: string;
  std: string;
  atd: string;
  departureType: string;
  departureSource: string;
  lateness: string;
}

interface Location14 {
  locationName: string;
  tiploc: string;
  isPass: boolean;
  platformIsHidden: boolean;
  std: string;
  atd: string;
  departureType: string;
  departureSource: string;
  departureSourceInstance: string;
  lateness: string;
}

interface Location15 {
  locationName: string;
  tiploc: string;
  isPass: boolean;
  platformIsHidden: boolean;
  std: string;
  departureType: string;
}
