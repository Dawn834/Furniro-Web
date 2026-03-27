# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





## Cấu trúc thư mục ReactJS cho các lần sau:
furniro-react/
├── src/
│   ├── assets/        # Hình ảnh (img), fonts, file SCSS global (styles)
│   │
│   ├── components/    # Chỉ chứa UI Components dùng chung (Dumb/Static Components)
│   │   ├── common/    # Nút bấm (Button), Input, Modal, Loading spinner...
│   │   └── layout/    # Header, Footer, Sidebar, Container...
│   │
│   ├── features/      # (QUAN TRỌNG) Nhóm theo từng TÍNH NĂNG cụ thể
│   │   ├── cart/      # Chứa mọi thứ về giỏ hàng: CartItem.jsx, CartSidebar.jsx...
│   │   ├── products/  # ProductCard.jsx, ProductGrid.jsx, ProductTabs.jsx...
│   │   └── checkout/  # CheckoutForm.jsx, OrderSummary.jsx...
│   │
│   ├── pages/         # Nơi "lắp ráp" các Features và Components lại thành trang
│   │   ├── HomePage.jsx
│   │   ├── ShopPage.jsx
│   │   └── CartPage.jsx
│   │
│   ├── hooks/         # Custom Hooks (Chuẩn bị cho Bước 2 của bạn)
│   │   ├── useCart.js         # Logic thêm/sửa/xóa giỏ hàng
│   │   └── useClickOutside.js # Logic đóng sidebar khi click ra ngoài
│   │
│   ├── context/       # (Hoặc store/) Chứa Global State dùng chung toàn App
│   │   └── CartContext.jsx    # Lưu trữ dữ liệu giỏ hàng để Header và ShopPage cùng đọc
│   │
│   ├── utils/         # Các hàm helper logic (Không chứa giao diện)
│   │   ├── formatters.js      # Hàm format tiền tệ (VD: đổi 2500000 -> Rp 2.500.000)
│   │   └── constants.js       # Chứa các hằng số cấu hình
│   │
│   ├── services/      # (Chuẩn bị cho Bước 3) Chuyên xử lý API gọi data
│   │   └── api.js             # Hàm fetch dữ liệu sản phẩm từ backend
│   │
│   ├── App.jsx        # Trái tim của App, chứa định tuyến (React Router)
│   └── main.jsx       # Entry point render ra DOM

---

# Kế hoạch phát triển Web Động (Dynamic Web App)

## Lộ trình chi tiết

### Giai đoạn 1: Quản lý Trạng thái Toàn cục (Global State) & Giỏ hàng
Đây là tính năng quan trọng nhất của một trang E-commerce. Bạn cần quản lý danh sách sản phẩm mà user đã chọn mua.
*   **Công nghệ**: Sử dụng **Zustand** (Thư viện quản lý state cực nhẹ và mạnh mẽ).
*   **Các tính năng cần làm**:
    - [ ] Khởi tạo Store (`useCartStore`) để lưu trữ mảng `cartItems`.
    - [ ] Viết các hàm: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`.
    - [ ] Gắn Store vào các nút "Add to Cart" ở trang `Shop`, `Product detail`.
    - [ ] Hiển thị dữ liệu động (số lượng cảnh báo, tổng tiền) trên `CartSidebar` và trang `Cart`.
    - [ ] Tính toán tự động Subtotal và Total price thông qua Getter trong Store.

### Giai đoạn 2: Định tuyến Động (Dynamic Routing) & Lấy Dữ liệu
Hiện tại trang web mới chỉ cho phép truy cập theo đường dẫn cố định. Ta cần setup luồng dữ liệu chuẩn chỉnh.
*   **Các tính năng cần làm**:
    - [ ] Chuyển file `productData.js` sang dạng thao tác bất đồng bộ (giả lập việc gọi API bằng Promise hoặc Context), hoặc dùng `json-server` để giả lập database.
    - [ ] Định nghĩa Route động cho chi tiết sản phẩm: Tùy biến `/product/:id` trong `App.jsx`.
    - [ ] Lấy URL ID (sử dụng hook `useParams` của `react-router-dom`), sau đó dùng ID này để tìm đúng sản phẩm trong Data (hoặc gọi API lấy thông tin) rồi render ra trang `product-page.jsx`.
    
### Giai đoạn 3: Tính năng Lọc & Tìm kiếm nâng cao
Cải thiện trải nghiệm mua sắm ở trang Shop (Cửa hàng) để người dùng lấy dữ liệu dễ dàng.
*   **Các tính năng cần làm**:
    - [ ] Viết logic cho thanh tìm kiếm (truy vấn theo tên).
    - [ ] Viết logic Lọc sản phẩm (Filter) theo Category, Giá tiền mảng dữ liệu.
    - [ ] Viết chức năng sắp xếp (Sort by Price, Name).

### Giai đoạn 4: Hoàn thiện Form & Checkout
Xử lý các thao tác tương tác của người dùng cuối.
*   **Các tính năng cần làm**:
    - [ ] Validation (Kiểm tra dữ liệu) cho các form liên hệ (Contact) và Đặt hàng (Checkout). Bạn có thể tự viết React Form hoặc dùng thư viện như `react-hook-form` & `yup`.
    - [ ] Giả lập việc bấm nút "Place Order": Xóa sạch giỏ hàng (clear cart) và hiện thông báo đặt hàng thành công.
    - [ ] Nâng cao (Optional): Tạo fake Login/Logout auth flow tĩnh để bảo vệ trang Checkout.

---

## Task Checklist (To-Do List)

### 1: Core State Management (Shopping Cart)
- [ ] Set up React Context API for Cart State
- [ ] Implement Add to Cart logic across products
- [ ] Implement Update/Remove item in Cart
- [ ] Calculate dynamic subtotal and total prices

### 2: Dynamic Routing & Data Fetching
- [ ] Simulate API calls from `productData.js` (Promises)
- [ ] Set up dynamic routing for `/product/:id`
- [ ] Render dynamic product details using URL params

### 3: Advanced Features & Forms
- [ ] Implement Product Search logic
- [ ] Implement Category Filtering on Shop page
- [ ] Build Form Validation for Contact and Checkout pages
- [ ] Simulate "Place Order" feature (Clear cart on success)