"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useConvexAuth } from "convex/react";
import { UserButton } from "@daveyplate/better-auth-ui";

export default function LoginButton() {
  const convexAuth = useConvexAuth();
  if (convexAuth.isAuthenticated) return <UserButton size="icon" />;
  return (
    <Button
      disabled={convexAuth.isLoading || convexAuth.isAuthenticated}
      onClick={() => {
        authClient.signIn.oauth2({
          providerId: "notoverkill",
        });
      }}
    >
      Log in
    </Button>
  );
}
