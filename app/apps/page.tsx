import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { Configuration, CoreApi } from "@goauthentik/api";
import Image from "next/image";
import Link from "next/link";

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
    <div className="w-full max-w-4xl mx-auto p-2 flex flex-col gap-2">
      <h1 className="text-4xl">Apps</h1>
      <div className="w-full grid grid-cols-3 gap-2">
        {applications.results.map((app) => (
          <Link
            className="flex flex-col items-center justify-center p-4 bg-card rounded border text-center gap-2"
            key={app.pk}
            href={app.launchUrl || ""}
          >
            {app.metaIcon && (
              <Image
                alt={app.name}
                className="w-10 h-10"
                width={32}
                height={32}
                src={process.env.AUTHENTIK_SERVER! + app.metaIcon}
              />
            )}
            <span className="line-clamp-1">{app.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
