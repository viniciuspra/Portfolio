"use client";
import {
  Bookmark,
  Compass,
  FileText,
  Github,
  Layers,
  Linkedin,
  Package,
  Phone,
  Puzzle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { getPages } from "@/sanity/sanity-utils";
import { Page } from "@/types/page";
import { getCurrentLanguage, Lang } from "@/utils/language";

import { Loading } from "./loading";

const iconMap: { [key: string]: React.FC } = {
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

export function SideBarItems() {
  const pathname = usePathname();
  const [items, setItems] = useState<Page[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPages = async (language: Lang) => {
    try {
      setIsLoading(true);
      const pages = await getPages(language);
      setItems(pages);
    } catch (error) {
      console.log("Error fetching pages", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPages(getCurrentLanguage());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const groupItemsByGroup = (
    items: Page[],
  ): { [groupName: string]: Page[] } => {
    const groupedItems: { [groupName: string]: Page[] } = {};

    items.forEach((item) => {
      const groupName = item.group || "Other";
      if (!groupedItems[groupName]) {
        groupedItems[groupName] = [];
      }
      groupedItems[groupName].push(item);
    });

    return groupedItems;
  };

  const groupedItems = groupItemsByGroup(items);

  const sideBarItemStyle =
    "truncate text-sm tracking-wide group-hover:text-foreground group-hover:font-medium";
  const sideBarIconStyle =
    "inline-flex items-center justify-center rounded-lg border p-1 group-hover:bg-blue-500 group-hover:text-white size-7";
  const sideBarLinkStyle =
    "group relative flex h-10 flex-row items-center gap-2 rounded-lg px-2 pr-6 transition-all hover:bg-accent group-focus:ring-2";

  return (
    <ul className="flex flex-col space-y-2 lg:px-6">
      {Object.keys(groupedItems).map((groupName) => (
        <React.Fragment key={groupName}>
          {groupName !== "Other" && (
            <li className="pt-4">
              <div className="flex h-6 flex-row items-center">
                <div className="text-sm font-light tracking-wide">
                  {groupName}
                </div>
              </div>
            </li>
          )}
          {groupedItems[groupName].map((item) => {
            const isHome = item.slug === "/";
            const IconComponent = iconMap[item.icon];
            const href = isHome ? "/" : `/${item.slug}`;
            const haveProjectInPath =
              item.title === "Projects" && pathname.includes("/projects");
            return (
              <React.Fragment key={item._id}>
                {item.group !== "Socials" && (
                  <li className="group cursor-pointer">
                    <Link href={href} className={sideBarLinkStyle}>
                      <span
                        className={`${pathname === href || haveProjectInPath ? "bg-blue-500 text-white" : "text-foreground/80 dark:text-muted-foreground/80"} ${sideBarIconStyle}`}
                      >
                        <IconComponent />
                      </span>
                      <span
                        className={`${pathname === href || haveProjectInPath ? "text-foreground dark:text-white" : "text-muted-foreground/90 dark:text-muted-foreground/80"} ${sideBarItemStyle}`}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </React.Fragment>
      ))}

      {items
        .filter((item) => item.group === "Socials")
        .map((item) => {
          const IconComponent = iconMap[item.icon];
          let href = item.slug;
          item.title === "Read CV"
            ? (href = "/Curriculum-Vinicius-Cascaes-Prá.pdf")
            : (href = "/Currículo-Vinicius-Cascaes-Prá.pdf");
          return (
            <li key={item._id} className="group cursor-pointer">
              <Link href={href} target="_blank" className={sideBarLinkStyle}>
                <span className={sideBarIconStyle}>
                  <IconComponent />
                </span>
                <span className={sideBarItemStyle}>{item.title}</span>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
