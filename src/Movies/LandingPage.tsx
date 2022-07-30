import { useState, useEffect } from 'react';
import { landingPageDTO } from './movies.model';
import MoviesList from './MoviesList';

export default function LandingPage(){

    const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
          id: 1,
          title: 'Spider-Man: Far from Home',
          poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
        },
        {
          id: 2,
          title: 'Luca',
          poster: 'https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png'  
        },
        {
          id: 3,
          title: 'minions the rise of gru 2022',
          poster: 'https://upload.wikimedia.org/wikipedia/en/4/45/Minions_The_Rise_of_Gru_poster.jpg'
        }
      ],
      upComingReleases: [
        {
          id: 4,
          title: 'Thor: The Dark World',
          poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Thor_The_Dark_World_poster.jpg'
        }
      ] 
      })
    }, 1000);

    return () => clearTimeout(timerId);
  });


   return(
    <>
    <h3>In Theaters</h3>
    <MoviesList  movies={movies.inTheaters}/>

    <h3>Upcoming Releases</h3>
    <MoviesList  movies={movies.upComingReleases}/>
    </>
   ) 
}
