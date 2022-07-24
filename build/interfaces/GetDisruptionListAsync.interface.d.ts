export interface GetDisruptionListAsync {
    item: Array<Item>;
}
interface Item {
    generatedAt: ItemGeneratedAt;
    crs: string;
    disruptions: null;
}
interface ItemGeneratedAt {
}
export {};
