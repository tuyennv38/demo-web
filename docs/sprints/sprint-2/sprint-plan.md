# Sprint 2 Plan
`plan:sprint-2-0001`

## Sprint Goal
Hoàn thiện luồng xác thực (Login, Logout) và xây dựng giao diện Dashboard với biểu đồ doanh thu, đảm bảo người dùng có trải nghiệm mạch lạc.

## Sprint Duration
- **Start:** 2026-03-09
- **End:** 2026-03-10

## Sprint Backlog
| # | Task ID | Implements | Mô tả | Ước lượng | Status |
|---|---------|------------|--------|-----------|--------|
| 1 | `task:setup-routing-0001` | `feature:routing-0001` | Cấu hình React Router cho các trang (Login, Dashboard) và logic guard authentication | 3h | ⬜ To Do |
| 2 | `task:build-login-page-0002` | `feature:login-page-0002` | UI Login form (dark mode), validation email/password, lưu token localStorage | 5h | ⬜ To Do |
| 3 | `task:build-dashboard-page-0003` | `feature:dashboard-page-0003` | Header (Logout), UI Dashboard (dark mode), giả lập dữ liệu và vẽ biểu đồ doanh thu 7 ngày | 5h | ✅ Done (commit:build-dashboard-page-0003) |

## Definition of Done (DoD)
- [ ] Code đã được viết và build thành công
- [ ] Unit tests pass
- [ ] Code review hoàn tất và không còn comment mở
- [ ] Đã được QA Verify (Pass Test và đóng tất cả bug liên quan)
- [ ] Tài liệu đã cập nhật (nếu cần)
- [ ] Demo thành công trên môi trường staging
