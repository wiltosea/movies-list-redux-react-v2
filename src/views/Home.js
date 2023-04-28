import { useEffect, useState } from 'react';
import { MovieService } from '../api/MoviesService';
import Movie from '../components/Movie';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieService.getMovies().then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <div className="container">
      <div className="row gy-5">
        {movies.map((movie) => (
          <div key={movie.id} className="col-3">
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
