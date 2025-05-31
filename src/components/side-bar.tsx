"use client";
import { useMediaQuery } from "@react-hook/media-query";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Page } from "@/types/page";
import { Lang } from "@/utils/language";

import { Button } from "./button";
import { LanguageSwitcher } from "./language-selector";
import { ModeToggle } from "./mode-toggle";
import { RocketSvgAnimated } from "./rocket-svg-animated";
import { SideBarItems } from "./side-bar-items";
import { SmoothScroll } from "./smooth-scroll";

type SidebarProps = {
  lang: Lang;
  pages: Page[];
};

export function Sidebar({ lang, pages }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(
    typeof window !== "undefined" && window.location.pathname,
  );
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (pathname !== prevPathname) {
      setOpen(false);
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname]);

  useEffect(() => {
    if (open && isMobile && sidebarRef.current) {
      const sidebarElement = sidebarRef.current as HTMLElement | null;
      if (sidebarElement) {
        sidebarElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [open, isMobile]);

  const homeLink = `/${lang}`;

  return (
    <>
      <aside
        ref={sidebarRef}
        className={`left-0 top-0 z-50 flex-col bg-background transition-all duration-300 ease-out ${isMobile ? "mb-10 w-full overflow-y-auto border-b" : "fixed h-full w-64 border-r"} ${isMobile && open ? "absolute h-full" : isMobile ? "fixed h-auto" : "fixed"} `}
      >
        <div
          className={`flex items-center justify-between ${isMobile ? "w-full px-5" : "justify-center md:px-5"} h-28 ${isMobile && open && "hidden"}`}
        >
          <Link
            href={homeLink}
            className="group flex items-center focus:outline-none"
          >
            <div className="flex gap-3 group-focus:ring-2 group-focus:ring-foreground">
              <RocketSvgAnimated />
              <h1 className="text-xl font-bold uppercase">
                Vinicius{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-700 to-red-500 bg-clip-text font-extrabold text-transparent">
                  Pra
                </span>
              </h1>
            </div>
          </Link>

          <div className="flex items-center lg:hidden">
            <ModeToggle />
            <LanguageSwitcher currentLang={lang} />
            <Button
              className="z-50 p-2"
              variant="outline"
              onClick={() => setOpen(!open)}
            >
              <Menu />
            </Button>
          </div>
        </div>

        {!isMobile && (
          <div className="z-40 flex h-[calc(100%-7rem)] flex-col overflow-y-auto overflow-x-hidden lg:flex-grow">
            <SideBarItems lang={lang} pages={pages} />
          </div>
        )}

        {isMobile && open && (
          <SmoothScroll>
            <div className="flex h-28 w-full items-center justify-between px-5">
              <Link
                href={homeLink}
                className="group flex items-center focus:outline-none"
              >
                <div className="flex gap-3 group-focus:ring-2 group-focus:ring-foreground">
                  <RocketSvgAnimated />
                  <h1 className="text-xl font-bold uppercase">
                    Vinicius{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-purple-700 to-red-500 bg-clip-text font-extrabold text-transparent">
                      Pra
                    </span>
                  </h1>
                </div>
              </Link>
              <div className="flex items-center">
                <ModeToggle />
                <LanguageSwitcher currentLang={lang} />
                <Button
                  className="z-50 p-2"
                  variant="outline"
                  onClick={() => setOpen(!open)}
                >
                  <Menu />
                </Button>
              </div>
            </div>
            <div className="z-40 min-h-screen overflow-y-auto overflow-x-hidden px-7 pb-28 transition-all lg:flex-grow">
              <SideBarItems lang={lang} pages={pages} />
            </div>
          </SmoothScroll>
        )}
      </aside>
    </>
  );
}
