import { useState } from "react";
function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);

    const pages = [1, 2, 3];

    return (
        <div className="pagination">

            {pages.map((page) => (
                <button
                    key={page}
                    className={`pagination__item ${currentPage === page ? "active" : ""}`}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}

            <button
                className="pagination__next"
                onClick={() => setCurrentPage((prev) => prev + 1)}
            >
                Next
            </button>

        </div>
    );
}

export default Pagination;