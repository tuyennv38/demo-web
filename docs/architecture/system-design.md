# System Design Document
`research:arch-design-0001`
> Implements: `prd:tech-stack-0002`

## 1. Tổng quan kiến trúc
Hệ thống là một Ứng dụng Single Page Application (SPA/SSR) sử dụng Nuxt.js 3. Vì đây là prototype, hệ thống không call API backend mà xử lý xác thực client-side (thông qua `localStorage`) và sinh mock data trực tiếp tại browser.

## 2. Module/Component Design
### 2.1 Cấu trúc thư mục source code
Tuân thủ cấu trúc chuẩn Nuxt.js 3:
```
{project-root}/
├── pages/
│   ├── index.vue        (Trang gốc, redirect handler)
│   ├── login.vue        (Trang đăng nhập)
│   ├── dashboard.vue    (Trang dashboard với chart)
│   └── users.vue        (Placeholder page)
├── components/          (Các component UI dùng chung)
├── middleware/
│   └── auth.global.ts   (Global guard check localStorage)
├── assets/
│   └── css/
│       └── main.css     (Vanilla CSS global styles)
└── nuxt.config.ts
```

### 2.2 Interface/Contract
- **Auth System:** `localStorage.getItem('isAuthenticated')` & `localStorage.getItem('userEmail')`
- **Chart Data:** Hàm `generateMockRevenue()` trả về Array các object `{ day: string, value: number }` cho 7 ngày.

## 3. Data Flow
- Truy cập -> `auth.global.ts` kiểm tra `localStorage`.
- Chưa login -> Redirect `/login`. Login thành công set localStorage.
- Vào `/dashboard` -> load `Chart Component` -> init mock data -> render View.

## 4. Quy ước kỹ thuật
- **Coding Standards:** Component Vue `<script setup lang="ts">`, sử dụng Composition API.
- **Styling:** Vanilla CSS, không dùng Tailwind để phát huy tối đa tuỳ biến giao diện hiện đại theo yêu cầu. Use CSS Variables for colors.
- **Data:** Dùng biểu đồ Chart.js (với vue-chartjs wrapper).

## 5. Khuyến nghị bảo mật / Rủi ro
`localStorage` có thể bị can thiệp bởi XSS, tuy nhiên ở phase prototype client-side thì chấp nhận được. Khi lên v1.0 thực tế cần thay bằng HttpOnly Cookies + JWT Token.
