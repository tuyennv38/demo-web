# ADR-001: Chọn Nuxt.js 3 làm Framework nền tảng
`adr:framework-0001`
> Implements: `prd:tech-stack-0002`

## Bối cảnh (Context)
Dự án cần phát triển một trang Web Dashboard mạnh mẽ, dễ quản lý route và có tính module hóa cao. Việc tự dựng stack từ đầu tốn thời gian cấu hình Webpack/Vite.

## Quyết định (Decision)
Sử dụng Nuxt.js 3 (Vue 3) làm framework chính.

## Hệ quả (Consequences)
- ✅ Cung cấp sẵn cơ chế file-based routing, auto-imports, middleware.
- ✅ Tối ưu hiệu suất và DX (Developer Experience).
- ⚠️ Cần tuân thủ cấu trúc thư mục chuẩn của Nuxt 3.

## Trạng thái
- [x] Đề xuất (Proposed)
- [x] Được chấp thuận (Accepted)
- [ ] Bị thay thế
