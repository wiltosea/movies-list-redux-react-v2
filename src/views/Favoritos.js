import { useSelector } from 'react-redux';

export default function Favoritos() {
  const favoritos = useSelector((state) => state.favorito);

  return (
    <section>
      <h1>Meus Filmes Favoritos</h1>
      <ul>
        {favoritos.movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </section>
  );
}
