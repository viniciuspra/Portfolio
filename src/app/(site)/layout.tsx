import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Sidebar } from "@/components/side-bar";
import { SmoothScroll } from "@/components/smooth-scroll";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Vinicius Pra",
  description:
    "Confira o portfolio de Vinicius Cascaes, um desenvolvedor FullStack especializado em JavaScript e TypeScript. Veja seus projetos, habilidades e entre em contato para oportunidades profissionais.",
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
          <div className="relative flex min-h-screen overflow-x-hidden lg:ml-64">
            <ModeToggle />
            <Sidebar />
            <SmoothScroll>
              <main className="flex h-full pt-40 lg:pt-20 flex-col items-center pb-20 transition-all lg:ml-64 lg:translate-y-0">
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
