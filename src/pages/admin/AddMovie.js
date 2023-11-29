import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { filmService } from "~/services/film";

function AddMovie() {
    const history = useNavigate()
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [country, setCountry] = useState('')
    const [author, setAuthor] = useState('')
    const [yearRelease, setYearRelease] = useState('')
    const [imageLink, setImageLink] = useState('')
    const [linkUrl, setLinkUrl] = useState('')
    const [linkDemo, setLinkDemo] = useState('')
    const [description, setDescription] = useState('')
    const [filmLength, setFilmLength] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const fetchApi = async () => {
            try {
                const result = await filmService.addFilm(
                    name, description, genre, imageLink, author, country, yearRelease, linkUrl, linkDemo, filmLength)
                    .then(res => {
                        history('/admin/manage-movie')
                    })
                if (result.status) {
                    setError(true)
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchApi()
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
                <div className="container">
                    <h2>Thêm phim mới</h2>
                    <form id="addMovieForm" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="movieTitle" className="form-label">Tên phim:</label>
                            <input type="text" className="form-control" id="movieTitle" name="movieTitle" required onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="country" className="form-label">Nước sản xuất:</label>
                            <input type="text" className="form-control" id="country" name="country" required onChange={(e) => setCountry(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Đạo diễn:</label>
                            <input type="text" className="form-control" id="author" name="author" required onChange={(e) => setAuthor(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="movieGenre" className="form-label">Thể loại:</label>
                            <select className="form-control" id="movieGenre" name="movieGenre" required onChange={(e) => setGenre(e.target.value)}>
                                <option value="">--Select genre ---</option>
                                <option value="action">Action</option>
                                <option value="thriller">Thriller</option>
                                <option value="anime">Comedy</option>
                                <option value="horror">Horror</option>
                                <option value="thriller">Tv-Series</option>
                                <option value="romantic">Romantic</option>
                                <option value="drama">Drama</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="movieDuration" className="form-label">Thời lượng:</label>
                            <input type="text" className="form-control" id="movieDuration" name="movieDuration" required onChange={(e) => setFilmLength(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="releaseDate" className="form-label">Ngày phát hành:</label>
                            <input type="datetime-local" className="form-control" id="releaseDate" name="releaseDate" required onChange={(e) => setYearRelease(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="movieDescription" className="form-label">Mô tả:</label>
                            <textarea className="form-control" id="movieDescription" name="movieDescription" rows="3"
                                required onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="backgroundImage" className="form-label">Ảnh nền:</label>
                            <input type="text" className="form-control" id="backgroundImage" name="backgroundImage"
                                required onChange={(e) => setImageLink(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="movieLinkDemo" className="form-label">Link trailer:</label>
                            <input type="text" className="form-control" id="movieLinkDemo" name="movieLinkDemo"
                                required onChange={(e) => setLinkDemo(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="movieLinkUrl" className="form-label">Link phim:</label>
                            <input type="text" className="form-control" id="movieLinkUrl" name="movieLinkUrl"
                                required onChange={(e) => setLinkUrl(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Thêm</button>
                    </form>
                </div>
            </main>
        </Fragment>
    );
}

export default AddMovie;