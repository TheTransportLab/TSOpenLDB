export interface GetFastestDeparturesAsync {
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
}

interface ServiceOrigin {
  location: Array<Location2>;
}

interface Location2 {
  locationName: string;
  crs: string;
  tiploc: string;
}
