import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { filmService } from "~/services/film";

function EditMovie() {
    const history = useNavigate()
    const [film, setFilm] = useState({
        name: '',
        genre: 'action',
        filmLength: '',
        yearRelease: '' // Initialize with an empty string or a default date string
    });

    const { id } = useParams()
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await filmService.getFilmById(id)
                setFilm(result)
            } catch (error) {
                console.error(error)
            }
        }
        fetchApi()
    }, [])

    const handleChangeName = (e) => {
        setFilm({ ...film, name: e.target.value })
    }

    const handleChangeGenre = (e) => {
        setFilm({ ...film, genre: e.target.value })
    }

    const handleChangeDescription = (e) => {
        setFilm({ ...film, description: e.target.value })
    }
    
    const handleChangeImageLink = (e) => {
        setFilm({ ...film, imageLink: e.target.value })
    }

    const handleChangeLinkTrailer = (e) => {
        setFilm({ ...film, linkDemo: e.target.value })
    }

    const handleChangeLinkUrl = (e) => {
        setFilm({ ...film, linkUrl: e.target.value })
    }

    const handleChangeFilmLength = (e) => {
        setFilm({ ...film, filmLength: e.target.value })
    }

    const handleChangeYearRelease = (e) => {
        setFilm({ ...film, yearRelease: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const fetchApi = async () => {
            try {
                await filmService.updateFilm(
                    id, film.name, film.description, film.genre, film.imageLink, film.author, film.country,
                    film.yearRelease, film.linkUrl, film.linkDemo, film.filmLength, film.rating, film.reviews)
                    .then(() => {
                        history('/admin/manage-movie')
                    })
            } catch (error) {
                console.error(error)
            }
        }

        fetchApi()
    }

    return (
        <Fragment>
            <main id="main-content" className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="container">
                    <h2>Chỉnh sửa thông tin phim</h2>
                    <form id="editMovieForm" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="movieTitle" className="form-label">Tên phim:</label>
                                    <input type="text" className="form-control" id="movieTitle" name="movieTitle" required value={film.name} onChange={handleChangeName} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="movieGenre" className="form-label">Thể loại:</label>
                                    <select className="form-control" id="movieGenre" name="movieGenre" required value={film.genre} onChange={handleChangeGenre}>
                                        <option value="">--Select genre ---</option>
                                        <option value="action">Action</option>
                                        <option value="thriller">Thriller</option>
                                        <option value="anime">Anime</option>
                                        <option value="horror">Horror</option>
                                        <option value="tv-series">Tv-series</option>
                                        <option value="romantic">Romantic</option>
                                        <option value="drama">Drama</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="movieDuration" className="form-label">Thời lượng:</label>
                                    <input type="text" className="form-control" id="movieDuration" name="movieDuration"
                                        required value={film.filmLength} onChange={handleChangeFilmLength} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="releaseDate" className="form-label">Ngày phát hành:</label>
                                    <input type="datetime-local" className="form-control" id="releaseDate" name="releaseDate"
                                        required value={film.yearRelease} onChange={handleChangeYearRelease} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="movieDescription" className="form-label">Mô tả:</label>
                                    <textarea className="form-control" id="movieDescription" name="movieDescription" rows="3"
                                        required value={film.description} onChange={handleChangeDescription}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="backgroundImage" className="form-label">Ảnh nền:</label>
                                    <input type="text" className="form-control" id="backgroundImage" name="backgroundImage"
                                        required value={film.imageLink} onChange={handleChangeImageLink} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="movieLinkDemo" className="form-label">Link trailer:</label>
                                    <input type="text" className="form-control" id="movieLinkDemo" name="movieLinkDemo"
                                        required value={film.linkDemo} onChange={handleChangeLinkTrailer} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="movieLinkUrl" className="form-label">Link phim:</label>
                                    <input type="text" className="form-control" id="movieLinkUrl" name="movieLinkUrl"
                                        required value={film.linkUrl} onChange={handleChangeLinkUrl} />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Lưu thay đổi</button>
                    </form>
                </div>
            </main>
        </Fragment>
    );
}

export default EditMovie;