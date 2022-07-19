import React from 'react';
import './App.css';
import { getHomeList, getMovieInfo } from './api';
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';
import Header from './Components/Header/Header';

function App() {
  const [movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);

  React.useEffect(() => {
    async function loadAll() {
      // Puxando a lista total de filmes/series/documentarios
      let list = await getHomeList();
      setMovieList(list);

      // Pegando o featured movie
      let originals = list.filter((i) => i.slug === 'originals');
      let randomOriginal = Math.floor(
        Math.random() * originals[0].items.results.length - 1,
      );
      let chosenOriginal = originals[0].items.results[randomOriginal];
      let chosenInfo = await getMovieInfo(chosenOriginal.id, 'tv');

      // Verifica se o filme escolhido possui imagem de fundo, descrição e pontuação
      if (
        chosenInfo.backdrop_path &&
        chosenInfo.overview &&
        chosenInfo.vote_average > 6
      )
        setFeaturedData(chosenInfo);
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      {/* Header */}
      <Header />
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
