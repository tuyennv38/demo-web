# Sprint 1 Retrospective

## 🟢 Went Well (Điều tốt)
- Hoàn thành tất cả 6 tasks đúng tiến độ
- Build thành công, không có lỗi biên dịch
- Dark Mode UI chất lượng cao với glassmorphism và gradient
- Tất cả 12 test cases pass ở lần chạy đầu tiên
- Traceability IDs được gán đầy đủ xuyên suốt (PRD → feature → task → code → commit)

## 🔴 Needs Improvement (Cần cải thiện)
- Chưa có unit tests tự động (chỉ có manual E2E)
  → **Action:** Thêm Jest + Testing Library cho Sprint 2
- `create-next-app` không chạy được do conflict với files có sẵn
  → **Action:** Với các dự án mới, init repo sau khi init framework

## 💡 Action Items cho Sprint tiếp theo
| # | Action | Owner | Deadline |
|---|--------|-------|----------|
| 1 | Thêm unit tests tự động (Jest) | Dev | Sprint 2 |
| 2 | Cải thiện UX: thêm loading state khi redirect | Dev | Sprint 2 |
