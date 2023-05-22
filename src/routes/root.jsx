import { Link } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";

export default function Root() {
    return (
        <div>
            <HomePage />
            {/* <Link to={`/tweets`}>Tweets</Link> */}
        </div>
    )
}