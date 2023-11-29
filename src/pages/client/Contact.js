import { Fragment } from "react";

function Contact() {
    return (
        <Fragment>
            <section className="w3l-contact-1">
                <div className="contacts-9 py-5">
                    <div className="container py-lg-4">
                        <div className="headerhny-title text-center">
                            <h4 className="sub-title text-center">Contact us</h4>
                            <h3 className="hny-title mb-0">Leave a Message</h3>
                            <p className="hny-title mb-lg-5 mb-4">If you have a question regarding our services, feel free to
                                contact us using the form below.</p>
                        </div>
                        <div className="contact-view mt-lg-5 mt-4">
                            <div className="conhny-form-section">
                                <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="formhny-sec">
                                    <div className="form-grids">
                                        <div className="form-input">
                                            <input type="text" name="w3lName" id="w3lName" placeholder="Enter your name *"
                                                required="" />
                                        </div>
                                        <div className="form-input">
                                            <input type="text" name="w3lSubject" id="w3lSubject" placeholder="Enter subject "
                                                required />
                                        </div>
                                        <div className="form-input">
                                            <input type="email" name="w3lSender" id="w3lSender" placeholder="Enter your email *"
                                                required />
                                        </div>
                                        <div className="form-input">
                                            <input type="text" name="w3lPhone" id="w3lPhone"
                                                placeholder="Enter your Phone Number *" required />
                                        </div>
                                    </div>
                                    <div className="form-input mt-4">
                                        <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your query here"
                                            required=""></textarea>
                                    </div>
                                    <div className="submithny text-right mt-4">
                                        <button className="btn read-button"
                                            style={{backgroundColor: '#df0e62', color: '#fff'}}>Submit Message</button>
                                    </div>
                                </form>
                            </div>

                            <div className="d-grid contact-addres-inf mt-5 pt-lg-4">
                                <div className="contact-info-left d-grid">
                                    <div className="contact-info">
                                        <div className="icon">
                                            <span className="fa fa-location-arrow" aria-hidden="true"></span>
                                        </div>
                                        <div className="contact-details">
                                            <h4>Address:</h4>
                                            <p>No. 19, Nguyen Huu Tho street, Tan Hung ward, District 7, Ho Chi Minh city</p>
                                        </div>
                                    </div>
                                    <div className="contact-info">
                                        <div className="icon">
                                            <span className="fa fa-phone" aria-hidden="true"></span>
                                        </div>
                                        <div className="contact-details">
                                            <h4>Phone:</h4>
                                            <p><a href="tel:+598-658-456">+84 342523573</a></p>
                                            <p><a href="tel:+598-658-457">+84 932698623</a></p>
                                        </div>
                                    </div>
                                    <div className="contact-info">
                                        <div className="icon">
                                            <span className="fa fa-envelope-open-o" aria-hidden="true"></span>
                                        </div>
                                        <div className="contact-details">
                                            <h4>Mail:</h4>
                                            <p><a href="mailto:mail@example.com" className="email">thaitudoan249@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Contact;