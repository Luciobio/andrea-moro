import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrea Moro Tienda",
  description: "Cursos de flores artesanales de tela y papel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="es">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProvider>
  );
}
