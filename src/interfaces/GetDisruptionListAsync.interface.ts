export interface GetDisruptionListAsync {
  item: Array<Item>;
}

interface Item {
  generatedAt: ItemGeneratedAt;
  crs: string;
  disruptions: ItemDisruptions;
}

interface ItemGeneratedAt {
}

interface ItemDisruptions {
  message: Array<Message1>;
}

interface Message1 {
  id: number;
  category: string;
  severity: string;
  xhtmlMessage: string;
  description: string;
}
