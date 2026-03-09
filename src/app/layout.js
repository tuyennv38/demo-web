/**
 * @implements task:setup-nextjs-project-0001
 * @implements prd:demo-web-app-0001
 * 
 * Root Layout — Next.js App Router root layout with Inter font and global styles
 */
import './globals.css';

export const metadata = {
    title: 'Demo Web — Dashboard',
    description: 'Demo Web Application with Login and Dashboard',
};

export default function RootLayout({ children }) {
    return (
        <html lang="vi">
            <body>{children}</body>
        </html>
    );
}
