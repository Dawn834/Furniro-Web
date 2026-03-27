
import { Link } from "react-router-dom"
import breadcrumb from "../assets/img/Vector-breadcrum.svg";
function Breadcrumb({ items }) {
    return (
        <nav className="breadcrumb ">
            <ul className="breadcrumb__list container">
                {items.map((item, index) => (
                    <li key={index} className="breadcrumb__item">
                          {/* condition ? value_if_true : value_if_false: Ternary operator */}
                        {item.link ? (     
                            <Link to={item.link} className="breadcrumb__link">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="breadcrumb__current">{item.label}</span>
                        )}

                        {index < items.length - 1 && (
                            <span className="breadcrumb__separator"><img src={breadcrumb} alt="vector-breadcrumb" /></span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Breadcrumb;