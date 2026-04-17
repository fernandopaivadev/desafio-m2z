import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Motin Films - Filmes de Alto Impacto",
    description:
        "Conectamos marcas e pessoas com soluções audiovisuais únicas. Produção de vídeos institucionais, eventos, motion graphics e mais.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
            <body className="min-h-screen flex flex-col font-sans">
                {children}
            </body>
        </html>
    );
}
