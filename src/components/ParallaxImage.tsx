"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ParallaxImage({
  src,
  alt,
  width,
  height,
  shift = 8,
  eager = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  shift?: number;
  eager?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${shift}%`, `${shift}%`]);

  return (
    <div ref={ref} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        style={{
          position: "absolute",
          left: 0,
          top: "-10%",
          width: "100%",
          height: "120%",
          objectFit: "cover",
          y: reduce ? 0 : y,
        }}
      />
    </div>
  );
}
