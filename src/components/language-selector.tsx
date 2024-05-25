"use client";
import { useMediaQuery } from "@react-hook/media-query";
import { ChevronDown } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import br from "@/assets/brazil.svg";
import usa from "@/assets/usa.svg";
import { getCurrentLanguage, setLanguage } from "@/utils/language";

export type Lang = "en" | "pt";

const LanguageOptions = [
  {
    name: "pt-BR",
    value: "pt" as Lang,
    flag: br,
  },
  {
    name: "en-US",
    value: "en" as Lang,
    flag: usa,
  },
];

export function LanguageSwitcher() {
  const [_, setLangState] = useState<Lang>("en");
  const [selectedFlag, setSelectedFlag] = useState(usa);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const savedLang = getCurrentLanguage();
      const defaultFlag = savedLang === "pt" ? br : usa;
      setLangState(savedLang);
      setSelectedFlag(defaultFlag);

      const handleStorageChange = (event: StorageEvent) => {
        if (event.key === "language") {
          const newLang = event.newValue as Lang;
          const newFlag = newLang === "pt" ? br : usa;
          setLangState(newLang);
          setSelectedFlag(newFlag);
        }
      };

      window.addEventListener("storage", handleStorageChange);
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }
  }, [isMobile]);

  const handleLanguageChange = (languageCode: Lang, flag: StaticImageData) => {
    setLangState(languageCode);
    setSelectedFlag(flag);
    setIsMenuOpen(false);
    setLanguage(languageCode);
    window.location.reload();
  };

  return (
    <div className="absolute right-[112px] top-[38px] z-[99] flex w-fit items-center justify-center lg:fixed lg:right-16 lg:top-4">
      <div className="relative inline-block w-full text-left">
        <div>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-x-1.5 rounded-lg bg-background px-3 py-1.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-accent transition-colors hover:bg-card"
            id="menu-button"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-haspopup="true"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {selectedFlag && (
              <Image
                src={selectedFlag}
                width={28}
                height={28}
                alt=""
                className="h-6 w-6 rounded-full"
                priority
              />
            )}
            <ChevronDown className="text-foreground/80" size={20} />
          </button>
        </div>
        {isMenuOpen && (
          <div
            className="absolute right-[calc(100%+8px)] top-1/2 z-[9999] mt-2 w-28 origin-center -translate-y-1/2 rounded-md bg-background shadow-lg ring-1 ring-accent ring-opacity-5 focus:outline-none lg:right-1/2 lg:top-10 lg:translate-x-1/2 lg:translate-y-0"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            onMouseLeave={() => setIsMenuOpen(false)}
            tabIndex={-1}
          >
            <div role="none">
              {LanguageOptions.map((lng) => (
                <a
                  key={lng.value}
                  className="border-b-card-stroke flex cursor-pointer items-center gap-x-2 rounded-md px-3 py-2 text-sm first-of-type:border-b hover:bg-card"
                  role="menuitem"
                  tabIndex={-1}
                  id={`menu-item-${lng.value}`}
                  onClick={() => handleLanguageChange(lng.value, lng.flag)}
                >
                  <Image
                    src={lng.flag}
                    width={24}
                    height={24}
                    alt=""
                    className="h-6 w-6 rounded-full"
                    priority
                  />
                  {lng.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
