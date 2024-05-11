"use client";
import {
  Bookmark,
  Compass,
  FileText,
  Github,
  Layers,
  Linkedin,
  Menu,
  Package,
  Phone,
  Puzzle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RocketSvgAnimated } from "./rocket-svg-animated";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { Button } from "./button";
import { SmoothScroll } from "./smooth-scroll";

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

  const sideBarItemStyle =
    "truncate text-sm tracking-wide group-hover:text-foreground group-hover:font-medium";
  const sideBarIconStyle =
    "inline-flex items-center justify-center rounded-lg border p-1 group-hover:bg-blue-500 group-hover:text-white";
  const sideBarLinkStyle =
    "group relative flex h-10 flex-row items-center gap-2 rounded-lg px-2 pr-6 transition-all hover:bg-accent group-focus:ring-2";

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
            <ul className="flex flex-col space-y-2 py-3 md:px-4 lg:px-6">
              <li className="group">
                <Link href="/" className={sideBarLinkStyle}>
                  <span
                    className={`${pathname === "/" ? "bg-blue-500 text-white" : "text-foreground/80 dark:text-muted-foreground/80"} ${sideBarIconStyle} `}
                  >
                    <Compass size={16} />
                  </span>
                  <span
                    className={`${pathname === "/" ? "text-foreground dark:text-white" : "text-muted-foreground/90 dark:text-muted-foreground/80"} ${sideBarItemStyle}`}
                  >
                    Explore
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link href="/services" className={sideBarLinkStyle}>
                  <span
                    className={`${pathname === "/services" ? "bg-blue-500 text-white" : "text-foreground/80 dark:text-muted-foreground/80"} ${sideBarIconStyle} `}
                  >
                    <Package size={16} />
                  </span>
                  <span
                    className={`${pathname === "/services" ? "text-foreground dark:text-white" : "text-muted-foreground/90 dark:text-muted-foreground/80"} ${sideBarItemStyle}`}
                  >
                    Services
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link href="/projects" className={sideBarLinkStyle}>
                  <span
                    className={`${pathname.includes("/projects") ? "bg-blue-500 text-white" : "text-foreground/80 dark:text-muted-foreground/80"} ${sideBarIconStyle} `}
                  >
                    <Puzzle size={16} />
                  </span>
                  <span
                    className={`${pathname.includes("/projects") ? "text-foreground dark:text-white" : "text-muted-foreground/90 dark:text-muted-foreground/80"} ${sideBarItemStyle}`}
                  >
                    Projects
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link href="/contact" className={sideBarLinkStyle}>
                  <span
                    className={`${pathname === "/contact" ? "bg-blue-500 text-white" : "text-foreground/80 dark:text-muted-foreground/80"} ${sideBarIconStyle} `}
                  >
                    <Phone size={16} />
                  </span>
                  <span
                    className={`${pathname === "/contact" ? "text-foreground dark:text-white" : "text-muted-foreground/90 dark:text-muted-foreground/80"} ${sideBarItemStyle}`}
                  >
                    Contact
                  </span>
                </Link>
              </li>
              <li className="pt-6">
                <div className="flex h-6 flex-row items-center">
                  <div className="text-sm font-light tracking-wide">
                    Resources
                  </div>
                </div>
              </li>
              <li className="group">
                <Link href="/favorites" className={sideBarLinkStyle}>
                  <span
                    className={`${pathname === "/favorites" ? "bg-blue-500 text-white" : "text-foreground/80 dark:text-muted-foreground/80"} ${sideBarIconStyle} `}
                  >
                    <Bookmark size={16} />
                  </span>
                  <span
                    className={`${pathname === "/favorites" ? "text-foreground dark:text-white" : "text-muted-foreground/90 dark:text-muted-foreground/80"} ${sideBarItemStyle}`}
                  >
                    Favorites
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link href="/stack" className={sideBarLinkStyle}>
                  <span
                    className={`${pathname === "/stack" ? "bg-blue-500 text-white" : "text-foreground/80 dark:text-muted-foreground/80"} ${sideBarIconStyle} `}
                  >
                    <Layers size={16} />
                  </span>
                  <span
                    className={`${pathname === "/stack" ? "text-foreground dark:text-white" : "text-muted-foreground/90 dark:text-muted-foreground/80"} ${sideBarItemStyle}`}
                  >
                    Stack
                  </span>
                </Link>
              </li>

              <li className="pt-6">
                <div className="flex h-6 flex-row items-center">
                  <div className="text-sm font-light tracking-wide">
                    Socials
                  </div>
                </div>
              </li>
              <li className="group">
                <Link
                  href="https://www.linkedin.com/in/vinicius-cascaes-pra/"
                  target="_blank"
                  className={sideBarLinkStyle}
                >
                  <span className={sideBarIconStyle}>
                    <Linkedin size={16} />
                  </span>
                  <span className={sideBarItemStyle}>LinkedIn</span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="https://github.com/Viniciuspra"
                  target="_blank"
                  className={sideBarLinkStyle}
                >
                  <span className={sideBarIconStyle}>
                    <Github size={16} />
                  </span>
                  <span className={sideBarItemStyle}>GitHub</span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/Currículo-Vinicius-Cascaes-Prá.pdf"
                  target="_blank"
                  className={sideBarLinkStyle}
                >
                  <span className={sideBarIconStyle}>
                    <FileText size={16} />
                  </span>
                  <span className={sideBarItemStyle}>Read CV</span>
                </Link>
              </li>
            </ul>
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
              <ul className="flex flex-col space-y-2 py-3 md:px-4 lg:px-6">
                <li className="group">
                  <Link href="/" className={sideBarLinkStyle}>
                    <span
                      className={`${pathname === "/" ? "bg-blue-500 text-white" : "text-foreground/80 dark:text-muted-foreground/80"} ${sideBarIconStyle} `}
                    >
                      <Compass size={16} />
                    </span>
                    <span
                      className={`${pathname === "/" ? "text-foreground dark:text-white" : "text-muted-foreground/90 dark:text-muted-foreground/80"} ${sideBarItemStyle}`}
                    >
                      Explore
                    </span>
                  </Link>
                </li>
                <li className="group">
                  <Link href="/services" className={sideBarLinkStyle}>
                    <span
                      className={`${pathname === "/services" ? "bg-blue-500 text-white" : "text-foreground/80 dark:text-muted-foreground/80"} ${sideBarIconStyle} `}
                    >
                      <Package size={16} />
                    </span>
                    <span
                      className={`${pathname === "/services" ? "text-foreground dark:text-white" : "text-muted-foreground/90 dark:text-muted-foreground/80"} ${sideBarItemStyle}`}
                    >
                      Services
                    </span>
                  </Link>
                </li>
                <li className="group">
                  <Link href="/projects" className={sideBarLinkStyle}>
                    <span
                      className={`${pathname.includes("/projects") ? "bg-blue-500 text-white" : "text-foreground/80 dark:text-muted-foreground/80"} ${sideBarIconStyle} `}
                    >
                      <Puzzle size={16} />
                    </span>
                    <span
                      className={`${pathname.includes("/projects") ? "text-foreground dark:text-white" : "text-muted-foreground/90 dark:text-muted-foreground/80"} ${sideBarItemStyle}`}
                    >
                      Projects
                    </span>
                  </Link>
                </li>
                <li className="group">
                  <Link href="/contact" className={sideBarLinkStyle}>
                    <span
                      className={`${pathname === "/contact" ? "bg-blue-500 text-white" : "text-foreground/80 dark:text-muted-foreground/80"} ${sideBarIconStyle} `}
                    >
                      <Phone size={16} />
                    </span>
                    <span
                      className={`${pathname === "/contact" ? "text-foreground dark:text-white" : "text-muted-foreground/90 dark:text-muted-foreground/80"} ${sideBarItemStyle}`}
                    >
                      Contact
                    </span>
                  </Link>
                </li>
                <li className="pt-6">
                  <div className="flex h-6 flex-row items-center">
                    <div className="text-sm font-light tracking-wide">
                      Resources
                    </div>
                  </div>
                </li>
                <li className="group">
                  <Link href="/favorites" className={sideBarLinkStyle}>
                    <span
                      className={`${pathname === "/favorites" ? "bg-blue-500 text-white" : "text-foreground/80 dark:text-muted-foreground/80"} ${sideBarIconStyle} `}
                    >
                      <Bookmark size={16} />
                    </span>
                    <span
                      className={`${pathname === "/favorites" ? "text-foreground dark:text-white" : "text-muted-foreground/90 dark:text-muted-foreground/80"} ${sideBarItemStyle}`}
                    >
                      Favorites
                    </span>
                  </Link>
                </li>
                <li className="group">
                  <Link href="/stack" className={sideBarLinkStyle}>
                    <span
                      className={`${pathname === "/stack" ? "bg-blue-500 text-white" : "text-foreground/80 dark:text-muted-foreground/80"} ${sideBarIconStyle} `}
                    >
                      <Layers size={16} />
                    </span>
                    <span
                      className={`${pathname === "/stack" ? "text-foreground dark:text-white" : "text-muted-foreground/90 dark:text-muted-foreground/80"} ${sideBarItemStyle}`}
                    >
                      Stack
                    </span>
                  </Link>
                </li>

                <li className="pt-6">
                  <div className="flex h-6 flex-row items-center">
                    <div className="text-sm font-light tracking-wide">
                      Socials
                    </div>
                  </div>
                </li>
                <li className="group">
                  <Link
                    href="https://www.linkedin.com/in/vinicius-cascaes-pra/"
                    target="_blank"
                    className={sideBarLinkStyle}
                  >
                    <span className={sideBarIconStyle}>
                      <Linkedin size={16} />
                    </span>
                    <span className={sideBarItemStyle}>LinkedIn</span>
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="https://github.com/Viniciuspra"
                    target="_blank"
                    className={sideBarLinkStyle}
                  >
                    <span className={sideBarIconStyle}>
                      <Github size={16} />
                    </span>
                    <span className={sideBarItemStyle}>GitHub</span>
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/Currículo-Vinicius-Cascaes-Prá.pdf"
                    target="_blank"
                    className={sideBarLinkStyle}
                  >
                    <span className={sideBarIconStyle}>
                      <FileText size={16} />
                    </span>
                    <span className={sideBarItemStyle}>Read CV</span>
                  </Link>
                </li>
              </ul>
            </div>
          </SmoothScroll>
        )}
      </aside>
    </>
  );
}
