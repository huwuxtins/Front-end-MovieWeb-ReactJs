import { Fragment, useEffect, useState } from "react"
import '~/assets/css/style_starter.css'
import jQuery from "jquery"
import { EasyResponsiveTabs } from "~/assets/js/easyResponsiveTabs";
import '~/assets/js/owl.carousel'
import { owlCarousel } from "~/assets/js/owl.carousel";
import { filmService } from "~/services/film"
import Banner from "~/components/Banner";
import Film from "~/components/Film";
import Release from "~/components/Release";

function Home() {
    var $j = jQuery.noConflict();
    
    const [banner, setBanner] = useState([])
    const [release, setRelease] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await filmService.getFilms(3)
                setBanner(result)
                setLoad(true)
            } catch (error) {

            }
        }
        fetchApi()
    }, [])

    
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await filmService.getFilms(5)
                setRelease(result)
                setLoad(true)
            } catch (error) {

            }
        }
        fetchApi()
    }, [])

    $j = EasyResponsiveTabs()
    useEffect(() => {
        $j = EasyResponsiveTabs()
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
    if(!load){
        return (<div>Loading...</div>)
    }

    return (
        <Fragment>
            <Banner films={banner}/>
            <Film/>
            <Release films={release}/>
        </Fragment >
    )
}

export default Home;