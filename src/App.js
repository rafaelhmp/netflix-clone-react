import React from 'react';
import './App.css';
import { getHomeList, getMovieInfo } from './api';
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  const [movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);
  const [blackHeader, setBlackHeader] = React.useState(false);

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
      ) {
        setFeaturedData(chosenInfo);
      }
    }
    loadAll();
  }, []);

  React.useEffect(() => {
    function scrollListener() {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <div className="page">
      {/* Header */}
      <Header black={blackHeader} />
      {/* Filme em destaque */}
      {featuredData && <FeaturedMovie item={featuredData} />}
      {/* Lista de filmes */}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      {/* Footer */}
      <Footer />
      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://hips.hearstapps.com/pop.h-cdn.co/assets/16/48/1600x800/landscape-1480516731-4f155204-7266-486d-88a5-2018ff11f947.gif?resize=480:*"
            alt="Loading"
          />
        </div>
      )}
    </div>
  );
}

export default App;
