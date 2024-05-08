"use client";
import { motion } from "framer-motion";
import { Heart, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Modal({ show }: { show: boolean }) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (show) {
      setVisible(true);
      timeoutId = setTimeout(() => {
        setVisible(false);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [show]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className={`${visible ? "fixed" : "hidden"} space-x bottom-10 right-5 z-50 flex w-full max-w-sm items-center space-x-4 divide-x rounded-lg bg-accent px-4 py-3 shadow rtl:divide-x-reverse`}
      role="alert"
    >
      <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg">
        <Heart className="fill-red-500 text-red-500" />
        <span className="sr-only">Heart Icon</span>
      </div>
      <div className="ms-3 text-sm font-normal">
        Thanks for getting in touch! Looking forward to connecting!
      </div>
      <button
        type="button"
        className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg p-1.5 hover:bg-primary/20 focus-visible:ring-1 focus-visible:ring-primary"
      >
        <span className="sr-only">Close</span>
        <X />
      </button>
    </motion.div>
  );
}
