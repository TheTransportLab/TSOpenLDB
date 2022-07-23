export interface GetArrivalBoardByCRSAsync {
  generatedAt: GeneratedAt;
  locationName: string;
  crs: string;
  stationManager: string;
  stationManagerCode: string;
  nrccMessages: NrccMessages;
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
  rsid: string;
  sdd: GeneratedAt;
  operator: string;
  operatorCode: string;
  isCancelled: boolean;
  sta: string;
  std: string;
  platform: string;
  platformIsHidden: boolean;
  origin: Service3Origin;
  destination: Service3Origin;
  cancelReason: Service3CancelReason;
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
}

interface Service3CancelReason {
  attributes: CancelReasonAttributes;
  $value: string;
}

interface CancelReasonAttributes {
  tiploc: string;
}
