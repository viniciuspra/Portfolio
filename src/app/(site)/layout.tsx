import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/side-bar";

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
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen md:ml-52 lg:ml-64">
            <Sidebar />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
