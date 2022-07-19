import React from 'react';
import { getHomeList } from './api';
import MovieRow from './Components/MovieRow';

function App() {
  const [movieList, setMovieList] = React.useState([]);

  React.useEffect(() => {
    async function loadAll() {
      // Puxando a lista total
      let list = await getHomeList();
      setMovieList(list);
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      {/* Header */}
      {/* Destaque */}
      {/* Listas */}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} />
        ))}
      </section>
      {/* Footer */}
    </div>
  );
}

export default App;
