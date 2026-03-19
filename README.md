# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





Cấu trúc thư mục ReactJS cho các lần sau:
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