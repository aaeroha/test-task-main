import axios from 'axios';
// @ts-ignore
const API_BASEPATH = process.env.CONFIG.API_BASEPATH || 'alt-url';

export const lotsById = async (id: string) => {
  const response = await axios
    .get(`${API_BASEPATH}/auction/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error('Error fetching:', error));
  return response?.auction ? response : null;
};
