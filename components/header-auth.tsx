"use client";

import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "./ui/spinner";
import Link from "next/link";

export default function HeaderAuth() {
  const session = authClient.useSession();

  if (session.isPending) {
    return <Spinner />;
  }

  return (
    <div>
      {session.data?.user ? (
        <Button variant="outline" onClick={() => authClient.signOut()}>
          Sign Out
        </Button>
      ) : (
        <Button asChild>
          <Link href="/auth/sign-in">Sign In</Link>
        </Button>
      )}
    </div>
  );
}
