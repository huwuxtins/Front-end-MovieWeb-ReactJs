import { useEffect, useState } from "react"
import { filmService } from "~/services/film"

function Film() {
    const [films, setFilms] = useState([])
    // const [load, setLoad] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            try {
                await filmService.getFilms(4)
                    .then(res => {
                        setFilms(res)
                    })
            } catch (error) {
                console.error(error)
            }
        }
        fetchApi()
    }, [])

    return (
        <section className="w3l-grids">
            <div className="grids-main py-5">
                <div className="container py-lg-3">
                    <div className="headerhny-title">
                        <div className="w3l-title-grids">
                            <div className="headerhny-left">
                                <h3 className="hny-title">Popular</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w3l-populohny-grids">
                        {
                            films.map((film, index) => {
                                return (
                                    <div key={index} className="item vhny-grid">
                                        <div className="box16">
                                            <a href={`/detail/${film.id}`}>
                                                <figure>
                                                    <img className="img-fluid" src={film.imageLink} alt="" />
                                                </figure>
                                                <div className="box-content">
                                                    <h3 className="title">{film.name}</h3>
                                                    <h4>
                                                        <span className="post"><span className="fa fa-clock-o"> </span> {film.filmLength}</span>
                                                        <span className="post fa fa-heart text-right"></span>
                                                    </h4>
                                                </div>
                                                <span className="fa fa-play video-icon" aria-hidden="true"></span>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Film;