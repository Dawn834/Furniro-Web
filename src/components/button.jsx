import { Link } from "react-router-dom"

function Button({
    to,
    onClick,
    children,
    variant = "primary"
}) {
    const className = `btn btn--${variant}`

    if (to) {
        return (
            <Link to={to} className={className}>
                {children}
            </Link>
        )
    }

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
}

export default Button