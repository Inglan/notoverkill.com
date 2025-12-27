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
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

export default function SignInPage() {
  const [passkeyLoading, setPasskeyLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [inputtedEmail, setInputtedEmail] = useState("");

  async function betterAuthFunctionWrapper(
    fn: () => Promise<{
      data: unknown;
      error: {
        message?: string;
        [key: string]: unknown;
      } | null;
    }>,
  ) {
    const { data, error } = await fn();
    if (error?.message) {
      toast.error(error.message);
    }
    return { data, error };
  }

  async function handleEmailSignIn() {
    await betterAuthFunctionWrapper(() =>
      authClient.signIn.magicLink({ email: inputtedEmail }),
    );
  }

  // useEffect(() => {
  //   async function attemptPasskey() {
  //     await authClient.signIn.passkey();
  //     setPasskeyLoading(false);
  //   }
  //   attemptPasskey();
  // }, []);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm bg-card border rounded-lg flex flex-col p-4 gap-4">
        <h1 className="text-2xl font-bold">
          Log in to <span className="text-primary">notoverkill</span>
        </h1>
        <div className="flex flex-col gap-2 w-full">
          <Button
            className="w-full"
            onClick={async () => {
              setPasskeyLoading(true);
              await betterAuthFunctionWrapper(() =>
                authClient.signIn.passkey(),
              );
              setPasskeyLoading(false);
            }}
          >
            {passkeyLoading ? <Spinner /> : <Fingerprint />}
            Passkey
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <Button
              className="w-full"
              variant="outline"
              onClick={async () => {
                setGithubLoading(true);
                await betterAuthFunctionWrapper(() =>
                  authClient.signIn.social({ provider: "github" }),
                );
                setGithubLoading(false);
              }}
            >
              {githubLoading ? <Spinner /> : <ArrowRight />}
              GitHub
            </Button>
            <Button
              className="w-full"
              variant="outline"
              onClick={async () => {
                setGoogleLoading(true);
                await betterAuthFunctionWrapper(() =>
                  authClient.signIn.social({ provider: "google" }),
                );
                setGoogleLoading(false);
              }}
            >
              {googleLoading ? <Spinner /> : <ArrowRight />}
              Google
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            or sign in with a link
          </p>
          <InputGroup>
            <InputGroupInput
              placeholder="Email"
              required
              type="email"
              value={inputtedEmail}
              onChange={(e) => setInputtedEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "enter") {
                  handleEmailSignIn();
                }
              }}
            />
            <InputGroupButton
              size="icon-sm"
              onClick={() => {
                handleEmailSignIn();
              }}
            >
              <ArrowRight />
            </InputGroupButton>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

function ButtonWithSpinner({
  icon,
  onClick,
  ...props
}: Omit<React.ComponentProps<typeof Button>, "onClick"> & {
  icon: React.ReactNode;
  onClick: () => Promise<void>;
}) {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      {...props}
      onClick={async () => {
        setLoading(true);
        await onClick();
        setLoading(false);
      }}
      disabled={loading}
    >
      {loading ? <Spinner /> : icon}
      {props.children}
    </Button>
  );
}
