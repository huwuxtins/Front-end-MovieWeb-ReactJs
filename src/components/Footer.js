function Footer() {
    const execute = () => {
        window.onscroll = function () {
            scrollFunction()
        }

        function scrollFunction() {
            var moveTop = document.getElementById("movetop")
            if(moveTop){
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    document.getElementById("movetop").style.display = "block"
                } else {
                    document.getElementById("movetop").style.display = "none"
                }
            }
        }
    }
    return (
        <footer className="w3l-footer">
            <section className="footer-inner-main">
                <div className="footer-hny-grids py-5">
                    <div className="container py-lg-4">
                        <div className="text-txt">
                            <div className="right-side">
                                <div className="row footer-about">
                                    <div className="col-md-3 col-6 footer-img mb-lg-0 mb-4">
                                        <a href="genre.html"><img className="img-fluid" src="../src/assets/images/banner1.jpg"
                                            alt="" /></a>
                                    </div>
                                    <div className="col-md-3 col-6 footer-img mb-lg-0 mb-4">
                                        <a href="genre.html"><img className="img-fluid" src="../src/assets/images/banner2.jpg"
                                            alt="" /></a>
                                    </div>
                                    <div className="col-md-3 col-6 footer-img mb-lg-0 mb-4">
                                        <a href="genre.html"><img className="img-fluid" src="../src/assets/images/banner3.jpg"
                                            alt="" /></a>
                                    </div>
                                    <div className="col-md-3 col-6 footer-img mb-lg-0 mb-4">
                                        <a href="genre.html"><img className="img-fluid" src="../src/assets/images/banner4.jpg"
                                            alt="" /></a>
                                    </div>
                                </div>
                                <div className="row footer-links">


                                    <div className="col-md-3 col-sm-6 sub-two-right mt-5">
                                        <h6>Movies</h6>
                                        <ul>
                                            <li><a href="#" style={{ textDecoration: 'none' }}>Movies</a></li>
                                            <li><a href="#" style={{ textDecoration: 'none' }}>Videos</a></li>
                                            <li><a href="#" style={{ textDecoration: 'none' }}>English Movies</a></li>
                                            <li><a href="#" style={{ textDecoration: 'none' }}>Tailor</a></li>
                                            <li><a href="#" style={{ textDecoration: 'none' }}>Upcoming Movies</a></li>
                                            <li><a href="contact.html" style={{ textDecoration: 'none' }}>Contact Us</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 col-sm-6 sub-two-right mt-5">
                                        <h6>Information</h6>
                                        <ul>
                                            <li><a href="index.html" style={{ textDecoration: 'none' }}>Home</a> </li>
                                            <li><a href="login.html" style={{ textDecoration: 'none' }}>Login</a></li>
                                            <li><a href="contact.html" style={{ textDecoration: 'none' }}>Contact</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 col-sm-6 sub-two-right mt-5">
                                        <h6>Locations</h6>
                                        <ul>
                                            <li><a href="genre.html" style={{ textDecoration: 'none' }}>Asia</a></li>
                                            <li><a href="genre.html" style={{ textDecoration: 'none' }}>France</a></li>
                                            <li><a href="genre.html" style={{ textDecoration: 'none' }}>Taiwan</a></li>
                                            <li><a href="genre.html" style={{ textDecoration: 'none' }}>United States</a></li>
                                            <li><a href="genre.html" style={{ textDecoration: 'none' }}>Korea</a></li>
                                            <li><a href="genre.html" style={{ textDecoration: 'none' }}>United Kingdom</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 col-sm-6 sub-two-right mt-5">
                                        <h6>Newsletter</h6>
                                        <form action="#" className="subscribe mb-3" method="post">
                                            <input type="email" name="email" placeholder="Your Email Address" required="" />
                                            <button><span className="fa fa-envelope-o"></span></button>
                                        </form>
                                        <p>Enter your email and receive the latest news, updates and special offers from us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={
                        function topFunction() {
                            document.body.scrollTop = 0
                            document.documentElement.scrollTop = 0
                        }}
                    id="movetop"
                    title="Go to top">
                    <span className="fa fa-arrow-up" aria-hidden="true"></span>
                </button>
                {execute()}

            </section>
        </footer >
    );
}

export default Footer;