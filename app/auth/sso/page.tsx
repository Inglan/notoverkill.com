import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Sso() {
  const headersList = await headers();

  const data = await auth.api.signInWithOAuth2({
    headers: headersList,
    body: {
      providerId: "notoverkill",
    },
  });

  if (data.redirect) {
    redirect(data.url);
  }
}
