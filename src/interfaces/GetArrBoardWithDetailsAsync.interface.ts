export interface GetArrBoardWithDetailsAsync {
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
  service: Array<Service1 | Service12>;
}

interface Service1 {
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
  std: string;
  atd: string;
  departureType: string;
  departureSource: string;
  platform: string;
  origin: Service1Origin;
  destination: Service1Origin;
  category: string;
  activities: string;
  length: string;
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

interface Service1PreviousLocations {
  location: Array<Location3 | Location4 | Location5 | Location6 | Location7 | Location8 | Location9>;
}

interface Location3 {
  locationName: string;
  tiploc: string;
  crs: string;
  platform: string;
  std: string;
  atd: string;
  departureType: string;
  departureSource: string;
  lateness: string;
}

interface Location4 {
  locationName: string;
  tiploc: string;
  isPass: boolean;
  platformIsHidden: boolean;
  std: string;
  departureType: string;
}

interface Location5 {
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

interface Location6 {
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

interface Location7 {
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

interface Location8 {
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

interface Location9 {
  locationName: string;
  tiploc: string;
  crs: string;
  isPass: boolean;
  platformIsHidden: boolean;
  std: string;
  atd: string;
  departureType: string;
  departureSource: string;
  departureSourceInstance: string;
  lateness: string;
}

interface Service12 {
  rid: string;
  uid: string;
  trainid: string;
  rsid: string;
  sdd: GeneratedAt;
  operator: string;
  operatorCode: string;
  isCancelled: boolean;
  sta: string;
  std: string;
  platform: string;
  platformIsHidden: boolean;
  origin: Service1Origin;
  destination: Service1Origin;
  cancelReason: Service12CancelReason;
  category: string;
  activities: string;
  previousLocations: Service12PreviousLocations;
}

interface Service12CancelReason {
  attributes: CancelReasonAttributes;
  $value: string;
}

interface CancelReasonAttributes {
  tiploc: string;
}

interface Service12PreviousLocations {
  location: Array<Location14 | Location15 | Location16>;
}

interface Location14 {
  locationName: string;
  tiploc: string;
  crs: string;
  isCancelled: boolean;
  platform: string;
  platformIsHidden: boolean;
  std: string;
  etd: string;
  departureSource: string;
}

interface Location15 {
  locationName: string;
  tiploc: string;
  isPass: boolean;
  isCancelled: boolean;
  platformIsHidden: boolean;
  std: string;
  etd: string;
  departureSource: string;
}

interface Location16 {
  locationName: string;
  tiploc: string;
  crs: string;
  isPass: boolean;
  isCancelled: boolean;
  platformIsHidden: boolean;
  std: string;
  etd: string;
  departureSource: string;
}
