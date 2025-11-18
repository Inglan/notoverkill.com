import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { Configuration, CoreApi } from "@goauthentik/api";
import Image from "next/image";

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
    <div className="w-full max-w-4xl mx-auto p-2 gap-2">
      <h1>Apps</h1>
      <div className="w-full grid grid-cols-4">
        {applications.results.map((app) => (
          <div key={app.pk}>
            {app.metaIcon && (
              <Image
                alt={app.name}
                className="w-10 h-10"
                width={32}
                height={32}
                src={process.env.AUTHENTIK_SERVER! + app.metaIcon}
              />
            )}
            {app.name}
          </div>
        ))}
      </div>
    </div>
  );
}
