import CreateActor from "../../actors/CreateActor";
import EditActor from "../../actors/EditActor";
import IndexActors from "../../actors/IndexActors";
import CreateGenre from "../../genres/CreateGenre";
import EditGenres from "../../genres/EditGenres";
import IndexGenres from "../../genres/IndexGenres";
import CreateMovieTheater from "../../moviesTheaters/CreateMovieTheater";
import EditMovieTheater from "../../moviesTheaters/EditMovieTheater";
import IndexMovieTheaters from "../../moviesTheaters/IndexMovieTheaters";
import CreateMovie from "../CreateMovies";
import EditMovie from "../EditMovie";
import FilterMovies from "../FilterMovies";
import LandingPage from "../LandingPage";
import RedirectToLandingPage from "../../utils/RedirectToLandingPage";
import MovieDetails from "../MovieDetails";

const routes = [
    {path: '/genres', component: IndexGenres, exact: true},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit/:id(\\d+)', component: EditGenres},

    {path: '/Actors', component: IndexActors, exact: true},
    {path: '/Actors/create', component: CreateActor},
    {path: '/Actors/edit/:id(\\d+)', component: EditActor},

    {path: '/movietheaters', component: IndexMovieTheaters, exact: true},
    {path: '/movietheaters/create', component: CreateMovieTheater},
    {path: '/movietheaters/edit/:id(\\d+)', component: EditMovieTheater},

    {path: '/movies/create', component: CreateMovie},
    {path: '/movies/edit/:id(\\d+)', component: EditMovie},
    {path: '/movies/filter', component: FilterMovies},
    {path: '/movie/:id(\\d+)', component: MovieDetails},


    {path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectToLandingPage}
];

export default routes;