"use client";
import { useState } from "react";
import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/button";

export function ModeToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="group fixed right-2 top-2 z-50">
      <Button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        type="button"
        className="h-9 w-9 border border-input bg-transparent p-0 shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-blue-500 group-focus-visible:border-blue-500 group-focus-visible:ring-blue-500"
      >
        <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 md:h-[1.2rem] md:w-[1.2rem]" />
        <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 md:h-[1.2rem] md:w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {isOpen && (
        <div
          id="dropdown"
          onMouseLeave={toggleDropdown}
          className="fixed z-10 h-fit w-fit -translate-x-20 translate-y-4 rounded border border-input bg-background px-[0.25rem] text-foreground transition-all"
        >
          <ul
            className="w-full py-1 text-xs"
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="w-full rounded hover:bg-accent">
              <Button
                onClick={() => {
                  setTheme("light");
                  toggleDropdown();
                }}
                className="flex w-full justify-start pl-2 pr-10"
              >
                Light
              </Button>
            </li>
            <li className="w-full rounded hover:bg-accent">
              <Button
                onClick={() => {
                  setTheme("dark");
                  toggleDropdown();
                }}
                className="flex w-full justify-start pl-2 pr-10"
              >
                Dark
              </Button>
            </li>
            <li className="w-full rounded hover:bg-accent">
              <Button
                onClick={() => {
                  setTheme("system");
                  toggleDropdown();
                }}
                className="flex w-full justify-start pl-2 pr-10"
              >
                System
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
