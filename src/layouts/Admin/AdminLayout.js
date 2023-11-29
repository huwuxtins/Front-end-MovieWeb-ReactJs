import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLayout({ children }) {
    const history = useNavigate()
    const handleLogout = () => {
        localStorage.setItem("jwtToken", null)
        localStorage.setItem("user", null)
        history('/login')
    }

    return (
        <Fragment>
            <header id="site-header" className="text-white text-center py-3 w3l-header"></header>
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                        <div className="position-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/admin/manage-movie'}>
                                        <i className="fa-solid fa-film"></i>
                                        Quản lý phim
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/admin/manage-user'}>
                                        <i className="fa-solid fa-user"></i>
                                        Quản lý người dùng
                                    </Link>
                                </li>
                            </ul>
                            <div className="mt-auto">
                                <button className="nav-link" onClick={(e) => handleLogout(e)}>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                    Đăng xuất
                                </button>
                            </div>
                        </div>
                    </nav>

                    {children}

                </div>
            </div>
        </Fragment>
    );
}

export default AdminLayout;