import { Fragment, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { DateTime } from "luxon"
import { filmService } from "~/services/film"
import '~/assets/css/style_starter.css'
import jQuery from "jquery"
import { EasyResponsiveTabs } from "~/assets/js/easyResponsiveTabs";
import '~/assets/js/owl.carousel'
import { owlCarousel } from "~/assets/js/owl.carousel";
import { commentService } from "~/services/comment"

function Detail() {
    const history = useNavigate()

    const [film, setFilm] = useState([])
    const [style, setStyle] = useState({})
    const [comments, setComments] = useState([])
    const [size, setSize] = useState(0)
    const { id } = useParams()
    const [content, setContent] = useState('')
    const [isPosted, setPost] = useState(false)
    const [isReviewed, setReview] = useState(false)

    const user = JSON.parse(localStorage.getItem("user"))
    const username = user ? user.username : null
    const email = user ? user.email : null

    useEffect(() => {
        const fetchApi = async () => {
            try {
                await filmService.getFilmById(id)
                    .then((res) => {
                        setFilm(res)
                        setStyle({
                            background: `url(${res.imageLink}) no-repeat center`,
                            display: 'grid',
                            alignItems: 'center',
                            backgroundSize: 'cover',
                            position: 'relative',
                            minHeight: '360px',
                            borderRadius: '8px',
                            zIndex: 1
                        })
                    })
            } catch (error) {

            }
        }
        fetchApi()
    }, [isReviewed])

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await commentService.seeComment(size, id)
                setComments(result)
            } catch (error) {

            }
        }
        fetchApi()
    }, [size, isPosted, isReviewed])

    const handleClickSeeMore = () => {
        setSize(size + 5)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!username) {
            history('/login')
        }

        const fetchApi = async () => {
            try {
                const currentDate = new Date().toISOString()
                await commentService.postComment(email, content, currentDate, username, id)
                setPost(!isPosted)
            } catch (error) {
                console.error(error)
            }
        }
        fetchApi()
    }

    const handleReview = (score) => {
        const fetchApi = async () => {
            try {
                await filmService.reviewFilm(id, score)
                    .then((res) => {
                        console.log(res)
                        setReview(!isReviewed)
                    })
            } catch (error) {
                console.error(error)
            }
        }
        fetchApi()
    }

    const showRating = (score) => {
        if (score === 0) {
            score = 10
        }
        var rating = []
        for (var i = 1; i <= 10; i++) {
            rating.push(i)
        }
        return (
            <span>
                {
                    rating.map((rate, index) => {
                        return (
                                <i key={index}
                                    className="fa-solid fa-star"
                                    style={{ color: (index + 1 <= Math.floor(score)) ? 'yellow' : 'grey' }}
                                    onClick={(e) => handleReview(index + 1)}>
                                </i>
                        )
                    })
                }
            </span>
        )
    }

    var $j = jQuery.noConflict();
    $j = EasyResponsiveTabs()
    useEffect(() => {
        $j(document).ready(function () {
            $j('.popup-with-zoom-anim').magnificPopup({
                type: 'inline',

                fixedContentPos: false,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: true,
                preloader: false,

                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-zoom-in'
            });

            $j('.popup-with-move-anim').magnificPopup({
                type: 'inline',

                fixedContentPos: false,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: true,
                preloader: false,

                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'
            });
        });
    })

    return (
        <Fragment>
            <div className="container py-5">
                <div className="d-grid-1 py-lg-4">
                    <div className="text">
                        <div className="genre-single-page my-lg-5 my-4">
                            <div className="row ab-grids-sec align-items-center">
                                <div className="col-lg-4 gen-right">
                                    <Link to="#"><img className="img-fluid" src={film.imageLink} /></Link>
                                </div>
                                <div className="col-lg-8 gen-left pl-lg-4 mt-lg-0 mt-5">

                                    <h3 className="hny-title">{film.name}</h3>
                                    <p className="mt-2">{film.description}</p>
                                    <ul className="admin-post mt-1">
                                        <li>
                                            <p>Release date :
                                                <Link to="#"> {DateTime.fromISO(film.yearRelease).toFormat("dd-MM-yyyy")} </Link>
                                            </p>
                                        </li>
                                        <li>
                                            <p>Time :
                                                <Link to="#"> {film.filmLength} minutes</Link>
                                            </p>
                                        </li>
                                        <li>
                                            <p>Genre :
                                                <Link to="#"> {film.genre} </Link>
                                            </p>
                                        </li>
                                        <li>
                                            {showRating(film.reviews === 0 ? 10 : film.rating / film.reviews)}
                                        </li>
                                    </ul>
                                    <div className="share-more d-flex mt-4">
                                        <Link to="#" className="btn btn-outline-secondary">Watch now </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w3l-about4" id="about">
                            <div className="new-block">
                                <div className="pop-img-ab position-relative" style={style}>
                                    <div className="history-info">
                                        <a href="#popup-video" className="play-view text-center position-absolute">
                                            <span className="video-play-icon">
                                                <span className="fa fa-play"></span>
                                            </span>
                                        </a>

                                        <a href="#small-dialog"
                                            className="popup-with-zoom-anim play-view text-center position-absolute">
                                            <span className="video-play-icon">
                                                <span className="fa fa-play"></span>
                                            </span>
                                        </a>
                                        <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                                            <iframe src={film.linkDemo} frameBorder="0"
                                                allow="autoplay; fullscreen" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w3l-blog-single comments mt-5">
                            <h3 className="post-content-title">Recent Comments</h3>
                            <button className="btn btn-outline-secondary" onClick={handleClickSeeMore}>See more<span className="fa fa-angle-double-right ml-2"
                                aria-hidden="true"></span></button>
                            {
                                comments.map((comment, index) => {
                                    return (
                                        <div key={index} className="media mt-5">
                                            <div className="img-circle">
                                                <img src="assets/images/c1.jpg" className="mr-3 rounded-circle" alt="..." />
                                            </div>
                                            <div className="media-body">
                                                <h5 className="mt-0">{comment.username}</h5>
                                                <span className="time">{comment.createdDate}</span>
                                                <p>{comment.content}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            <div className="testi-top mt-5 pt-3">
                                <h3 className="post-content-title">Leave a Comment</h3>
                                <div className="form-commets mt-5">
                                    <form onSubmit={handleSubmit}>
                                        <textarea name="Message" required=""
                                            placeholder="Write your comments here" onChange={(e) => { setContent(e.target.value) }}></textarea>
                                        <div className="text-right mt-3">
                                            <button className="btn read-button" type="submit" style={{ backgroundColor: '#df0e62', color: '#fff' }}>Post comment</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Detail