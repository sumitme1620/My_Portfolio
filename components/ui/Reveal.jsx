"use client";
import { motion, useReducedMotion } from "motion/react";
import { EASE, viewportOnce } from "@/lib/motion";

/**
 * Reusable scroll-reveal wrapper.
 *
 * Keeps animation logic in one client component so section shells can stay
 * server components. Renders any motion element via the `as` prop and honours
 * the user's reduced-motion preference.
 */
const Reveal = ({
  as = "div",
  children,
  className = "",
  delay = 0,
  y = 24,
  duration = 0.6,
  once = true,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  const initial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y };
  const animate = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <Tag
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={once ? viewportOnce : { amount: 0.2 }}
      transition={{ duration, delay, ease: EASE }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
