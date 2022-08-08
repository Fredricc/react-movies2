import MovieTheaterForm from "./MovieTheaterForm"

export default function CreateMovieTheater(){
    return(
        <>
        <h3>Create Movie Theaters</h3>
        <MovieTheaterForm
            model={{name: ''}}
            onSubmit={values => console.log(values)}
            />
        </>
    )
}