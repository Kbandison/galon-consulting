"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/heroHighlight";

export default function Hero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-3xl px-4 tablet:text-5xl font-bold text-white dark:text-white max-w-4xl leading-[3.5rem] tablet:leading-[4.5rem]  text-center mx-auto"
      >
        If you need Healthcare services from people you can trust,
        <Highlight className="text-char dark:text-white">
          Galon Consulting Services
        </Highlight>
        is your dependable helper.
      </motion.h1>
    </HeroHighlight>
  );
}
