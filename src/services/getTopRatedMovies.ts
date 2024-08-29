import { api } from './api';

export const getTopRatedMovies = async () => {
  const result = await api.get('/movie/top_rated');
  const data = await result.data;
  return data;
};
