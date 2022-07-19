import React from 'react';
import './App.css';
import { getHomeList, getMovieInfo } from './api';
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';

function App() {
  const [movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);

  React.useEffect(() => {
    async function loadAll() {
      // Puxando a lista total
      let list = await getHomeList();
      setMovieList(list);

      // Pegando o featured movie
      let originals = list.filter((i) => i.slug === 'originals');
      let randomOriginal = Math.floor(
        Math.random() * originals[0].items.results.length - 1,
      );
      let chosenOriginal = originals[0].items.results[randomOriginal];
      let chosenInfo = await getMovieInfo(chosenOriginal.id, 'tv');
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      {/* Header */}
      {/* Destaque */}
      {featuredData && <FeaturedMovie item={featuredData} />}
      {/* Listas */}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      {/* Footer */}
    </div>
  );
}

export default App;
