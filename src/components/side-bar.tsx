"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RocketSvgAnimated } from "./rocket-svg-animated";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { Button } from "./button";
import { SmoothScroll } from "./smooth-scroll";
import { SideBarItems } from "./side-bar-items";

export function Sidebar() {
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
    if (open && sidebarRef.current) {
      const sidebarElement = sidebarRef.current as HTMLElement | null;
      if (sidebarElement) {
        sidebarElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [open]);

  return (
    <>
      <aside
        ref={sidebarRef}
        className={`left-0 top-0 z-50 flex-col transition-all duration-300 ease-out ${isMobile ? "mb-10 w-full overflow-y-auto border-b bg-background px-5" : "h-full w-64 border-r"} ${isMobile && open ? "absolute h-full transition-all" : "fixed"} `}
      >
        <div
          className={`${isMobile ? "flex w-full items-center justify-between" : ""} ${isMobile && open && "hidden"}`}
        >
          <Link
            href={"/"}
            className="group flex h-28 items-center focus:outline-none md:px-6 lg:px-8"
          >
            <div className="flex gap-3 group-focus:ring-2 group-focus:ring-foreground">
              <RocketSvgAnimated />
              <h1 className="text-xl font-bold uppercase">
                {" "}
                Vinicius{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-700 to-red-500 bg-clip-text font-extrabold text-transparent">
                  Pra
                </span>
              </h1>
            </div>
          </Link>
          <Button
            className="z-50 p-2 lg:hidden"
            variant="outline"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </Button>
        </div>
        {!isMobile && (
          <div className="z-40 h-full overflow-y-auto overflow-x-hidden lg:flex-grow">
            <SideBarItems />
          </div>
        )}
        {isMobile && open && (
          <SmoothScroll>
            <div className="z-50 flex w-full items-center justify-between px-5">
              <Link
                href={"/"}
                className="group flex h-28 items-center px-6 focus:outline-none"
              >
                <div className="flex gap-3 group-focus:ring-2 group-focus:ring-foreground">
                  <RocketSvgAnimated />
                  <h1 className="text-xl font-bold uppercase">
                    {" "}
                    Vinicius{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-purple-700 to-red-500 bg-clip-text font-extrabold text-transparent">
                      Pra
                    </span>
                  </h1>
                </div>
              </Link>
              <Button
                className="z-[9999] p-2"
                variant="outline"
                onClick={() => setOpen(!open)}
              >
                <Menu />
              </Button>
            </div>
            <div className="z-40 min-h-screen overflow-y-auto overflow-x-hidden px-5 transition-none lg:flex-grow">
              <SideBarItems />
            </div>
          </SmoothScroll>
        )}
      </aside>
    </>
  );
}
