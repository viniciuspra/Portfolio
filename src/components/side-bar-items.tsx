"use client";

import { useMediaQuery } from "@react-hook/media-query";
import { motion } from "framer-motion";
import {
  Bookmark,
  Compass,
  FileText,
  Github,
  Layers,
  Linkedin,
  type LucideProps,
  Package,
  Phone,
  Puzzle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { Page } from "@/types/page";
import { Lang } from "@/utils/language";

type SideBarItemsProps = {
  lang: Lang;
  pages: Page[];
};

const iconMap: { [key: string]: React.FC<LucideProps> } = {
  Bookmark,
  Compass,
  FileText,
  Github,
  Linkedin,
  Layers,
  Package,
  Phone,
  Puzzle,
};

const getIcon = (
  name: string | undefined,
): React.ComponentType<LucideProps> | null => {
  if (!name || !(name in iconMap)) {
    return null;
  }
  return iconMap[name];
};

export function SideBarItems({ lang, pages }: SideBarItemsProps) {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const groupedPages = pages.reduce(
    (acc, page) => {
      const group = page.group || (lang === "pt" ? "Outros" : "Other");
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(page);
      return acc;
    },
    {} as Record<string, Page[]>,
  );

  return (
    <nav className="flex flex-col gap-10 px-5 py-10 md:py-2">
      {Object.entries(groupedPages).map(([group, pagesInGroup]) => (
        <div key={group} className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase text-muted-foreground">
            {group}
          </h2>
          <div className="flex flex-col gap-1">
            {pagesInGroup.map((page) => {
              const raw = page.slug ?? "";
              const slugClean = raw.replace(/^\/+|\/+$/g, "");
              const slugPath = slugClean ? `/${slugClean}` : "";
              const href = `/${lang}${slugPath}`;
              const normalize = (u: string) => u.replace(/\/$/, "");
              const normalizedPath = normalize(pathname);
              const normalizedHref = normalize(href);
              const isActive = normalizedPath === normalizedHref;
              const IconComponent = getIcon(page.icon);

              const isSocial = page.group === "Socials";

              let socialHref = raw;
              if (page.title === "Read CV") {
                socialHref =
                  lang === "en"
                    ? "/Curriculum-Vinicius-Cascaes-Prá.pdf"
                    : "/Currículo-Vinicius-Cascaes-Prá.pdf";
              } else if (!/^https?:\/\//.test(raw)) {
                socialHref = raw.startsWith("/") ? raw : `/${raw}`;
              }

              const baseClasses =
                "group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none";
              const activeClasses = "bg-accent text-accent-foreground";
              const inactiveClasses =
                "text-foreground/80 hover:bg-card hover:text-foreground";
              const sizeClass = isMobile ? "text-lg" : "";
              const className = `${baseClasses} ${isActive ? activeClasses : inactiveClasses
                } ${sizeClass}`;

              return isSocial ? (
                <a
                  key={page._id}
                  href={socialHref}
                  className={className}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-20 flex items-center gap-3">
                    {IconComponent && <IconComponent className="h-5 w-5" />}
                    {page.title}
                  </span>
                </a>
              ) : (
                <Link key={page._id} href={href} className={className}>
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 z-10 rounded-md bg-blue-500 text-primary-foreground"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-20 flex items-center gap-3">
                    {IconComponent && <IconComponent className="h-5 w-5" />}
                    {page.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}
