import Image from "next/image";

interface Props {
  image: string;
  name: string;
}

export function ProjectImageBorder({ image, name }: Props) {
  return (
    <div className="md:hover:before:animate-border-effect relative grid cursor-pointer place-items-center overflow-hidden rounded-lg bg-background p-1 transition-all before:absolute before:h-[210%] before:w-1/3 before:rotate-[55deg] before:rounded-lg before:bg-primary after:absolute after:inset-1">
      <Image
        src={image}
        width={1366}
        height={768}
        alt={`Representative image of ${name} project`}
        priority
        className="z-20 rounded-md"
      />
    </div>
  );
}
