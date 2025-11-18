import { auth } from "@/lib/auth";
import { headers } from "next/headers";
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

  const applications = (
    await coreApi.coreApplicationsList({
      onlyWithLaunchUrl: true,
      ordering: "name",
      page: 1,
      pageSize: 10000,
    })
  ).results.filter((app) => app.name != "notoverkill.com");

  // Group applications
  const ungroupedApps = applications.filter((app) => !app.group);
  const groupedApps = applications.reduce(
    (acc, app) => {
      if (app.group) {
        const groupName = app.group;
        if (!acc[groupName]) {
          acc[groupName] = [];
        }
        acc[groupName].push(app);
      }
      return acc;
    },
    {} as Record<string, typeof applications>,
  );

  const sortedGroupNames = Object.keys(groupedApps).sort();

  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex flex-col gap-8">
      <h1 className="text-4xl">Apps</h1>

      {ungroupedApps.length > 0 && (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
          {ungroupedApps.map((app) => (
            <Link
              className="flex flex-col items-center justify-center p-4 bg-card rounded-lg border text-center gap-2 h-36"
              key={app.pk}
              href={app.launchUrl || ""}
            >
              {app.metaIcon && (
                <Image
                  alt={app.name}
                  className="size-14"
                  width={56}
                  height={56}
                  src={process.env.AUTHENTIK_SERVER! + app.metaIcon}
                />
              )}
              <span className="line-clamp-1">{app.name}</span>
            </Link>
          ))}
        </div>
      )}

      {sortedGroupNames.map((groupName) => (
        <div key={groupName} className="flex flex-col gap-4">
          <h2 className="text-2xl">{groupName}</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
            {groupedApps[groupName].map((app) => (
              <Link
                className="flex flex-col items-center justify-center p-4 bg-card rounded-lg border text-center gap-2 h-36"
                key={app.pk}
                href={app.launchUrl || ""}
              >
                {app.metaIcon && (
                  <Image
                    alt={app.name}
                    className="size-14"
                    width={56}
                    height={56}
                    src={process.env.AUTHENTIK_SERVER! + app.metaIcon}
                  />
                )}
                <span className="line-clamp-1">{app.name}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
