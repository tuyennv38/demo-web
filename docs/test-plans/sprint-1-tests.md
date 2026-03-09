# Test Plan — Sprint 1

> Ngày: 2026-03-09

| # | Test ID | Implements | Mô tả | Loại | Trạng thái |
|---|---------|------------|--------|------|------------|
| 1 | `test:root-redirect-0001` | `task:implement-routing-0003` | Truy cập `/` → redirect `/login` | E2E | ✅ Pass |
| 2 | `test:dashboard-guard-0002` | `task:implement-routing-0003` | Truy cập `/dashboard` khi chưa login → redirect `/login` | E2E | ✅ Pass |
| 3 | `test:login-guard-0003` | `task:implement-routing-0003` | Truy cập `/login` khi đã login → redirect `/dashboard` | E2E | ✅ Pass |
| 4 | `test:empty-form-validation-0004` | `task:build-login-page-0004` | Submit form trống → hiển thị lỗi cả 2 trường | E2E | ✅ Pass |
| 5 | `test:invalid-email-validation-0005` | `task:build-login-page-0004` | Nhập email "abc" → hiển thị "Email không hợp lệ" | E2E | ✅ Pass |
| 6 | `test:short-password-validation-0006` | `task:build-login-page-0004` | Nhập password < 6 ký tự → hiển thị "Mật khẩu tối thiểu 6 ký tự" | E2E | ✅ Pass |
| 7 | `test:successful-login-0007` | `task:build-login-page-0004` | Nhập email + password hợp lệ → redirect `/dashboard` | E2E | ✅ Pass |
| 8 | `test:dashboard-display-0008` | `task:build-dashboard-page-0005` | Dashboard hiển thị header, tiêu đề, nút Logout | E2E | ✅ Pass |
| 9 | `test:revenue-chart-0009` | `task:add-revenue-chart-0006` | Biểu đồ doanh thu 7 ngày hiển thị, dữ liệu ngẫu nhiên | E2E | ✅ Pass |
| 10 | `test:logout-flow-0010` | `task:build-dashboard-page-0005` | Bấm Logout → xóa localStorage → redirect `/login` | E2E | ✅ Pass |
| 11 | `test:dark-mode-0011` | `task:setup-dark-theme-0002` | Toàn bộ app sử dụng Dark Mode, glassmorphism, gradient | Visual | ✅ Pass |
| 12 | `test:build-success-0012` | `task:setup-nextjs-project-0001` | `npm run build` thành công, không lỗi | Build | ✅ Pass |
