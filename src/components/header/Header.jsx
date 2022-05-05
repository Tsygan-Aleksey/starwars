import {Link} from "react-router-dom";

export const Header = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid  pb-0">
                <Link className="navbar-brand" to="">STAR WARS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="people">People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="films">Films</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="starships">Starships</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="planets">Planets</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}