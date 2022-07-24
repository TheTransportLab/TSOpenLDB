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
}

interface Destination1Attributes {
  crs: string;
}
