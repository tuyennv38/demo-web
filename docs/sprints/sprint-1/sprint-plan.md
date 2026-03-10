# Sprint 1 Plan
`plan:sprint-1-0001`

## Sprint Goal
Khởi tạo thành công dự án Nuxt 3, thiết lập cấu trúc cơ bản và hoàn thiện toàn bộ các tính năng theo PRD (Login, Dashboard layout, Chart) để release v1.0 prototype.

## Sprint Duration
- **Start:** 2026-03-10
- **End:** 2026-03-17

## Sprint Backlog
| # | Task ID | Implements | Mô tả | Ước lượng | Status |
|---|---------|------------|--------|-----------|--------|
| 1 | `task:setup-nuxtjs-0001` | [`prd:tech-stack-0002`](../../PRDs/PRD.md#4-yêu-cầu-kỹ-thuật) | Khởi tạo dự án Nuxt.js 3 với TypeScript | 2h | ✅ Done (`commit:setup-nuxtjs-0001`) |
| 2 | `task:setup-light-theme-0002` | [`prd:tech-stack-0002`](../../PRDs/PRD.md#4-yêu-cầu-kỹ-thuật) | Thiết lập Light Theme & CSS Variables | 2h | ✅ Done (`commit:setup-light-theme-0002`) |
| 3 | `task:implement-auth-middleware-0003` | [`feature:routing-guard-0001`](../../PRDs/PRD.md#21-điều-hướng--bảo-vệ-route) | Tạo middleware xác thực check localStorage | 2h | ✅ Done (`commit:auth-middleware-0003`) |
| 4 | `task:build-login-page-0004` | [`feature:login-page-0002`](../../PRDs/PRD.md#22-trang-đăng-nhập-login) | Xây dựng trang Login form & validation | 3h | ✅ Done (`commit:build-login-page-0004`) |
| 5 | `task:build-dashboard-layout-0005` | [`feature:dashboard-page-0003`](../../PRDs/PRD.md#23-trang-dashboard-dashboard) | Xây dựng layout Dashboard (sidebar + header) | 4h | ✅ Done (`commit:build-dashboard-layout-0005`) |
| 6 | `task:add-revenue-chart-0006` | [`feature:revenue-chart-0004`](../../PRDs/PRD.md#24-biểu-đồ-doanh-thu) | Tích hợp biểu đồ doanh thu 7 ngày | 4h | ✅ Done (`commit:add-revenue-chart-0006`) |
| 7 | `task:add-user-info-header-0007` | [`feature:user-info-display-0005`](../../PRDs/PRD.md#25-thông-tin-người-dùng-user-info) | Thêm icon user + tooltip + nút đăng xuất | 2h | ✅ Done (`commit:add-user-info-header-0007`) |
| 8 | `task:add-placeholder-pages-0008` | [`feature:dashboard-page-0003`](../../PRDs/PRD.md#23-trang-dashboard-dashboard) | Tạo trang Quản lý người dùng placeholder | 1h | ✅ Done (`commit:add-placeholder-pages-0008`) |

## Definition of Done (DoD)
- [ ] Code đã được viết và build thành công
- [ ] UI/UX đúng với yêu cầu Light Mode
- [ ] Xác thực client-side hoạt động chính xác
- [ ] Code review hoàn tất và không còn comment mở
- [ ] Demo thành công trên môi trường cục bộ

---

## Phụ lục: Bảng tổng hợp ID & Truy vết

| ID | Loại | Implements | Mô tả ngắn |
|----|------|------------|-------------|
| [`plan:sprint-1-0001`](#sprint-1-plan) | plan | — (gốc) | Kế hoạch Sprint 1 |
| [`task:setup-nuxtjs-0001`](#sprint-backlog) | task | [`prd:tech-stack-0002`](../../PRDs/PRD.md#4-yêu-cầu-kỹ-thuật) | Khởi tạo dự án Nuxt.js 3 |
| [`task:setup-light-theme-0002`](#sprint-backlog) | task | [`prd:tech-stack-0002`](../../PRDs/PRD.md#4-yêu-cầu-kỹ-thuật) | Thiết lập Light Theme |
| [`task:implement-auth-middleware-0003`](#sprint-backlog) | task | [`feature:routing-guard-0001`](../../PRDs/PRD.md#21-điều-hướng--bảo-vệ-route) | Tạo middleware xác thực |
| [`task:build-login-page-0004`](#sprint-backlog) | task | [`feature:login-page-0002`](../../PRDs/PRD.md#22-trang-đăng-nhập-login) | Xây dựng trang Login |
| [`task:build-dashboard-layout-0005`](#sprint-backlog) | task | [`feature:dashboard-page-0003`](../../PRDs/PRD.md#23-trang-dashboard-dashboard) | Xây dựng layout Dashboard |
| [`task:add-revenue-chart-0006`](#sprint-backlog) | task | [`feature:revenue-chart-0004`](../../PRDs/PRD.md#24-biểu-đồ-doanh-thu) | Tích hợp biểu đồ doanh thu |
| [`task:add-user-info-header-0007`](#sprint-backlog) | task | [`feature:user-info-display-0005`](../../PRDs/PRD.md#25-thông-tin-người-dùng-user-info) | Thêm icon user & đăng xuất |
| [`task:add-placeholder-pages-0008`](#sprint-backlog) | task | [`feature:dashboard-page-0003`](../../PRDs/PRD.md#23-trang-dashboard-dashboard) | Tạo trang placeholder |
