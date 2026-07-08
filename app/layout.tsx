import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#f9f9f9]">
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}