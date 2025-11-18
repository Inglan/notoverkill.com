"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { SignedIn, UserButton } from "@daveyplate/better-auth-ui";
import { Skeleton } from "./ui/skeleton";
import { useState } from "react";

export default function LoginButton() {
  const session = authClient.useSession();
  const [loading, setLoading] = useState(false);

  return (
    <>
      {!session.data?.session && (
        <Button
          disabled={session.isPending || loading}
          onClick={() => {
            setLoading(true);
            authClient.signIn.oauth2({
              providerId: "notoverkill",
            });
          }}
        >
          Log in
        </Button>
      )}
      <SignedIn>
        <UserButton size="sm" variant="ghost" />
      </SignedIn>
    </>
  );
}
