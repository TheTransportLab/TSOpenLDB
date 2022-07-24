export interface GetArrivalBoardByTIPLOCAsync {
  generatedAt: GeneratedAt;
  locationName: string;
  crs: string;
  filterLocationName: null;
  filtercrs: null;
  stationManager: string;
  stationManagerCode: string;
  isTruncated: boolean;
  trainServices: TrainServices;
}

interface GeneratedAt {
}

interface TrainServices {
  service: Array<Service1 | Service4>;
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
  platform: string;
  platformIsHidden: boolean;
  serviceIsSupressed: boolean;
  origin: Service1Origin;
  destination: Service1Origin;
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
}

interface Service4 {
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
  platformIsHidden: boolean;
  serviceIsSupressed: boolean;
  origin: Service1Origin;
  destination: Service1Origin;
  delayReason: Service4DelayReason;
  category: string;
  activities: string;
}

interface Service4DelayReason {
  attributes: DelayReasonAttributes;
  $value: string;
}

interface DelayReasonAttributes {
  tiploc: string;
}
