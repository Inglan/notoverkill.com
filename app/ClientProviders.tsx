"use client";

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { authClient } from "@/lib/auth-client";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import Link from "next/link";
import { useRouter } from "next/navigation";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!, {
  // Optionally pause queries until the user is authenticated
  expectAuth: true,
});

export function ClientProviders({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <ConvexBetterAuthProvider client={convex} authClient={authClient}>
      <AuthUIProvider
        authClient={authClient}
        navigate={router.push}
        replace={router.replace}
        onSessionChange={() => {
          // Clear router cache (protected routes)
          router.refresh();
        }}
        Link={Link}
        genericOAuth={{
          providers: [{ name: "notoverkill", provider: "notoverkill" }],
        }}
        credentials={false}
        signUp={false}
        account={{
          fields: [],
          basePath: "https://sso.notoverkill.com/if/user/#/",
        }}
      >
        {children}
      </AuthUIProvider>
    </ConvexBetterAuthProvider>
  );
}
