export interface GetStationListAsync {
  version: string;
  StationList: StationList;
}

interface StationList {
  Station: Array<Station>;
}

interface Station {
  attributes: StationAttributes;
  $value: string;
}

interface StationAttributes {
  crs: string;
}
