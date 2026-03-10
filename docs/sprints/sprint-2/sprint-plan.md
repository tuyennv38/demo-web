# Sprint 2 Plan

## Thông tin chung
- **Sprint Goal:** Phát triển các tính năng quản lý cốt lõi (Quản lý User, Phân quyền) và cải thiện kiến trúc Layout dựa trên feedback từ Sprint 1.
- **Duration:** 1 tuần (18/03/2026 - 25/03/2026)
- **Status:** `Planning`

## Product Backlog Items (PBI) được chọn

| # | Task ID | Implements / Refs | Mô tả chi tiết | Ước tính | Trạng thái |
|---|---------|-------------------|----------------|-----------|------------|
| 1 | `task:migrate-src-directory-0015` | `feature:src-directory-0009` | Cấu trúc lại dự án: Gom source code (pages, components, layouts, assets, app.vue) vào thư mục `src/` và cấu hình `srcDir` trong Nuxt. | 1h | ✅ Done (`commit:migrate-src-0015`) |
| 2 | `task:refactor-layout-auth-0009` | `feature:tech-debt-0001` | [Tech Debt] Refactor hệ thống Layout: Tách biệt hoàn toàn `auth` layout và `default` dashboard layout từ mức root config thay vì override từng page. | 3h | ⬜ To Do |
| 3 | `task:build-users-table-0010` | `feature:user-management-0006` | Xây dựng Data Table hiển thị danh sách User có phân trang, tìm kiếm và filter theo Role. | 5h | ⬜ To Do |
| 4 | `task:build-user-modal-0011` | `feature:user-management-0006` | Tạo Modal thêm mới/chỉnh sửa thông tin User (Tên, Email, Role, Status) với form validation. | 4h | ⬜ To Do |
| 5 | `task:implement-role-guard-0012` | `feature:rbac-0007` | Bổ sung RBAC (Role-Based Access Control) vào auth middleware. Ví dụ: Chỉ Admin mới truy cập được trang Settings. | 3h | ⬜ To Do |
| 6 | `task:build-settings-page-0013` | `feature:system-settings-0008` | Xây dựng form cấu hình hệ thống cơ bản (Tên Site, Logo URL, Theme Preference). | 4h | ⬜ To Do |
| 7 | `task:optimize-css-vars-0014` | `feature:tech-debt-0002` | [Action Item S1] Dọn dẹp các biến CSS không sử dụng trong `main.css` để tối ưu kích thước file. | 1h | ⬜ To Do |

## Definition of Done (DoD)
- [ ] Code đã được viết và build thành công.
- [ ] Giao diện Responsive trên giả lập Mobile/Tablet.
- [ ] Đã có Universal ID gắn trên mọi Commit và PBI.
- [ ] Các thành phần chức năng vượt qua E2E testing bởi Browser Subagent.
- [ ] Pull Request đã được Review và Merge vào `develop` branch.
