"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string | React.ReactNode;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Removed background colors and gradients to match page background

  return (
    <div
      className="relative flex h-[40rem] justify-center space-x-10 overflow-y-auto p-10 md:h-[50rem] md:space-x-16 md:p-16 lg:h-[60rem] lg:space-x-20 lg:p-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="w-full max-w-3xl md:max-w-4xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl font-bold text-neutral-800 md:text-4xl lg:text-5xl dark:text-neutral-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="mt-10 max-w-full text-lg leading-relaxed text-neutral-600 md:text-xl lg:text-2xl dark:text-neutral-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-10 hidden h-80 w-96 overflow-hidden rounded-md md:h-96 md:w-[28rem] lg:block lg:h-[32rem] lg:w-[36rem]",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </div>
  );
};
