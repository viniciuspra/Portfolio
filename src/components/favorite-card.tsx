import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { Button } from "./button";

interface FavoriteCardProps {
  src: StaticImageData | string;
  title: string;
  description: string;
  link: string;
}

export function FavoriteCard({
  src,
  title,
  description,
  link,
}: FavoriteCardProps) {
  return (
    <div className="relative h-[400px] cursor-pointer overflow-hidden rounded-lg border-2 border-accent p-4 shadow-lg transition-all hover:brightness-90">
      <div className="relative flex aspect-video h-48 w-full items-center justify-center overflow-hidden rounded-md">
        <Image
          src={src}
          alt={title}
          fill
          className="rounded-md object-cover"
          quality={100}
          priority
        />
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 text-lg font-bold text-primary lg:text-xl">
          {title}
        </div>
        <p className="line-clamp-3 text-base text-foreground/75">
          {description}
        </p>
      </div>
      <Link href={link} target="_blank" className="px-6 pb-2 pt-4">
        <Button
          variant="secondary"
          className="border-2 hover:border-foreground/70"
        >
          Acessar
        </Button>
      </Link>
    </div>
  );
}
