export type AuctionItem = {
  finishTime: number;
  bid: number;
  title: string;
  id: number;
  imgUrl: string;
  mileage: number;
};

export type State = {
  auctions: { data: AuctionItem[]; isLoading: boolean; isInit: boolean };
  auction: { data: AuctionItem | null; isLoading: boolean; isInit: boolean };
};
