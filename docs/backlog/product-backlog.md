# Product Backlog — Demo Web Application

> Nguồn: [PRD.md](../PRDs/PRD.md)
> Ngày tạo: 2026-03-09

---

### PBI: Điều hướng (Routing)
- **ID:** `feature:routing-0001`
- **Implements:** `prd:demo-web-app-0001`
- **User Story:** Với vai trò là người dùng, tôi muốn được tự động chuyển hướng đến trang login khi truy cập ứng dụng, và chỉ vào Dashboard khi đã login, để đảm bảo luồng trải nghiệm mạch lạc.
- **Acceptance Criteria:**
  - [ ] AC1: Truy cập `/` redirect sang `/login`
  - [ ] AC2: Truy cập `/dashboard` khi chưa login → redirect về `/login`
  - [ ] AC3: Truy cập `/login` khi đã login → redirect sang `/dashboard`
- **Priority:** Critical
- **Story Points:** 3
- **Status:** 📋 Backlog

---

### PBI: Trang Login
- **ID:** `feature:login-page-0002`
- **Implements:** `prd:demo-web-app-0001`
- **User Story:** Với vai trò là người dùng, tôi muốn nhập email và mật khẩu để đăng nhập, với thông báo lỗi khi nhập sai định dạng, để tôi biết cần sửa gì.
- **Acceptance Criteria:**
  - [ ] AC1: Form có 2 ô nhập (email, password) và nút Login
  - [ ] AC2: Email bắt buộc và phải đúng định dạng — hiển thị "Email không hợp lệ" nếu sai
  - [ ] AC3: Password bắt buộc, tối thiểu 6 ký tự — hiển thị "Mật khẩu tối thiểu 6 ký tự" nếu sai
  - [ ] AC4: Validation hợp lệ → lưu trạng thái login vào localStorage → redirect `/dashboard`
  - [ ] AC5: Giao diện Dark Mode, form nằm giữa trang, có micro-animations
- **Priority:** Critical
- **Story Points:** 5
- **Status:** 📋 Backlog

---

### PBI: Trang Dashboard
- **ID:** `feature:dashboard-page-0003`
- **Implements:** `prd:demo-web-app-0001`
- **User Story:** Với vai trò là người dùng đã đăng nhập, tôi muốn xem biểu đồ doanh thu 7 ngày gần nhất trên trang Dashboard, để nắm được tình hình kinh doanh.
- **Acceptance Criteria:**
  - [ ] AC1: Header có tiêu đề "Dashboard" và nút Logout (phải trên)
  - [ ] AC2: Biểu đồ (Line/Bar Chart) hiển thị doanh thu 7 ngày gần nhất
  - [ ] AC3: Dữ liệu doanh thu được giả lập ngẫu nhiên mỗi lần tải trang
  - [ ] AC4: Trục X: 7 ngày gần nhất, Trục Y: Doanh thu (VNĐ)
  - [ ] AC5: Bấm Logout → xóa localStorage → redirect về `/login`
  - [ ] AC6: Giao diện Dark Mode, responsive, có micro-animations
- **Priority:** High
- **Story Points:** 5
- **Status:** 📋 Backlog
