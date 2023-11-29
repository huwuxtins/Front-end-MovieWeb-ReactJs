import jQuery from "jquery"
import { useEffect } from 'react';
import { EasyResponsiveTabs } from "~/assets/js/easyResponsiveTabs";
import { owlCarousel } from "~/assets/js/owl.carousel";

function Banner({ films }) {

    var $j = jQuery.noConflict();

    $j = EasyResponsiveTabs()
    useEffect(() => {
        $j(document).ready(() => {
            $j('#parentHorizontalTab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function (event) { // Callback function if tab is switched
                    var $tab = $j(this);
                    var $info = $j('#nested-tabInfo');
                    var $name = $j('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        })
    }, [])

    owlCarousel()
    useEffect(() => {
        $j(document).ready(() => {
            $j('.owl-one').owlCarousel({
                stagePadding: 280,
                loop: true,
                margin: 20,
                nav: true,
                responsiveClass: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 1000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 40,
                        nav: false
                    },
                    480: {
                        items: 1,
                        stagePadding: 60,
                        nav: true
                    },
                    667: {
                        items: 1,
                        stagePadding: 80,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true
                    }
                }
            })

            $j('.owl-three').owlCarousel({
                loop: true,
                margin: 20,
                nav: false,
                responsiveClass: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 1000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 2,
                        nav: false
                    },
                    480: {
                        items: 2,
                        nav: true
                    },
                    667: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 5,
                        nav: true
                    }
                }
            })

            $j('.owl-mid').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                responsiveClass: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 1000,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    480: {
                        items: 1,
                        nav: false
                    },
                    667: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true
                    }
                }
            })
        })
    }, [])

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
        <section className="w3l-main-slider position-relative" id="home">
            <div className="companies20-content">
                <div className="owl-one owl-carousel owl-theme">
                    {
                        films.map((film, index) => {
                            var bannerTop = ""
                            if (index !== 0) {
                                bannerTop = `banner-top${index}`
                            }
                            var style = {
                                background: `url(${film.imageLink}) no-repeat center`,
                                backgroundSize: 'cover',
                                minHeight: '500px',
                                position: 'relative',
                                zIndex: 0,
                                display: 'grid',
                                alignItems: 'center',
                                borderRadius: '6px',
                            }
                            return (
                                <div key={index} className="item">
                                    <li>
                                        <div className={`slider-info banner-view ${bannerTop} bg bg2`} style={style}>
                                            <div className="banner-info">
                                                <h3>{film.name}</h3>
                                                <p>{film.description}</p>
                                                <a href={`#small-dialog${index}`} className="popup-with-zoom-anim play-view1">
                                                    <span className="video-play-icon">
                                                        <span className="fa fa-play"></span>
                                                    </span>
                                                    <h6>Watch Trailer</h6>
                                                </a>
                                                <div id={`small-dialog${index}`} className="zoom-anim-dialog mfp-hide">
                                                    <iframe src={film.linkDemo} allow="autoplay; fullscreen"
                                                        allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Banner;

