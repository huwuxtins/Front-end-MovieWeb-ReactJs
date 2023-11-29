import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "~/auth/useAuth";

function Header() {

    const auth = useAuth()
    const history = useNavigate()
    const isLoggedIn = auth ? auth.isLoggedIn : false;
    const isAdmin = auth ? (auth.role === "ROLE_ADMIN" ? true : false) : false
    const username = auth.username

    const [search, setSearch] = useState('')

    if (!username) {
        history('/login')
    }

    const handleLogout = () => {
        localStorage.setItem("jwtToken", null)
        localStorage.setItem("user", null)
        history('/login')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        history(`/search?search=${search}`)
    }

    return (
        <header id="site-header" className="w3l-header fixed-top">
            <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
                <div className="container">
                    <h1>
                        <Link className="navbar-brand" to={"/"}><span className="fa fa-play icon-log"
                            aria-hidden="true"></span>
                            Movie hay
                        </Link>
                    </h1>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="fa icon-expand fa-bars"></span>
                        <span className="fa icon-close fa-times"></span>
                    </button>
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                        <ul className="navbar-nav">
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Genre
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                    <li><Link className="dropdown-item" to={"/genre?name=action"}>Action</Link></li>
                                                    <li><Link className="dropdown-item" to={"/genre?name=drama"}>Drama</Link></li>
                                                    <li><Link className="dropdown-item" to={"/genre?name=horror"}>Horror</Link></li>
                                                    <li><Link className="dropdown-item" to={"/genre?name=thriller"}>Thriller</Link></li>
                                                    <li><Link className="dropdown-item" to={"/genre?name=anime"}>Anime</Link></li>
                                                    <li><Link className="dropdown-item" to={"/genre?name=romantic"}>Romantic</Link></li>
                                                    <li><Link className="dropdown-item" to={"/genre?name=tv-series"}>Tv-Series</Link></li>
                                                    <li><Link className="dropdown-item" to={"/genre?name=comedy"}>Comedy</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/contact'}>Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                        <ul className="navbar-nav">
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    {isLoggedIn ? username : "Login"}
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                    {
                                                        isLoggedIn ?
                                                            (
                                                                <Fragment>
                                                                    {isAdmin ? (
                                                                        <li><Link className="dropdown-item" to={"/admin"}>Admin</Link></li>
                                                                    ) : (<Fragment></Fragment>)}
                                                                    <li><button className="dropdown-item" onClick={(e) => { handleLogout(e) }}>Logout</button></li>
                                                                </Fragment>
                                                            )
                                                            :
                                                            (
                                                                <Fragment>
                                                                    <li><Link className="dropdown-item" to={"/login"}>Login</Link></li>
                                                                    <li><Link className="dropdown-item" to={"/register"}>Register</Link></li>
                                                                </Fragment>
                                                            )
                                                    }
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <div className="search-right">
                                <a href="#search" className="btn search-hny mr-lg-3 mt-lg-0 mt-4" title="search">Search <span
                                    className="fa fa-search ml-3" aria-hidden="true"></span></a>
                                <div id="search" className="pop-overlay">
                                    <div className="popup">
                                        <form className="search-box" onSubmit={handleSubmit}>
                                            <input type="search" placeholder="Search your Keyword" name="search"
                                                required="required" autoFocus onChange={(e) => setSearch(e.target.value)} />
                                            <button type="submit" className="btn"><span className="fa fa-search"
                                                aria-hidden="true"></span></button>
                                        </form>
                                        <div className="browse-items">
                                            <h3 className="hny-title two mt-md-5 mt-4">Browse all:</h3>
                                            <ul className="search-items">
                                                <li><Link to={"/genre?name=action"}>Action</Link></li>
                                                <li><Link to={"/genre?name=drama"}>Drama</Link></li>
                                                <li><Link to={"/genre?name=family"}>Family</Link></li>
                                                <li><Link to={"/genre?name=thriller"}>Thriller</Link></li>
                                                <li><Link to={"/genre?name=comedy"}>Commedy</Link></li>
                                                <li><Link to={"/genre?name=romantic"}>Romantic</Link></li>
                                                <li><Link to={"/genre?name=tv-series"}>Tv-Series</Link></li>
                                                <li><Link to={"/genre?name=horror"}>Horror</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a className="close" href="#close">×</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header