import axios from 'axios';
// @ts-ignore
const API_BASEPATH = process.env.CONFIG.API_BASEPATH || 'alt-url';

export const allLots = async (params) => {
  const response = await axios
    .get(`${API_BASEPATH}/filterAuctions`, { params: params })
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error('Error fetching:', error));
  return response?.auctions ? response : [];
};
