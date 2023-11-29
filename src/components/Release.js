import { Link } from "react-router-dom"

function Release({ films }) {
    return (
        <section className="w3l-grids">
            <div className="grids-main py-5">
                <div className="container py-lg-3">
                    <div className="headerhny-title">
                        <div className="w3l-title-grids">
                            <div className="headerhny-left">
                                <h3 className="hny-title">NEW RELEASES</h3>
                            </div>
                        </div>
                    </div>
                    <div className="owl-three owl-carousel owl-theme">
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
                                                    <h4> <span className="post"><span className="fa fa-clock-o"> </span>{film.filmLength}</span>

                                                        <span className="post fa fa-heart text-right"></span>
                                                    </h4>
                                                </div>
                                                <span className="fa fa-play video-icon" aria-hidden="true"></span>
                                            </Link>
                                        </div>
                                        <h3> <Link className="title-gd" to={`/detail/${film.id}`} style={{ text_decoration: 'none', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '100%' }}>{film.name}</Link></h3>
                                        <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '100%' }}>{film.description}</p>
                                        <div className="button-center text-center mt-4">
                                            <Link to={`/detail/${film.id}`} className="btn watch-button border border-dark">Watch now</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Release