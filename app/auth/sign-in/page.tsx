"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Fingerprint } from "lucide-react";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
  useEffect(() => {
    authClient.signIn.passkey();
  }, []);

  const [passkeyLoading, setPasskeyLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm bg-card border rounded-lg flex flex-col p-4 gap-4">
        <h1 className="text-2xl font-bold">
          Log in to <span className="text-primary">notoverkill</span>
        </h1>
        <div className="flex flex-col gap-2 w-full">
          <Button className="w-full">
            <Fingerprint /> Passkey
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <Button className="w-full" variant="outline">
              GitHub
            </Button>
            <Button className="w-full" variant="outline">
              Google
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            or sign in with a link
          </p>
          <InputGroup>
            <InputGroupInput placeholder="Email" required type="email" />
            <InputGroupButton size="icon-sm">
              <ArrowRight />
            </InputGroupButton>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
