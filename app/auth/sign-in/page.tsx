"use client";

import { motion } from "motion/react";
import Form from "./form";

export default function SignInPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="w-full max-w-sm bg-card border rounded-lg flex flex-col p-4 gap-4"
      >
        <Form />
      </motion.div>
    </div>
  );
}
