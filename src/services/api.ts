import axios from 'axios';

export const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  originalImage: (imgPath: string) =>
    `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export const api = axios.create({
  baseURL: apiConfig.baseUrl,
  timeout: 1000,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.API_AUTHORIZATION}`,
  },
});
