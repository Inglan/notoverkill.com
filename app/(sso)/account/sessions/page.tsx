import { FormattedDateTime } from "@/components/formatted-date";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { UAParser } from "ua-parser-js";

export default async function SessionsPage() {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });
  const token = session?.session.token;
  const sessions = await auth.api.listSessions({ headers: headersList });
  return (
    <div className="flex flex-col gap-2 p-2 w-full max-w-4xl mx-auto">
      <h1 className="text-4xl">Sessions</h1>
      {sessions.map((session) => {
        const parsedUserAgent = new UAParser(
          session.userAgent || "",
        ).getResult();
        const humanReadableUserAgent = `${parsedUserAgent.browser.name} ${parsedUserAgent.browser.version} on ${parsedUserAgent.os.name}`;

        return (
          <div
            key={session.id}
            className="flex flex-row bg-card p-4 rounded-lg border"
          >
            <div className="flex flex-col grow">
              <div className="text-sm font-medium">
                {session.token == token ? "Current session" : session.ipAddress}
              </div>
              <div className="text-sm text-muted-foreground">
                {humanReadableUserAgent}
                <br />
                Created:{" "}
                <FormattedDateTime
                  date={session.createdAt.toISOString()}
                  format="DATETIME"
                />
                <br />
                Last renewed:{" "}
                <FormattedDateTime
                  date={session.updatedAt.toISOString()}
                  format="DATETIME"
                />
              </div>
            </div>
            <form
              action={async () => {
                "use server";
                await auth.api.revokeSession({
                  body: { token: session.token },
                  headers: headersList,
                });
                revalidatePath("/account/sessions");
                redirect("/account/sessions");
              }}
            >
              <Button variant="destructive" size="sm" type="submit">
                Revoke
              </Button>
            </form>
          </div>
        );
      })}
    </div>
  );
}
