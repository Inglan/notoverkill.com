import { auth } from "@/lib/auth";
import Home from "./home/page";
import { headers } from "next/headers";
import AppsPage from "@/components/apps-page";

export default async function Root() {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });

  if (!session) {
    return Home();
  } else {
    return AppsPage();
  }
}
