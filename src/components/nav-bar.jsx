import { Link } from "react-router-dom";
import UserCard from "./user-card";

function NavBar() {
    return <section className="nav-bar">
        <Link to="/"><img className="home-logo" src="/northcoders-logo.png" alt="northcoders' logo" /></Link>
        <Link to="/user"> <UserCard /> </Link>
    </section>
}

export default NavBar;
