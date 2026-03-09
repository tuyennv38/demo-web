# PRD - Demo Web Application

## 1. Tổng quan

`prd:demo-web-app-0001`

Xây dựng một ứng dụng web sử dụng **Next.js** (React) với giao diện **Dark Mode**. Ứng dụng gồm 2 trang chính: **Login** và **Dashboard**.

---

## 2. Yêu cầu chức năng

### 2.1. Điều hướng (Routing)

`feature:routing-0001`
> Implements: `prd:demo-web-app-0001`

| Đường dẫn      | Mô tả                                             |
| --------------- | -------------------------------------------------- |
| `/`             | Tự động redirect sang `/login`                     |
| `/login`        | Trang đăng nhập                                    |
| `/dashboard`    | Trang Dashboard (chỉ truy cập được sau khi login)  |

- Khi user chưa login mà truy cập `/dashboard` → redirect về `/login`.
- Khi user đã login mà truy cập `/login` → redirect sang `/dashboard`.

### 2.2. Trang Login (`/login`)

`feature:login-page-0002`
> Implements: `prd:demo-web-app-0001`

**Giao diện:**
- Form đăng nhập nằm giữa trang, bao gồm:
  - **Email** — ô nhập liệu (`<input type="email">`).
  - **Password** — ô nhập liệu (`<input type="password">`).
  - **Nút Login** — submit form.

**Validation (client-side):**

| Trường    | Quy tắc                                                       | Thông báo lỗi             |
| --------- | -------------------------------------------------------------- | -------------------------- |
| Email     | Bắt buộc, đúng định dạng email (có `@` và domain)             | "Email không hợp lệ"      |
| Password  | Bắt buộc, tối thiểu 6 ký tự                                   | "Mật khẩu tối thiểu 6 ký tự" |

**Xử lý:**
- Không gọi API, không kiểm tra tài khoản thực.
- Nếu validation hợp lệ → lưu trạng thái đã login (ví dụ: `localStorage`) → redirect sang `/dashboard`.
- Nếu validation thất bại → hiển thị thông báo lỗi dưới ô nhập tương ứng.

### 2.3. Trang Dashboard (`/dashboard`)

`feature:dashboard-page-0003`
> Implements: `prd:demo-web-app-0001`

**Giao diện:**
- Header hiển thị tiêu đề "Dashboard" và **nút Logout** (phía trên bên phải).
- Nội dung chính: **Biểu đồ doanh thu 7 ngày gần nhất**.

**Biểu đồ doanh thu:**
- Dạng biểu đồ: **Line Chart** hoặc **Bar Chart**.
- Trục X: 7 ngày gần nhất (tính từ ngày hiện tại trở về trước).
- Trục Y: Doanh thu (VNĐ), dữ liệu **giả lập ngẫu nhiên** mỗi lần tải trang.
- Thư viện gợi ý: `recharts` hoặc `chart.js` (react-chartjs-2).

**Nút Logout:**
- Xóa trạng thái login khỏi `localStorage` → redirect về `/login`.

---

## 3. Yêu cầu phi chức năng

`prd:non-functional-reqs-0002`

| Hạng mục        | Yêu cầu                                                                          |
| ---------------- | --------------------------------------------------------------------------------- |
| Framework        | **Next.js** (App Router) + React                                                 |
| Styling          | **Dark Mode** toàn bộ ứng dụng, giao diện hiện đại, cao cấp                      |
| Authentication   | Client-side only (localStorage), không có backend/API                             |
| Responsive       | Hiển thị tốt trên Desktop và Mobile                                               |
| Typography       | Sử dụng Google Fonts (Inter hoặc tương đương)                                     |
| Hiệu ứng        | Micro-animations cho form, nút bấm và chuyển trang                                |

---

## 4. Sơ đồ luồng hoạt động

