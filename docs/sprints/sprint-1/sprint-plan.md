# Sprint 1 Plan
`plan:sprint-1-0001`

## Sprint Goal
Hoàn thành toàn bộ ứng dụng Demo Web: trang Login với validation, trang Dashboard với biểu đồ doanh thu 7 ngày, routing bảo vệ, và giao diện Dark Mode premium.

## Sprint Duration
- **Start:** 2026-03-09
- **End:** 2026-03-16

## Sprint Backlog
| # | Task ID | Implements | Mô tả | Ước lượng | Status |
|---|---------|------------|--------|-----------|--------|
| 1 | `task:setup-nextjs-project-0001` | `prd:tech-stack-0003` | Khởi tạo dự án Next.js, cài đặt recharts | 1h | ✅ Done |
| 2 | `task:setup-dark-theme-0002` | `prd:non-functional-reqs-0002` | Thiết lập design system Dark Mode (CSS variables, fonts, globals) | 1h | ✅ Done |
| 3 | `task:implement-routing-0003` | `feature:routing-0001` | Routing logic: redirect `/` → `/login`, route guards | 1h | ✅ Done |
| 4 | `task:build-login-page-0004` | `feature:login-page-0002` | Trang Login: form, validation email/password, lưu login state | 2h | ✅ Done |
| 5 | `task:build-dashboard-page-0005` | `feature:dashboard-page-0003` | Trang Dashboard: header, layout, nút Logout | 1h | ✅ Done |
| 6 | `task:add-revenue-chart-0006` | `feature:dashboard-page-0003` | Biểu đồ doanh thu 7 ngày (Recharts, dữ liệu giả lập) | 1h | ✅ Done |

**Tổng ước lượng:** 7 giờ | **Tổng Story Points:** 13

## Definition of Done (DoD)
- [x] Code đã được viết và build thành công
- [x] Tất cả trang hiển thị đúng với Dark Mode
- [x] Validation hoạt động chính xác
- [x] Routing redirect hoạt động chính xác
- [x] Biểu đồ hiển thị dữ liệu giả lập
- [x] Responsive trên Desktop và Mobile
- [x] Code review hoàn tất
