"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function BackButton({ href }: { href: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeIn", delay: 0.5 },
      }}
    >
      <Link href={href}>
        <Button
          variant="link"
          className="hover absolute -left-4 -top-12 gap-2 text-lg"
        >
          <ArrowLeft className="underline" /> Back
        </Button>
      </Link>
    </motion.div>
  );
}
