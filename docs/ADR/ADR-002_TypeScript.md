# ADR-002: Sử dụng TypeScript
`adr:language-0002`
> Implements: `prd:tech-stack-0002`

## Bối cảnh (Context)
Dự án cần sự chặt chẽ trong việc định nghĩa kiểu dữ liệu như thông tin Auth, dữ liệu biểu đồ doanh thu.

## Quyết định (Decision)
Sử dụng TypeScript với Strict Mode.

## Hệ quả (Consequences)
- ✅ Bắt lỗi tại thời điểm compile, code dễ đọc và bảo trì.
- ✅ Tích hợp hoàn hảo với hệ sinh thái Nuxt 3.
- ⚠️ Cần định nghĩa rõ ràng các types thay vì dùng "any".

## Trạng thái
- [x] Đề xuất (Proposed)
- [x] Được chấp thuận (Accepted)
- [ ] Bị thay thế
