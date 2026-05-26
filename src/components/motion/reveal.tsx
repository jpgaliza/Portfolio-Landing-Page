"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type MotionSectionProps = HTMLMotionProps<"section"> & {
  children: ReactNode;
};

type MotionCardProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

type MotionArticleProps = HTMLMotionProps<"article"> & {
  children: ReactNode;
};

type MotionLinkProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
};

function mergeClassNames(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function MotionSection({
  children,
  className,
  ...props
}: MotionSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "-8% 0px" }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function MotionCard({ children, className, ...props }: MotionCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={mergeClassNames("card-hover-border", className)}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionArticle({
  children,
  className,
  ...props
}: MotionArticleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={mergeClassNames("card-hover-border", className)}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.article>
  );
}

export function MotionLink({ children, className, ...props }: MotionLinkProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      className={className}
      whileHover={reduceMotion ? undefined : { y: -1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
