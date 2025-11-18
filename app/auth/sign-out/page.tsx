import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export default async function SignOut() {
  const headersList = await headers();

  try {
    await auth.api.signOut({
      headers: headersList,
    });
  } catch {}

  redirect(
    process.env.AUTHENTIK_SERVER + "/if/flow/notoverkill-com-invalidation/",
    RedirectType.replace,
  );
}
