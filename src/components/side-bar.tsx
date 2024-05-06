"use client";
import {
  Bookmark,
  Compass,
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

export default function Sidebar() {
  const pathname = usePathname();

  const sideBarItemStyle =
    "truncate text-sm tracking-wide text-muted-foreground/50 group-hover:text-white";
  const sideBarIconStyle =
    "inline-flex items-center justify-center rounded-lg border p-1 text-muted-foreground/50 group-hover:bg-blue-500 group-hover:text-white";
  const sideBarLinkStyle =
    "group relative flex h-10 flex-row items-center gap-2 rounded-lg px-2 pr-6 transition-all hover:bg-accent focus:outline-none";

  return (
    <>
      <button></button>
      <aside className="fixed left-0 top-0 h-full -translate-x-[100%] flex-col border-r transition-all duration-300 ease-out md:w-52 md:translate-x-0 lg:w-64">
        <Link
          href={"/"}
          className="flex h-28 items-center justify-center gap-3"
        >
          <RocketSvgAnimated />

          <h1 className="text-xl font-semibold "> Vinicius Pra</h1>
        </Link>
        <div className="flex-grow overflow-y-auto overflow-x-hidden">
          <ul className="flex flex-col space-y-2 md:px-4 lg:px-6">
            <li>
              <Link href="/" className={sideBarLinkStyle}>
                <span
                  className={`${pathname === "/" ? "bg-blue-500 text-white" : ""} ${sideBarIconStyle} `}
                >
                  <Compass size={16} />
                </span>
                <span
                  className={`${pathname === "/" ? "text-white" : ""} ${sideBarItemStyle}`}
                >
                  Explore
                </span>
              </Link>
            </li>
            <li>
              <Link href="/services" className={sideBarLinkStyle}>
                <span
                  className={`${pathname === "/services" ? "bg-blue-500 text-white" : ""} ${sideBarIconStyle} `}
                >
                  <Package size={16} />
                </span>
                <span
                  className={`${pathname === "/services" ? "text-white" : ""} ${sideBarItemStyle}`}
                >
                  Services
                </span>
              </Link>
            </li>
            <li>
              <Link href="/projects" className={sideBarLinkStyle}>
                <span
                  className={`${pathname === "/projects" ? "bg-blue-500 text-white" : ""} ${sideBarIconStyle} `}
                >
                  <Puzzle size={16} />
                </span>
                <span
                  className={`${pathname === "/projects" ? "text-white" : ""} ${sideBarItemStyle}`}
                >
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className={sideBarLinkStyle}>
                <span
                  className={`${pathname === "/contact" ? "bg-blue-500 text-white" : ""} ${sideBarIconStyle} `}
                >
                  <Phone size={16} />
                </span>
                <span
                  className={`${pathname === "/contact" ? "text-white" : ""} ${sideBarItemStyle}`}
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
            <li>
              <Link href="/favorites" className={sideBarLinkStyle}>
                <span
                  className={`${pathname === "/favorites" ? "bg-blue-500 text-white" : ""} ${sideBarIconStyle} `}
                >
                  <Bookmark size={16} />
                </span>
                <span
                  className={`${pathname === "/favorites" ? "text-white" : ""} ${sideBarItemStyle}`}
                >
                  Favorites
                </span>
              </Link>
            </li>
            <li>
              <Link href="/stack" className={sideBarLinkStyle}>
                <span
                  className={`${pathname === "/stack" ? "bg-blue-500 text-white" : ""} ${sideBarIconStyle} `}
                >
                  <Layers size={16} />
                </span>
                <span
                  className={`${pathname === "/stack" ? "text-white" : ""} ${sideBarItemStyle}`}
                >
                  Stack
                </span>
              </Link>
            </li>
            <li className="pt-6">
              <div className="flex h-6 flex-row items-center">
                <div className="text-sm font-light tracking-wide">Socials</div>
              </div>
            </li>
            <li>
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
            <li>
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
          </ul>
        </div>
      </aside>
    </>
  );
}
