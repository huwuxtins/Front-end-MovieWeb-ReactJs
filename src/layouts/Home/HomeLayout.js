import { Fragment } from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

function HomeLayout({ children }) {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
}

export default HomeLayout;