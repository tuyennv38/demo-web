# Test Plan — Sprint 1

> Tài liệu này mô tả các Test Cases cho Sprint 1, tập trung vào Prototype v1.0, bao gồm Authentication (Login), Navigation Layout và Dashboard Data Mock. Các bài test phần lớn được thực hiện E2E thông qua Browser Subagent.

## Mục tiêu kiểm thử
* Đảm bảo tính năng xác thực hoạt động đúng, ngăn chặn truy cập trái phép.
* Layout chính (Sidebar, Header) hiển thị chính xác.
* Biểu đồ doanh thu mock data hoạt động.
* Điều hướng cơ bản giữa các trang placeholder.

## Danh sách Test Cases

| # | Test ID | Implements / Refs | Mô tả chi tiết | Loại Test | Trạng thái |
|---|---------|-------------------|----------------|-----------|------------|
| 1 | `test:auth-guard-0001` | `task:implement-auth-middleware-0003`<br>`feature:routing-guard-0001` | Truy cập thử một protected route (ví dụ `/`) khi chưa đăng nhập. Kì vọng hệ thống tự động redirect về trang `/login`. | E2E | ✅ Passed |
| 2 | `test:login-form-validation-0002` | `task:build-login-page-0004`<br>`feature:login-page-0002` | Để trống email/mật khẩu hoặc nhập email sai định dạng rồi click Sign In. Kì vọng xuất hiện text báo lỗi màu đỏ (error state). | E2E | ✅ Passed |
| 3 | `test:login-success-0003` | `task:build-login-page-0004`<br>`feature:login-page-0002` | Nhập đúng `admin@example.com` / `password123`. Click Sign In. Kì vọng sau ~800ms sẽ redirect thành công vào hệ thống. | E2E | ✅ Passed |
| 4 | `test:dashboard-layout-0004` | `task:build-dashboard-layout-0005`<br>`feature:dashboard-page-0003` | Sau khi đăng nhập, quan sát trang chủ (`/`). Kì vọng Sidebar ở bên trái và Header ở phía trên cùng xuất hiện. Trạng thái Glassmorphism được apply. | E2E | ✅ Passed |
| 5 | `test:stat-cards-0005` | `task:build-dashboard-layout-0005`<br>`feature:dashboard-page-0003` | Tại `/`, kiểm tra sự tồn tại của 3 thẻ: Active Users, Total Revenue, New Orders. | E2E | ✅ Passed |
| 6 | `test:revenue-chart-0006` | `task:add-revenue-chart-0006`<br>`feature:revenue-chart-0004` | Kéo xuống phần biểu đồ. Kì vọng khối Canvas của `vue-chartjs` được render, hiển thị được trục toạ độ (vnđ) và hover các điểm ảnh hiện Tooltip dữ liệu mock 7 ngày. | UI/E2E | ✅ Passed |
| 7 | `test:user-dropdown-0007` | `task:add-user-info-header-0007`<br>`feature:user-info-display-0005` | Click vào hình đại diện (Avatar có chữ cái đầu là A) góc trên bên phải Header. Kì vọng một dropdown hiển thị xuống chứa email admin và nút Logout. | E2E | ✅ Passed |
| 8 | `test:logout-0008` | `task:add-user-info-header-0007`<br>`feature:user-info-display-0005` | Ngay khi mở User dropdown, click "Logout". Kì vọng app xoá sạch local storage cho key `isAuthenticated` và push router về `/login`. | E2E | ✅ Passed |
| 9 | `test:navigation-placeholders-0009` | `task:add-placeholder-pages-0008`<br>`feature:dashboard-page-0003` | Thử click vào `Users` và `Settings` trên left-sidebar. Kì vọng trang chuyển đổi mượt mà và hiển thị thông báo "This feature is currently under development" cùng với Icon. | E2E | ✅ Passed |

> **Ghi chú Kết quả Ghi nhận:** Tất cả các test cases trên đã được chạy và xác nhận thành công bởi quá trình kiểm thử tự động của Browser Subagent. Toàn bộ record E2E có thể xem tại `walkthrough.md`.
