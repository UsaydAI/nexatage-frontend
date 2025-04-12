"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 2,
        }}
      >
        <img
          src="/images/instagram.svg"
          alt="Instagram"
          width="100"
          height="100"
          className="rounded-full"
        />
      </motion.div>
      <motion.p
        className="mt-6 text-xl tracking-wide text-white"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Your brand&apos;s digital growth partner...
      </motion.p>
    </motion.div>
  );
}
