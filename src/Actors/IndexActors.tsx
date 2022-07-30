import { Link } from "react-router-dom";

export default function IndexActors(){
    return(
    <>
        <h3>Actor</h3>
        <Link className="btn btn-primary" to="/Actors/create">Create Actor</Link>
    </>
    )
}