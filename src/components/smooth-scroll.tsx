"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

interface Props {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries),
    );
    scrollRef.current && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className="fixed left-0 top-0 w-full overflow-hidden will-change-transform"
      >
        {children}
      </motion.div>

      <div style={{ height: pageHeight }} />
    </>
  );
}
