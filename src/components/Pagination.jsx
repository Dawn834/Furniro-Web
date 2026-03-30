function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    // hàm tạo ra một mảng mới từ một vật thể có độ dài.
    //     Array.from({ length: totalPages }):

    // Array.from() là hàm tạo ra một mảng mới từ một vật thể có độ dài.

    // { length: totalPages }: Bạn đưa vào một Object có thuộc tính length (ví dụ: 5). Máy tính sẽ hiểu: "Hãy tạo cho tôi một mảng có 5 ngăn trống".

    // (_, i) => i + 1: Đây chính là hàm Callback (Công thức xử lý).

    // _ (Dấu gạch dưới): Đây là tham số đầu tiên (giá trị của phần tử). Vì mảng mới tạo đang trống rỗng nên ta không dùng đến nó. Trong lập trình, đặt tên _ là cách nói: "Tôi biết có biến này nhưng tôi lờ nó đi".

    // i: Đây là Index (Số thứ tự của ngăn, bắt đầu từ 0).

    // => i + 1: Hành động trả về giá trị. Vì mảng bắt đầu từ 0, nhưng trang web thường bắt đầu từ trang 1, nên ta lấy index + 1.

    return (
        <div className="pagination">

            {pages.map((page) => (
                <button
                    key={page}
                    className={`pagination__item ${currentPage === page ? "active" : ""}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            <button
                className="pagination__next"
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>

        </div>
    );
}

export default Pagination;