import { Fragment, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { filmService } from "~/services/film"

function Genre() {
    const [films, setFilms] = useState([])
    const [page, setPage] = useState(1)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const queryName = searchParams.get('name');

    useEffect(() => {

        const fetchApi = async () => {
            try {
                const result = await filmService.getFilms(10, page, null, null, queryName)
                setFilms(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchApi()
    }, [queryName, page])

    useEffect(() => {   
        setPage(1)
    }, [queryName])

    const handleClickSeeMore = () => {
        setPage(page + 5)
    }

    return (
        <Fragment>
            <section className="w3l-grids" style={{ marginTop: '30px' }}>
                <div className="grids-main py-5">
                    <div className="container py-lg-4">
                        <div className="headerhny-title">
                            <div className="w3l-title-grids">
                                <div className="headerhny-left">
                                    <h3 className="hny-title">{queryName}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="w3l-populohny-grids">
                            {
                                films.map((film, index) => {
                                    return (
                                        <div key={index} className="item vhny-grid">
                                            <div className="box16 mb-0">
                                                <Link to={`/detail/${film.id}`}>
                                                    <figure>
                                                        <img className="img-fluid" src={film.imageLink} alt="" />
                                                    </figure>
                                                    <div className="box-content">
                                                        <h3 className="title">{film.name}</h3>
                                                        <h4> <span className="post"><span className="fa fa-clock-o"> </span>{film.filmLength}</span>

                                                            <span className="post fa fa-heart text-right"></span>
                                                        </h4>
                                                    </div>
                                                    <span className="fa fa-play video-icon" aria-hidden="true"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="button-center text-center mt-3">
                        <button className="btn btn-outline-secondary" onClick={handleClickSeeMore}>View more <span className="fa fa-angle-double-right ml-2"
                            aria-hidden="true"></span></button>
                    </div>

                </div>
            </section>
        </Fragment>
    )
}

export default Genre