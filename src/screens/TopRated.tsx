import { Layout } from './Layout';
import { useQuery } from '@tanstack/react-query';
import { getTopRatedMovies } from '../services/getTopRatedMovies';
import { TopRatedMovie } from '../models/top-rated.models';
import { MovieCard } from '../components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import './screens-style.css';

export const TopRated = () => {
  const [movies, setMovies] = useState<TopRatedMovie[] | null>(null);
  const { data, isLoading } = useQuery({
    queryKey: ['top-rated-movies'],
    queryFn: getTopRatedMovies,
  });

  useEffect(() => {
    data && setMovies(data.results);
  }, [data]);

  return (
    <Layout isLoading={isLoading}>
      Top rated movies
      <div className="grid-layout">
        {movies &&
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              uri={`/top-rated/${movie?.id}`}
              image={movie.poster_path || movie.backdrop_path}
            />
          ))}
      </div>
    </Layout>
  );
};
