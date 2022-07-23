export interface GetReasonCodeListAsync {
  reason: Array<Reason>;
}

interface Reason {
  code: string;
  lateReason: string;
  cancReason: string;
}
