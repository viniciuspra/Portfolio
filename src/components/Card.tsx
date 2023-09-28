import Image from "next/image";

interface CardProps {
  imgSrc: string;
  title: string;
}

export function Card({ imgSrc, title }: CardProps) {
  return (
    <div className="relative group flex items-center justify-center py-8 px-4 bg-accent hover:bg-hoverSecondary flex-1 cursor-pointer h-52 xs:h-72 xs:px-8 min-w-fit sm:min-w-[330px] max-w-[448px] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out">
      <Image
        src={imgSrc}
        alt={title}
        width={1000}
        height={1000}
        layout="responsive"
        className="transition-all rounded-lg duration-500 backdrop-blur-0 group-hover:scale-105 ease-in-out max-h-[220px]"
      />

      <p className="text-textPrimary font-bold absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:top-1 group-hover:opacity-100 transition-all duration-500 ease-in-out text-center w-full px-8 text-base sm:text-lg z-10 [text-shadow:_0_1px_1px_rgb(0_0_0_/_50%)]">
        {title}
      </p>
    </div>
  );
}
