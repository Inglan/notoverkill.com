"use client";

// import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";

export default function LoginButton() {
  // if (convexAuth.isAuthenticated) return <UserButton size="icon" />;
  return (
    <Button
      // disabled={convexAuth.isLoading || convexAuth.isAuthenticated}
      onClick={() => {
        // authClient.signIn.oauth2({
        //   providerId: "notoverkill",
        // });
      }}
    >
      Log in
    </Button>
  );
}
