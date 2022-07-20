import './App.css';
import IndividualMovies from './Movies/IndividualMovies';
import { movieDTO } from './Movies/movies.model';

function App() {
  const testMovie: movieDTO = {
    id: 1,
    title: 'Spider-Man: Far from Home',
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
  }

  return(
    <>
    <IndividualMovies {...testMovie} />
    </>
  )
}

export default App;

