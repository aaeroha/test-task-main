import type { Request } from 'express';
import {
  auctionsResponseData,
  type AuctionsResponseData,
} from './data';
import { getRandom } from '../../utils';

const { auctions } = auctionsResponseData;

type AuctionResponseData = {
  auction: AuctionsResponseData['auctions'][number] & {
    mileage: number
  } | null
};

type GetAuctionByIdParams = { auctionId?: string };

type FilterAuctionsParams = { search?: string };

/**
 * Возвращает список аукцонов с фильтрацией по qs 'search'
 * @param req - request
 * @returns
 */
const filterAuctions = (req: Request<FilterAuctionsParams>) => {
  const search = (typeof req.query.search === 'string' ? req.query.search : '')
    .trim()
    .toLowerCase();

  auctions.forEach((auction) => {
    // eslint-disable-next-line no-param-reassign
    auction.bid = (getRandom(10) <= 7)
      ? auction.bid
      : auction.bid + getRandom(10) * 100;
  });

  return {
    auctions: search
      ? auctions.filter(({ title }) => !(title.toLowerCase().indexOf(search) < 0))
      : auctions,
  };
};

/**
 * Возвращает один аукцион по id
 * дополняя его информацией о пробеге авто
 * @param req - запрос, должен содержать auctionId
 * @returns
 */
const getAuctionById = (req: Request<GetAuctionByIdParams>) => {
  const { auctionId } = req.params;

  const auction = auctionId && auctions.find(({ id }) => (auctionId === String(id)));

  return {
    auction: auction
      ? {
        mileage: getRandom(100) * 1000,
        ...auction,
      } : null,
  } satisfies AuctionResponseData;
};

const endpoints = [
  { path: '/api/filterAuctions', controller: filterAuctions, method: 'get' },
  { path: '/api/auction/:auctionId', controller: getAuctionById, method: 'get' },
];

export {
  endpoints,
};

export type {
  AuctionResponseData,
  AuctionsResponseData,
  FilterAuctionsParams,
  GetAuctionByIdParams,
};
