import { Link } from "react-router-dom";
import logo from "../assets/img/logo-furniro.svg";

function PageHero({ title, currentPage }) {
    return (
        <section className="page-hero">
            <div className="page-hero__overlay"></div>
            <div className="page-hero__content">
                <img
                    className="page-hero__logo"
                    src={logo}
                    alt="Furniro"
                />

                <h1 className="page-hero__title">
                    {title}
                </h1>

                <div className="page-hero__breadcrumb">
                    <Link to="/" className="page-hero__breadcrumb-link">
                        Home
                    </Link>

                    <span className="page-hero__breadcrumb-separator">
                        &gt;
                    </span>

                    <span className="page-hero__breadcrumb-current">
                        {currentPage}
                    </span>
                </div>
            </div>
        </section>
    );
}

export default PageHero;