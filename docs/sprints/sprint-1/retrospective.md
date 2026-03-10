# Sprint 1 Retrospective

## 🟢 Went Well (Điều tốt)
- Quá trình thiết lập project Nuxt 3 + TypeScript diễn ra suôn sẻ, hệ thống hoạt động ổn định.
- Việc áp dụng các pattern thiết kế (Glassmorphism, CSS Variables) ngay từ đầu giúp giao diện đồng nhất và dễ dàng scale về sau.
- Quy trình gán Universal ID (bidirectional traceability) giúp việc track commit, code, prd và test cases cực kỳ minh bạch và hiệu quả.
- Việc sử dụng Browser Subagent kiểm thử trực quan E2E phát huy tốt vai trò nghiệm thu tự động.

## 🔴 Needs Improvement (Cần cải thiện)
- **Vấn đề Layout:** Khi gắn `<NuxtPage />` vào layout mặc định, đã không lường trước việc trang Login cần layout độc lập, dẫn đến phải fix bug giữa quá trình nghiệm thu. 
  → **Action:** Trong các tính năng tương lai có thêm routing mới, cần phân tích kỹ Dependency Layout trước khi code.

## 💡 Action Items cho Sprint tiếp theo
| # | Action | Owner | Deadline |
|---|--------|-------|----------|
| 1 | Thêm bước "Layout Analysis" vào quá trình Technical Design trước khi vào Sprint Planning. | System/Agent | Sprint 2 |
| 2 | Cleanup gọn gàng CSS Variables thừa trong file `main.css` để tối ưu kích thước bundle sau khi chốt hoàn toàn bảng màu giao diện. | System/Agent | Sprint 2 |
