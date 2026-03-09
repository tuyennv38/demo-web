# ADR-001: Chọn Next.js App Router làm framework chính
`adr:nextjs-app-router-0001`
> Implements: `prd:tech-stack-0003`

## Bối cảnh (Context)
Dự án cần xây dựng ứng dụng web với 2 trang (Login, Dashboard), routing giữa các trang, và khả năng mở rộng trong tương lai. Cần chọn framework React phù hợp.

## Quyết định (Decision)
Chọn **Next.js** với **App Router** (thư mục `app/`) thay vì Pages Router. App Router là kiến trúc mới nhất của Next.js, hỗ trợ React Server Components, layout nesting, và routing dựa trên file system.

## Hệ quả (Consequences)
- ✅ Routing dựa trên file system — dễ quản lý, trực quan
- ✅ Built-in layout system — tạo layout chung cho toàn ứng dụng
- ✅ React Server Components — tối ưu performance
- ✅ Đây là hướng đi chính thức của Next.js, được đầu tư phát triển lâu dài
- ⚠️ Một số thư viện cũ có thể chưa tương thích hoàn toàn với App Router

## Trạng thái
- [x] Đề xuất (Proposed)
- [x] Được chấp thuận (Accepted)
- [ ] Bị thay thế (Superseded by ADR-NNN)
