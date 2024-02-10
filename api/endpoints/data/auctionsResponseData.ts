import { getRandom } from '../../../utils';

const auctionsResponseData = {
  auctions: [
    {
      title: 'Kia Rio',
      id: 0,
      imgUrl: '/images/car-1.jpg',
    },
    {
      title: 'Nissan Serena',
      id: 1,
      imgUrl: '/images/car-2.jpg',
    },
    {
      title: 'Ford Focus',
      id: 2,
      imgUrl: '/images/car-3.jpg',
    },
    {
      title: 'ВАЗ ОКА',
      id: 3,
      imgUrl: '/images/car-4.jpg',
    },
    {
      title: 'Ferrari Testarossa',
      id: 4,
      imgUrl: '/images/car-5.jpg',
    },
    {
      title: 'Москвич 412',
      id: 5,
      imgUrl: '/images/car-6.jpg',
    },
    {
      title: 'ВАЗ 2101',
      id: 6,
      imgUrl: '/images/car-7.jpg',
    },
    {
      title: 'Ford Mustang',
      id: 7,
      imgUrl: '/images/car-8.jpg',
    },
    {
      title: 'Toyota Land Cruizer',
      id: 8,
      imgUrl: '/images/car-9.jpg',
    },
  ].map((auction) => ({
    ...auction,
    finishTime: new Date().getTime() + 1000 * 60 * getRandom(10),
    bid: 0,
    // mileage: undefined,
  })),
};

type AuctionsResponseData = typeof auctionsResponseData;

export {
  auctionsResponseData,
};

export type {
  AuctionsResponseData,
};
