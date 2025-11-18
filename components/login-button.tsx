"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, UserButton } from "@daveyplate/better-auth-ui";

export default function LoginButton() {
  // if (convexAuth.isAuthenticated) return <UserButton size="icon" />;
  return (
    <>
      <SignedOut>
        <Button
          // disabled={convexAuth.isLoading || convexAuth.isAuthenticated}
          onClick={() => {
            authClient.signIn.oauth2({
              providerId: "notoverkill",
            });
          }}
        >
          Log in
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton size="sm" variant="ghost" />
      </SignedIn>
    </>
  );
}
