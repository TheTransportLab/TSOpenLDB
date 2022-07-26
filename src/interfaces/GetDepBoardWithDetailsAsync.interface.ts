export interface GetDepBoardWithDetailsAsync {
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
  service: Array<Service1 | Service11>;
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
  subsequentLocations: Service1SubsequentLocations;
}

interface Service1Origin {
  location: Array<Location1>;
}

interface Location1 {
  locationName: string;
  crs: string;
  tiploc: string;
}

interface Service1SubsequentLocations {
  location: Array<Location3 | Location4 | Location5 | Location6>;
}

interface Location3 {
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

interface Location4 {
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
  departureSourceInstance: string;
  lateness: string;
}

interface Location6 {
  locationName: string;
  tiploc: string;
  crs: string;
  platform: string;
  sta: string;
  ata: string;
  arrivalType: string;
  arrivalSource: string;
  lateness: string;
  associations: Location6Associations;
}

interface Location6Associations {
  association: Array<Association6>;
}

interface Association6 {
  category: string;
  rid: string;
  uid: string;
  trainid: string;
  sdd: GeneratedAt;
  origin: string;
  originCRS: string;
  originTiploc: string;
  destination: string;
  destTiploc: string;
}

interface Service11 {
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
  cancelReason: Service11CancelReason;
  category: string;
  activities: string;
  subsequentLocations: Service11SubsequentLocations;
}

interface Service11CancelReason {
  attributes: CancelReasonAttributes;
  $value: string;
}

interface CancelReasonAttributes {
  tiploc: string;
}

interface Service11SubsequentLocations {
  location: Array<Location13 | Location14 | Location15 | Location16>;
}

interface Location13 {
  locationName: string;
  tiploc: string;
  isPass: boolean;
  isCancelled: boolean;
  platformIsHidden: boolean;
  std: string;
  etd: string;
  departureSource: string;
}

interface Location14 {
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

interface Location15 {
  locationName: string;
  tiploc: string;
  crs: string;
  isCancelled: boolean;
  platform: string;
  platformIsHidden: boolean;
  sta: string;
  eta: string;
  arrivalSource: string;
  std: string;
  etd: string;
  departureSource: string;
}

interface Location16 {
  locationName: string;
  tiploc: string;
  crs: string;
  isCancelled: boolean;
  platform: string;
  platformIsHidden: boolean;
  sta: string;
  eta: string;
  arrivalSource: string;
}
