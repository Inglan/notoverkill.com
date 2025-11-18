"use client";

import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function Sso() {
  authClient.signIn.oauth2({ providerId: "notoverkill" });
  return <></>;
}
