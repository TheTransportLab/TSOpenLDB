export interface GetFastestDeparturesWithDetailsAsync {
  generatedAt: GeneratedAt;
  locationName: string;
  crs: string;
  stationManager: string;
  stationManagerCode: string;
  departures: Departures;
}

interface GeneratedAt {
}

interface Departures {
  destination: Array<Destination1>;
}

interface Destination1 {
  attributes: Destination1Attributes;
  service: Destination1Service;
}

interface Destination1Attributes {
  crs: string;
}

interface Destination1Service {
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
  origin: ServiceOrigin;
  destination: ServiceOrigin;
  category: string;
  activities: string;
  length: string;
  subsequentLocations: ServiceSubsequentLocations;
}

interface ServiceOrigin {
  location: Array<Location2>;
}

interface Location2 {
  locationName: string;
  crs: string;
  tiploc: string;
}

interface ServiceSubsequentLocations {
  location: Array<Location4 | Location5 | Location6 | Location7>;
}

interface Location4 {
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

interface Location7 {
  locationName: string;
  tiploc: string;
  crs: string;
  platform: string;
  sta: string;
  ata: string;
  arrivalType: string;
  arrivalSource: string;
  lateness: string;
  associations: Location7Associations;
}

interface Location7Associations {
  association: Array<Association7>;
}

interface Association7 {
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
