"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";

export default function LoginButton() {
  return (
    <Button
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
