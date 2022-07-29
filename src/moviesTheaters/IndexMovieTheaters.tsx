import { Link } from "react-router-dom";

export default function IndexTheaters(){
    return(
    <>
        <h3>Theater</h3>
        <Link className="btn btn-primary" to="/Theaters/create">Create Theater</Link>
    </>
    )
}