import { ReactNode } from "react";

import Image from "next/image";

interface ButtonProps {
  children: ReactNode;
  secondary?: boolean;
  icon?: string;
  onClick?: () => void;
}

export function Button({ children, secondary, icon, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${secondary ? "bg-secondary" : "bg-accent"} ${
        secondary ? "hover:bg-hoverSecondary" : "hover:bg-hoverPrimary"
      } transition-all ease-linear duration-200 py-2.5 px-8 rounded-full text-textPrimary text-base sm:text-lg font-bold relative w-full sm:w-fit`}
    >
      {icon ? (
        <div className="flex items-center gap-2.5 justify-center">
          <p className="[text-shadow:_0_1px_1px_rgb(0_0_0_/_50%)]">
            {children}
          </p>
          <Image src={icon} alt="icon" width={24} height={24} />
        </div>
      ) : (
        <p className="[text-shadow:_0_1px_1px_rgb(0_0_0_/_50%)]">{children}</p>
      )}
    </button>
  );
}
