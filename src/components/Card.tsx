import Image from "next/image";

import { SocialMediaIcon } from "./SocialMediaIcon";

import githubIcon2 from "@/assets/github-icon2.svg";
import webLink from "@/assets/web-link-icon.svg";

interface CardProps {
  imgSrc: string;
  title: string;
  url: string;
  url_github: string;
}

export function Card({ imgSrc, title, url, url_github }: CardProps) {
  return (
    <div className="z-0 relative group flex items-center justify-center aspect-video flex-1 cursor-pointer min-w-fit sm:min-w-[330px] max-w-[448px] rounded-xl overflow-hidden transition-all duration-500 ease-in-out">
      <Image
        src={imgSrc}
        alt={title}
        width={1000}
        height={1000}
        className="transition-all duration-700 backdrop-blur-0 group-hover:scale-105 ease-in-out "
      />
      <div className="z-20 flex absolute w-full items-center justify-center gap-12 -top-1/2 group-hover:top-1/3 xl:group-hover:top-20 transition-all duration-300">
        <SocialMediaIcon title="Github" imgSrc={githubIcon2} href={url_github}/>
        <SocialMediaIcon title="site" imgSrc={webLink} href={url}/>
      </div>
      <div className="z-10 absolute top-0 left-0 w-full h-full group-hover:backdrop-blur-sm" />
    </div>
  );
}
