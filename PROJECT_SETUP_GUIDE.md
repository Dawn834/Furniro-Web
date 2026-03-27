# Tài Liệu Hướng Dẫn Kỹ Thuật Dự Án (Project Setup & Architecture)

Tài liệu này cung cấp cái nhìn tổng quan về kiến trúc công nghệ, các công cụ đang được sử dụng, và hướng dẫn cài đặt môi trường cho dự án **Furniro Web**. Tài liệu được thiết kế để giúp các lập trình viên mới (hoặc khách hàng) nhanh chóng nắm bắt cấu trúc dự án.

---

## 1. Công Cụ Lõi (Tech Stack)

Dự án này là một web thương mại điện tử (E-commerce) giao diện động, được xây dựng dựa trên các công cụ hiện đại:

*   **Core Framework**: ReactJS (phiên bản 18+).
*   **Build Tool**: Vite (giúp khởi động server và build dự án với tốc độ cực nhanh, thay thế cho Webpack cũ).
*   **Routing**: React Router DOM v6 (quản lý điều hướng trang nội bộ: Home, Shop, Blog, Cart...).
*   **State Management**: Zustand (Quản lý giỏ hàng và trạng thái toàn cục).
*   **Kiến trúc Styling (Đặc biệt)**: Sử dụng kết hợp **SCSS (chuẩn BEM)** và **Tailwind CSS v3**.

---

## 2. Kiến Trúc Styling: Hybrid SCSS + Tailwind CSS

Để tận dụng sự linh hoạt trong quản lý biến chặn vĩ mô của SCSS và tốc độ gõ code nhanh (Utility-first) của Tailwind, dự án này áp dụng mô hình Lai ghép (Hybrid).

*   **SCSS**: Dùng để quản lý các biến màu sắc cốt lõi (`_variables.scss`), cài đặt font chữ (`_fonts.scss`), và style lại các Component phức tạp (Ví dụ: `_button.scss`).
*   **Tailwind CSS**: Dùng để dựng layout (Flexbox, Grid), căn lề (Margin, Padding) trực tiếp lên các thẻ `.jsx` mà không cần phải đặt tên class SCSS mới.
*   **Lưu ý quan trọng về Tailwind**:
    *   Tính năng **Preflight (CSS Reset mặc định của Tailwind) đã bị TẮT** trong `tailwind.config.js` (`corePlugins: { preflight: false }`). Điều này đảm bảo Tailwind không "phá hủy" các CSS cơ bản mà SCSS đang quản lý.
    *   Các biến màu từ SCSS (ví dụ `$color-regular`) đã được đồng bộ hóa sang Tailwind config (với tên gọi `primary`), cho phép gõ `text-primary` hoặc `bg-primary` trong JSX.

---

## 3. Hướng Dẫn Cài Đặt (Cho Developer Mới)

Nếu bạn vừa tải (clone) dự án này về máy, hãy làm theo các bước sau để chạy dự án:

### Bước 1: Cài đặt thư viện (Dependencies)
Mở Terminal tại thư mục gốc của dự án và chạy:
```bash
npm install
```
Lệnh này sẽ tự động đọc file `package.json` và cài đặt đầy đủ React, Vite, Tailwind CSS, PostCSS, và các gói liên quan.

### Bước 2: Khởi động Server Development
Sau khi cài xong, chạy lệnh:
```bash
npm run dev
```
Mở trình duyệt ở địa chỉ `http://localhost:5173` (hoặc cổng mà Vite báo trên terminal) để xem dự án.

### Bước 3: Build dự án để đưa lên Server Thực tế (Production)
```bash
npm run build
```
Code tối ưu hóa sẽ được xuất ra thư mục `dist/`.

---

## 4. Cấu hình Trình Soạn Thảo (Khuyến nghị cho VSCode)

Để tránh tình trạng VSCode báo lỗi (lớp gạch chân màu vàng) dưới các từ khóa `@tailwind` hay `@apply` trong file `.scss`:

1.  Dự án đã có sẵn file `.vscode/settings.json` với nội dung tắt cảnh báo `unknownAtRules`.
2.  **Bắt buộc**: Developer nên cài đặt extension **Tailwind CSS IntelliSense** trên VSCode. Nó sẽ giúp gợi ý mã màu và tự động hoàn thành code (Auto-complete) khi gõ class Tailwind trong các file `.jsx`.

---

## 5. Quy Chuẩn Viết Code (Coding Convention)

*   **Dựng Layout trang**: Sử dụng trực tiếp class của Tailwind trên JSX (`className="flex flex-col container mx-auto"`).
*   **Thiết kế Component tái sử dụng**: Sử dụng SCSS. Để tiết kiệm thời gian viết CSS thông thường, hãy dùng hàm `@apply` của Tailwind bên trong file SCSS.
    
    *Ví dụ trong `_button.scss`:*
    ```scss
    .btn--primary {
        background-color: v.$color-regular; 
        color: v.$tc-white;
        @apply flex justify-center items-center px-5 py-[10px] transition-opacity duration-300 hover:opacity-80;
    }
    ```

---

## 6. Quản Lý Trạng Thái (State Management) với Zustand

Dự án sử dụng **Zustand** để quản lý trạng thái toàn cục (ví dụ: giỏ hàng), thay thế cho Context API truyền thống nhằm tối ưu hiệu năng và giảm boilerplate.

### 6.1. Cấu trúc một Store
Các store được đặt trong thư mục `src/store/`. Một store chuẩn nên tách biệt rõ ràng giữa **State** (dữ liệu) và **Actions** (hàm thay đổi dữ liệu).

*Ví dụ cấu trúc trong `useCartStore.js`:*
```javascript
export const useCartStore = create(
  persist(
    (set, get) => ({
      // 1. State
      cartItems: [],

      // 2. Actions
      addToCart: (product, quantity) => {
        const { cartItems } = get();
        // Logic xử lý...
        set({ cartItems: [...newItems] });
      },
      clearCart: () => set({ cartItems: [] }),
    }),
    { name: 'furniro-cart-storage' } // Middleware lưu localStorage
  )
);
```

### 6.2. Quy tắc sử dụng trong Component (Quan trọng)
Để tránh component bị re-render không cần thiết, **KHÔNG** nên destructure toàn bộ store. Hãy sử dụng **Selectors**.

*   ❌ **SAI (Gây chậm App):**
    ```javascript
    const { cartItems, addToCart } = useCartStore();
    ```
*   ✅ **ĐÚNG (Tối ưu hiệu năng):**
    ```javascript
    const cartItems = useCartStore((state) => state.cartItems);
    const addToCart = useCartStore((state) => state.addToCart);
    ```

### 6.3. Middleware & Nâng cao
*   **`persist`**: Tự động đồng bộ hóa state với `localStorage`. Rất hữu ích cho giỏ hàng (Cart) để khi load lại trang người dùng không bị mất sản phẩm.
