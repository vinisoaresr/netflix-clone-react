
import React, { useEffect, useState } from "react";
import './App.css';

import { getCategories, getMoreInfo } from './services/api';

import { Header } from './components/header/Header';
import { Spotlight } from './components/Spotlight/Spotlight';
import { MovieRow } from './components/movie_row/MovieRow';
// import Footer from './components/;




export function App() {
  const [movieList, setMovieList] = useState([]);
  const [spotlightData, setSpotlightData] = useState(null);
  const [backgroundHeader, setBackgroundHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // get movies list
      let movieList = await getCategories();
      setMovieList(movieList);

      // get spotlight
      let originals = movieList.filter(i => i.name === 'originals');
      let random = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[random];
      let chosenInfo = await getMoreInfo(chosen.id, false);

      console.log(chosenInfo);
      setSpotlightData(chosenInfo);
    }
    loadAll();

  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 200) {

        setBackgroundHeader(!backgroundHeader)
      } else {
        setBackgroundHeader(false)
      };
    }
    window.addEventListener('scroll', scrollListener);
  }, [])

  return (
    <div className="home_page">

      {/* Header */}
      <Header background={backgroundHeader} />

      {/* Spotlight */}
      {spotlightData && <Spotlight movie={spotlightData} />
      }

      {/* RowListMovies... */}
      <section className="lists">
        {movieList.map((category, key) => (
          <div>
            <MovieRow key={key} title={category.title} items={category.items} />
          </div>
        ))}
      </section>

      {/* Footer */}
      <div>Footer</div>
      {movieList.length <= 0 &&
        <div className='loading'>
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="LOADING" />
        </div>
      }
    </div>
  );
}
