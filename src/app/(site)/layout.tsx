import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio | Vinicius Cascaes",
  description:
    "Confira o portfólio de Vinicius Cascaes, um desenvolvedor FullStack especializado em JavaScript e TypeScript. Veja seus projetos, habilidades e entre em contato para oportunidades profissionais.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-7xl mx-auto h-full px-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
