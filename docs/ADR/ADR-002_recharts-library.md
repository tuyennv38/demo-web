# ADR-002: Chọn Recharts cho biểu đồ doanh thu
`adr:recharts-library-0002`
> Implements: `prd:tech-stack-0003`

## Bối cảnh (Context)
Dashboard cần hiển thị biểu đồ doanh thu 7 ngày. Cần một thư viện chart tương thích React, dễ tùy biến giao diện Dark Mode, và hỗ trợ responsive.

## Quyết định (Decision)
Chọn **Recharts** — thư viện chart xây dựng trên D3.js, thiết kế riêng cho React. Recharts có API declarative, dễ tùy chỉnh màu sắc/theme, và hỗ trợ responsive container tốt.

## Hệ quả (Consequences)
- ✅ API declarative, viết dưới dạng JSX components — phù hợp React
- ✅ Hỗ trợ `ResponsiveContainer` để tự co dãn theo kích thước cha
- ✅ Dễ tùy biến với Dark Mode (custom colors, stroke, fill)
- ✅ Cộng đồng lớn, tài liệu phong phú
- ⚠️ Bundle size lớn hơn chart.js nhưng chấp nhận được cho dự án này

## Trạng thái
- [x] Đề xuất (Proposed)
- [x] Được chấp thuận (Accepted)
- [ ] Bị thay thế (Superseded by ADR-NNN)