```mermaid
flowchart TD
    A["User truy cập /"] --> B["Redirect → /login"]
    B --> C["Nhập Email & Password"]
    C --> D{"Validation hợp lệ?"}
    D -- Không --> E["Hiển thị lỗi"]
    E --> C
    D -- Có --> F["Lưu trạng thái login vào localStorage"]
    F --> G["Redirect → /dashboard"]
    G --> H["Hiển thị biểu đồ doanh thu 7 ngày"]
    H --> I["Bấm Logout"]
    I --> J["Xóa trạng thái login"]
    J --> B
```

---

## 5. Công nghệ & Thư viện dự kiến

`prd:tech-stack-0003`

| Công nghệ         | Phiên bản / Chi tiết            |
| ------------------ | ------------------------------- |
| Next.js            | Latest (App Router)             |
| React              | 18+                             |
| Recharts           | Thư viện vẽ biểu đồ            |
| CSS                | Vanilla CSS / CSS Modules       |

---

## 6. Tasks

| ID | Implements | Mô tả |
|----|------------|-------|
| `task:setup-nextjs-project-0001` | `prd:tech-stack-0003` | Khởi tạo dự án Next.js, cài đặt dependencies |
| `task:setup-dark-theme-0002` | `prd:non-functional-reqs-0002` | Thiết lập design system Dark Mode (CSS variables, typography) |
| `task:implement-routing-0003` | `feature:routing-0001` | Xây dựng routing và redirect logic |
| `task:build-login-page-0004` | `feature:login-page-0002` | Dựng trang Login với form, validation và xử lý login |
| `task:build-dashboard-page-0005` | `feature:dashboard-page-0003` | Dựng trang Dashboard với header, logout và biểu đồ doanh thu |
| `task:add-revenue-chart-0006` | `feature:dashboard-page-0003` | Tích hợp Recharts, tạo biểu đồ doanh thu 7 ngày với dữ liệu giả lập |

---

## Phụ lục: Bảng tổng hợp ID & Truy vết

| ID | Loại | Implements | Mô tả ngắn |
|----|------|------------|-------------|
| [`prd:demo-web-app-0001`](#1-tổng-quan) | prd | — (gốc) | Yêu cầu tổng quan ứng dụng web |
| [`prd:non-functional-reqs-0002`](#3-yêu-cầu-phi-chức-năng) | prd | — (gốc) | Yêu cầu phi chức năng |
| [`prd:tech-stack-0003`](#5-công-nghệ--thư-viện-dự-kiến) | prd | — (gốc) | Công nghệ & thư viện |
| [`feature:routing-0001`](#21-điều-hướng-routing) | feature | [`prd:demo-web-app-0001`](#1-tổng-quan) | Điều hướng và redirect |
| [`feature:login-page-0002`](#22-trang-login-login) | feature | [`prd:demo-web-app-0001`](#1-tổng-quan) | Trang đăng nhập |
| [`feature:dashboard-page-0003`](#23-trang-dashboard-dashboard) | feature | [`prd:demo-web-app-0001`](#1-tổng-quan) | Trang Dashboard |
| [`task:setup-nextjs-project-0001`](#6-tasks) | task | [`prd:tech-stack-0003`](#5-công-nghệ--thư-viện-dự-kiến) | Khởi tạo dự án |
| [`task:setup-dark-theme-0002`](#6-tasks) | task | [`prd:non-functional-reqs-0002`](#3-yêu-cầu-phi-chức-năng) | Thiết lập Dark Mode |
| [`task:implement-routing-0003`](#6-tasks) | task | [`feature:routing-0001`](#21-điều-hướng-routing) | Xây dựng routing |
| [`task:build-login-page-0004`](#6-tasks) | task | [`feature:login-page-0002`](#22-trang-login-login) | Dựng trang Login |
| [`task:build-dashboard-page-0005`](#6-tasks) | task | [`feature:dashboard-page-0003`](#23-trang-dashboard-dashboard) | Dựng trang Dashboard |
| [`task:add-revenue-chart-0006`](#6-tasks) | task | [`feature:dashboard-page-0003`](#23-trang-dashboard-dashboard) | Biểu đồ doanh thu |
