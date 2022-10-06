import { actorMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../Genres/genres.model";
import { movieTheaterDTO } from "../moviesTheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie(){

    const nonSelectedGenres: genreDTO[] = [{id: 2, name: 'Drama'}]
    const selectedGenres: genreDTO[] = [{id: 1, name: 'Comedy'}]

    const nonSelectedMovieTheaters: movieTheaterDTO[] = 
    [{id: 2, name: 'Agora'}]

    const selectedMovieTheaters: movieTheaterDTO[] = 
    [{id: 1, name: 'Sambil'}]

    const selectedActors: actorMovieDTO = [{
        id: 3,
      name: "Hellen",
      character: 'Geralt',
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/210120-D-WD757-1975_%2850860511978%29_%28cropped%29.jpg/330px-210120-D-WD757-1975_%2850860511978%29_%28cropped%29.jpg",
    }]


    return(
        <>
        <h3>Edit Movie</h3>

        <MovieForm model={{title: 'Toy Story', inTheaters: true, trailer: 'url',
        releaseDate: new Date('2019-01-01T00:00:00')    
    }}
            onSubmit={values => console.log(values)}
            nonSelectedGenres={nonSelectedGenres}
            selectedGenres={selectedGenres}

            nonSelectedMovieTheaters={nonSelectedMovieTheaters}
            selectedMovieTheaters={nonSelectedMovieTheaters}
            selectedActors={selectedActors}

        />
        
        </>
    )
}