import { Link } from "react-router-dom";

export default function IndexMovieTheaters(){
    return(
    <>
        <h3>Movie Theater</h3>
        <Link className="btn btn-primary" to="/movieTheaters/create">Create Theater</Link>
    </>
    )
}