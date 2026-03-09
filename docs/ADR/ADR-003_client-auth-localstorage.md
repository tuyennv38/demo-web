# ADR-003: Xác thực Client-side bằng localStorage
`adr:client-auth-localstorage-0003`
> Implements: `prd:non-functional-reqs-0002`

## Bối cảnh (Context)
Ứng dụng cần quản lý trạng thái đăng nhập của người dùng (đã login hay chưa) để điều khiển routing (redirect giữa login và dashboard). PRD yêu cầu không gọi API, không có backend.

## Quyết định (Decision)
Sử dụng **localStorage** để lưu trạng thái đăng nhập. Khi validation thành công, lưu flag `isAuthenticated = "true"` vào localStorage. Kiểm tra flag này để quyết định redirect. Toàn bộ logic xử lý ở client-side.

## Hệ quả (Consequences)
- ✅ Đơn giản, không cần backend/API
- ✅ Trạng thái tồn tại qua các lần refresh trang
- ✅ Phù hợp với scope demo/prototype
- ⚠️ Không an toàn cho production (dễ bypass bằng DevTools)
- ⚠️ Không có cơ chế token expiry hay session management

## Trạng thái
- [x] Đề xuất (Proposed)
- [x] Được chấp thuận (Accepted)
- [ ] Bị thay thế (Superseded by ADR-NNN)
