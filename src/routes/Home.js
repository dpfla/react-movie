import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import style from "../css/Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    /*const response = await 
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
    const json = await response.json();*/
    const json = await(
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year'
        )
    ).json();

    setMovies(json.data.movies);
  	setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div id={style.wrapper}>
      {loading ? 
        <h1>Loading...</h1> : 
        <div className={style.moviesWrapper}>
          <h1>Movie</h1>
          <div className={style.movies}>{movies.map((movie) =>
            <Movie 
              className={style.movie}
              key={movie.id}
              id={movie.id}
              cover_image={movie.medium_cover_image} 
              title={movie.title} 
              summary={movie.summary} 
              genres={movie.genres}
            />
          )}</div>
        </div>
      }
    </div>
  );
}

export default Home;
