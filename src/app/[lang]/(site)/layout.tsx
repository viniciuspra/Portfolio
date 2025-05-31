import "../../globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import { LanguageSwitcher } from "@/components/language-selector";
import { ModeToggle } from "@/components/mode-toggle";
import { Sidebar } from "@/components/side-bar";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import { getPages } from "@/sanity/sanity-utils";
import { Page } from "@/types/page";
import { Lang } from "@/utils/language";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: { lang: Lang };
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const title =
    lang === "pt" ? "Portfólio | Vinicius Prá" : "Portfolio | Vinicius Pra";
  const description =
    lang === "pt"
      ? "Portfólio de projetos web de Vinicius Pra."
      : "Vinicius Pra’s web project portfolio.";

  const metadata: Metadata = {
    metadataBase: new URL("https://portfolio-viniciuspra.vercel.app"),
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description: description,
    keywords: [
      "FullStack Developer",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Portfolio",
      "Desenvolvedor",
    ],
    authors: [{ name: "Vinicius Cascaes Prá" }],
    creator: "Vinicius Cascaes Prá",
    openGraph: {
      title: title,
      description: description,
      type: "website",
      locale: lang === "pt" ? "pt_BR" : "en_US",
      url: `https://portfolio-viniciuspra.vercel.app/${lang}`,
      siteName: title,
    },
  };

  return metadata;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  const lang = params.lang || "pt";
  const pages: Page[] = await getPages(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
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
              <LanguageSwitcher currentLang={lang} />
            </div>
            <Sidebar lang={lang} pages={pages} />
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
