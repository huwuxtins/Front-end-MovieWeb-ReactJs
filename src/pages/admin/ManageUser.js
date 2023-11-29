import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userService } from "~/services/user";

function ManageUser() {
    const [isChanged, setChange] = useState(false)
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await userService.getAllUser(page)
                if (result.status) {
                    setError(true)
                }
                setUsers(result)
            } catch (error) {
                console.error(error)
            }
        }
        fetchApi()
    }, [page, isChanged])

    const handleClickAuthorize = (user) => {
        const fetchApi = async () => {
            const roleName = (user.roleName === "ROLE_USER") ? "ROLE_ADMIN" : "ROLE_USER"
            try {
                await userService.updateUser(user.id, user.name, user.username, user.email, user.password, roleName, user.isLocked)
                    .then(() => {
                        setChange(!isChanged)
                    })
            } catch (error) {
                console.error(error)
            }
        }
        fetchApi()
    }

    const handleClickLock = (user) => {
        const fetchApi = async () => {
            try {
                await userService.updateUser(user.id, user.name, user.username, user.email, user.password, user.roleName, !user.isLocked)
                .then(() => {
                    setChange(!isChanged)
                })
            } catch (error) {
                console.error(error)
            }
        }
        fetchApi()
    }

    const handlePre = () => {
        setPage(page - 1)
    }

    const handleNext = () => {
        setPage(page + 1)
    }

    if (error) {
        return (
            <main id="main-content" className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div >Unauthorize, you don't have permission to access this page!</div>
                <Link to={'/login'}>Back to login</Link>
            </main>
        )
    }

    return (
        <Fragment>
            <main id="main-content" className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2>Quản lý người dùng</h2>
                    </div>

                    <div className="table-responsive text-center">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th>ROLE</th>
                                    <th>Lock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => {
                                        const isAdmin = (user.roleName === "ROLE_ADMIN")
                                        return (
                                            <tr key={index} id="userRow" style={{background: isAdmin ? '#7ed3e5': '#fff'}}>
                                                <td><a href="#">{user.name}</a></td>
                                                <td><a href="#">{user.email}</a></td>
                                                <td><a href="#">{user.username}</a></td>
                                                <td>
                                                    <a href="#">{user.roleName}</a>
                                                    <button className="btn btn-warning" onClick={() => handleClickAuthorize(user)}><i
                                                        className="fa-regular fa-pen-to-square"></i></button>
                                                </td>
                                                <td>
                                                    <button className={`btn btn-${user.isLocked ? "danger" : "success"}`} onClick={() => handleClickLock(user)}>
                                                        <i className={`fa-solid ${user.isLocked ? "fa-lock" : "fa-lock-open"}`} style={{ cursor: 'pointer' }}></i>
                                                    </button>

                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                        <nav aria-label="Page navigation example" style={{ justifyContent: 'center' }}>
                            <ul className="pagination">
                                <li className="page-item"><button className="page-link" onClick={handlePre}>Prev</button></li>
                                <li className="page-item"><button className="page-link">{page}</button></li>
                                <li className="page-item"><button className="page-link" onClick={handleNext}>Next</button></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}

export default ManageUser;