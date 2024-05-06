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
    <>
      <Button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        type="button"
        className="h-9 w-9 p-0 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-primary"
      >
        <Sun className="h-[1rem] w-[1rem] md:w-[1.2rem] md:h-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1rem] w-[1rem] md:w-[1.2rem] md:h-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {isOpen && (
        <div
          id="dropdown"
          className="z-10 text-foreground rounded w-fit h-fit border border-input translate-y-4 translate-x-1 px-[0.25rem]"
        >
          <ul
            className="py-1 text-xs w-full text-start"
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="hover:bg-accent w-full pr-5 rounded">
              <Button
                onClick={() => {
                  setTheme("light");
                  toggleDropdown();
                }}
              >
                Light
              </Button>
            </li>
            <li className="hover:bg-accent w-full pr-5 rounded">
              <Button
                onClick={() => {
                  setTheme("dark");
                  toggleDropdown();
                }}
              >
                Dark
              </Button>
            </li>
            <li className="hover:bg-accent w-full pr-5 rounded">
              <Button
                onClick={() => {
                  setTheme("system");
                  toggleDropdown();
                }}
              >
                System
              </Button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
