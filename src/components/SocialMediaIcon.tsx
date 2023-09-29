import Image from "next/image";

import { Tooltip } from "@mui/material";

interface SocialMediaIconProps {
  imgSrc: string;
  title: string;
  href: string;
}

export function SocialMediaIcon({ imgSrc, title, href }: SocialMediaIconProps) {
  return (
    <Tooltip title={title} placement="bottom" arrow>
      <div
        role="link"
        className="flex items-center justify-center h-16 w-16 rounded-full bg-icons cursor-pointer hover:bg-secondary stroke-secondary transition-all ease-linear duration-200"
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Image src={imgSrc} alt={title} width={48} height={48} />
        </a>
      </div>
    </Tooltip>
  );
}
