import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: "300"
});

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
