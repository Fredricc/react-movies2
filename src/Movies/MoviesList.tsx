import IndividualMovies from "./IndividualMovies";
import { movieDTO } from "./movies.model";
import css from './MoviesList.module.css';
//import GenericList from "./utils/GenericList";
import Loading from "../utils/Loading";


export default function MoviesList(props: moviesListProps){

    // return <GenericList list={props.movies}>
    //     <div className={css.div}>
    //     {props.movies?.map(movie => 
    //     <IndividualMovies {...movie} key={movie.id} />)}
    //     </div>
    // </GenericList>
    
    if(!props.movies){
        return<Loading />
    } else if (props.movies.length === 0){
        return <>There are no movies to display.</>
    } else {
        return(
            <div className={css.div}>
        {props.movies?.map(movie => 
        <IndividualMovies {...movie} key={movie.id} />)}
        </div>

        )
    }
    
}
    
    


interface moviesListProps{
    movies?: movieDTO[];
    
}