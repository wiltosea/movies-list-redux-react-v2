import { useQuery } from 'react-query';
import MovieService from './MovieService';

export function useMovies() {
  const { data, error, isLoading, refetch } = useQuery('movies', () =>
    MovieService.getMovies()
  );

  return { data, error, isLoading, refetch };
}