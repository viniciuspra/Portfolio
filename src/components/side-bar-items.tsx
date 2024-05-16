"use client";
import { getPages } from "@/sanity/sanity-utils";
import { Page } from "@/types/page";
import {
  Package,
  Puzzle,
  Phone,
  Bookmark,
  Layers,
  Linkedin,
  Github,
  FileText,
  Compass,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

type IconMapType = {
  [key: string]: JSX.Element;
};

const iconMap: IconMapType = {
  explore: <Compass size={16} />,
  services: <Package size={16} />,
  projects: <Puzzle size={16} />,
  contact: <Phone size={16} />,
  favorites: <Bookmark size={16} />,
  stack: <Layers size={16} />,
  LinkedIn: <Linkedin size={16} />,
  GitHub: <Github size={16} />,
};

export function SideBarItems() {
  const pathname = usePathname();
  const [items, setItems] = useState<Page[]>([]);

  useEffect(() => {
    async function fetchPages() {
      const pages = await getPages();
      setItems(pages);
    }
    fetchPages();
  }, []);

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
    "inline-flex items-center justify-center rounded-lg border p-1 group-hover:bg-blue-500 group-hover:text-white";
  const sideBarLinkStyle =
    "group relative flex h-10 flex-row items-center gap-2 rounded-lg px-2 pr-6 transition-all hover:bg-accent group-focus:ring-2";

  return (
    <ul className="flex flex-col space-y-2 py-3 md:px-4 lg:px-6">
      {Object.keys(groupedItems).map((groupName) => (
        <React.Fragment key={groupName}>
          {groupName !== "Other" && (
            <li className="pt-6">
              <div className="flex h-6 flex-row items-center">
                <div className="text-sm font-light tracking-wide">
                  {groupName}
                </div>
              </div>
            </li>
          )}
          {groupedItems[groupName].map((item) => {
            const isHome = item.slug === "/";
            const icon = isHome ? (
              <Compass size={16} />
            ) : (
              iconMap[item.slug] || <FileText size={16} />
            );
            const href = isHome ? "/" : `/${item.slug}`;

            return (
              <>
                {item.group !== "Socials" && (
                  <li key={item._id} className="group cursor-pointer">
                    <Link href={href} className={sideBarLinkStyle}>
                      <span
                        className={`${pathname === href ? "bg-blue-500 text-white" : "text-foreground/80 dark:text-muted-foreground/80"} ${sideBarIconStyle}`}
                      >
                        {icon}
                      </span>
                      <span
                        className={`${pathname === href ? "text-foreground dark:text-white" : "text-muted-foreground/90 dark:text-muted-foreground/80"} ${sideBarItemStyle}`}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </li>
                )}
              </>
            );
          })}
        </React.Fragment>
      ))}

      {items
        .filter((item) => item.group === "Socials")
        .map((item) => (
          <li key={item._id} className="group cursor-pointer">
            <Link href={item.slug} target="_blank" className={sideBarLinkStyle}>
              <span className={sideBarIconStyle}>
                {iconMap[item.title] || <FileText size={16} />}
              </span>
              <span className={sideBarItemStyle}>{item.title}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
}
