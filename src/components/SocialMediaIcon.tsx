import { Tooltip } from "@mui/material";
import Image from "next/image";

interface SocialMediaIconProps {
  imgSrc: string;
  title: string;
}

export function SocialMediaIcon({ imgSrc, title }: SocialMediaIconProps) {
  return (
    <Tooltip title={title} placement="bottom" arrow>
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-icons cursor-pointer hover:bg-secondary stroke-secondary transition-all ease-linear duration-200">
        <Image src={imgSrc} alt={title} width={48} height={48}/>
      </div>
    </Tooltip>
  );
}
