import "../globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import { LanguageSwitcher } from "@/components/language-selector";
import { ModeToggle } from "@/components/mode-toggle";
import { Sidebar } from "@/components/side-bar";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Vinicius Pra",
  description:
    "Confira o portfolio de Vinicius Cascaes, um desenvolvedor FullStack especializado em JavaScript e TypeScript. Veja seus projetos, habilidades e entre em contato para oportunidades profissionais.",
};

export default function RootLayout({
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
          <div className="relative flex min-h-screen overflow-x-hidden lg:ml-64">
            <div className="hidden lg:inline-flex">
              <ModeToggle />
              <LanguageSwitcher />
            </div>
            <Sidebar />
            <SmoothScroll>
              <main className="flex h-full flex-col items-center pb-20 pt-40 transition-all lg:ml-64 lg:translate-y-0 lg:pt-20">
                {children}
                <ToastContainer />
              </main>
            </SmoothScroll>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
