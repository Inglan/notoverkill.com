import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { Configuration, CoreApi } from "@goauthentik/api";

export default async function AppsPage() {
  const headersList = await headers();
  const token = await auth.api.getAccessToken({
    headers: headersList,
    body: { providerId: "notoverkill" },
  });

  const config = new Configuration({
    basePath: process.env.AUTHENTIK_SERVER + "/api/v3",
    accessToken: token.accessToken,
  });

  const coreApi = new CoreApi(config);

  const applications = await coreApi.coreApplicationsList({
    onlyWithLaunchUrl: true,
    ordering: "name",
    page: 1,
    pageSize: 10000,
  });

  return (
    <div>
      <h1>Apps</h1>
      {applications.results.map((app) => (
        <div key={app.pk}>{app.name}</div>
      ))}
    </div>
  );
}
