import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '~/assets/css/style_starter.css'
import { filmService } from "~/services/film";

function ManageMovie() {
    const [isDeleted, setDelete] = useState(false)
    const [films, setFilms] = useState([])
    const [error, setError] = useState(false)
    const [page, setPage] = useState(1)
    const history = useNavigate()

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await filmService.getFilmsAdmin(10, page)
                if (result.status) {
                    setError(true)
                }
                setFilms(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchApi()
    }, [isDeleted, page])

    const handleClickEdit = (film) => {
        history(`/admin/edit-movie/${film.id}`)
    }

    const handleClickDelete = (film) => {
        const fetchApi = async () => {
            try {
                await filmService.deleteFilm(film.id)
            } catch (error) {
                console.error(error)
            }
        }
        fetchApi()
        setDelete(!isDeleted)
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
                        <h2>Quản lý phim</h2>
                        <Link to={'/admin/add-movie'}><button className="btn btn-primary" >
                            <i className="fa-solid fa-plus"></i> Thêm</button></Link>
                    </div>

                    <div className="table-responsive text-center">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Tên phim</th>
                                    <th>Thể loại</th>
                                    <th>Thời lượng</th>
                                    <th>Ngày phát hành</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    films.map((film, index) => {
                                        return (
                                            <tr key={index} id="movieRow">
                                                <td><a href="">{film.name}</a></td>
                                                <td><a href="">{film.genre}</a></td>
                                                <td><a href="">{film.filmLength}</a></td>
                                                <td><a href="">{film.yearRelease}</a></td>
                                                <td>
                                                    <button className="btn btn-warning" onClick={() => handleClickEdit(film)}><i
                                                        className="fa-regular fa-pen-to-square"></i></button>
                                                    <button className="btn btn-danger" ><i
                                                        className="fa-solid fa-trash" onClick={() => handleClickDelete(film)}></i></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example" style={{justifyContent: 'center'}}>
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

export default ManageMovie;