# Product Backlog

Tài liệu được tạo tự động từ `docs/PRDs/PRD.md` theo quy trình Pre-Sprint.

## PBI: Điều hướng & Bảo vệ route
- **ID:** `feature:routing-guard-0001`
- **Implements:** `prd:nuxt-dashboard-0001`
- **User Story:** Với vai trò là người dùng, tôi muốn hệ thống tự động chuyển hướng trang dựa trên trạng thái đăng nhập để bảo vệ thông tin.
- **Acceptance Criteria:**
  - [ ] AC1: Truy cập `/` chưa đăng nhập -> redirect `/login`. Đã đăng nhập -> redirect `/dashboard`.
  - [ ] AC2: Truy cập `/login` đã đăng nhập -> redirect `/dashboard`.
  - [ ] AC3: Truy cập `/dashboard` hoặc `/users` chưa đăng nhập -> redirect `/login`.
- **Priority:** Critical
- **Story Points:** 3
- **Status:** 📋 Backlog

## PBI: Trang đăng nhập (Login Page)
- **ID:** `feature:login-page-0002`
- **Implements:** `prd:nuxt-dashboard-0001`
- **User Story:** Với vai trò là người dùng, tôi muốn có giao diện đăng nhập rõ ràng để nhập thông tin tài khoản.
- **Acceptance Criteria:**
  - [ ] AC1: Form căn giữa màn hình với logo/tiêu đề ứng dụng.
  - [ ] AC2: Ô nhập Email (type email) và Mật khẩu (type password).
  - [ ] AC3: Sau khi login thành công, lưu `isAuthenticated = true` và email vào `localStorage`, sau đó redirect sang `/dashboard`.
- **Priority:** Critical
- **Story Points:** 3
- **Status:** 📋 Backlog

## PBI: Trang Dashboard Layout
- **ID:** `feature:dashboard-page-0003`
- **Implements:** `prd:nuxt-dashboard-0001`
- **User Story:** Với vai trò là quản trị viên, tôi muốn có một layout dashboard hoàn chỉnh với sidebar và header để dễ dàng điều hướng quản lý.
- **Acceptance Criteria:**
  - [ ] AC1: Sidebar trái cố định với các mục menu: Dashboard (`/dashboard`), Quản lý người dùng (`/users` - placeholder).
  - [ ] AC2: Header trên cùng hiển thị icon user.
- **Priority:** Critical
- **Story Points:** 5
- **Status:** 📋 Backlog

## PBI: Biểu đồ doanh thu
- **ID:** `feature:revenue-chart-0004`
- **Implements:** `prd:nuxt-dashboard-0001`
- **User Story:** Với vai trò là quản trị viên, tôi muốn xem biểu đồ doanh thu 7 ngày qua biểu đồ đường để nắm bắt tình hình kinh doanh.
- **Acceptance Criteria:**
  - [ ] AC1: Hiển thị Line Chart với trục X là 7 ngày trong tuần, trục Y là USD.
  - [ ] AC2: Sinh dữ liệu giả lập vòng 7 ngày khi component mount.
  - [ ] AC3: Hover vào data point hiển thị tooltip doanh thu chi tiết.
- **Priority:** High
- **Story Points:** 5
- **Status:** 📋 Backlog

## PBI: Thông tin người dùng (User Info)
- **ID:** `feature:user-info-display-0005`
- **Implements:** `prd:nuxt-dashboard-0001`
- **User Story:** Với vai trò là người dùng, tôi muốn xem thông tin tài khoản hiện tại trên header và có định hướng đăng xuất khi cần.
- **Acceptance Criteria:**
  - [ ] AC1: Icon user/avatar ở góc phải header.
  - [ ] AC2: Hover icon user hiển thị tooltip chứa email đã đăng nhập.
  - [ ] AC3: Có nút Đăng xuất, khi click sẽ xóa auth khỏi localStorage và redirect về `/login`.
- **Priority:** Medium
- **Story Points:** 2
- **Status:** 📋 Backlog

## PBI: Validation form đăng nhập
- **ID:** `feature:login-validation-0006`
- **Implements:** `feature:login-page-0002`
- **User Story:** Với vai trò là người dùng, tôi muốn được thông báo lỗi ngay lập tức nếu nhập sai / thiếu thông tin khi bấm nút Đăng nhập.
- **Acceptance Criteria:**
  - [ ] AC1: Email trống báo "Vui lòng nhập email".
  - [ ] AC2: Email sai format regex báo "Email không hợp lệ".
  - [ ] AC3: Password trống báo "Vui lòng nhập mật khẩu".
  - [ ] AC4: Password < 6 ký tự báo "Mật khẩu phải có ít nhất 6 ký tự".
- **Priority:** High
- **Story Points:** 2
- **Status:** 📋 Backlog
