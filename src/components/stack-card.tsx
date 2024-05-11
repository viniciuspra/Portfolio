import Image from "next/image";

interface StackProps {
  image: string;
  title: string;
}

export function StackCard({ image, title }: StackProps) {
  return (
    <div
      className="flex w-full cursor-pointer items-center gap-4 rounded-md border p-3 transition-all hover:border-foreground/80"
      title={title}
    >
      <div>
        <Image
          src={image}
          width={40}
          height={40}
          alt=""
          className="rounded-full"
        />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
