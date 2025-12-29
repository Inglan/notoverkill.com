"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Fingerprint, Mail } from "lucide-react";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
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
