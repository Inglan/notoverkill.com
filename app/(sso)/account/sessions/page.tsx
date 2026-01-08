import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function SessionsPage() {
  const headersList = await headers();
  const sessions = await auth.api.listSessions({ headers: headersList });
  return (
    <div className="flex flex-col gap-2">
      {sessions.map((session) => (
        <div key={session.id} className="flex flex-row bg-card">
          <div className="flex flex-col p-4">
            <div className="text-sm font-medium">{session.id}</div>
            <div className="text-xs text-gray-500">
              {session.createdAt.toLocaleString()}
              {session.ipAddress}
            </div>
          </div>
          <div className="flex flex-col p-4">
            <div className="text-sm font-medium">{session.ipAddress}</div>
            <div className="text-xs text-gray-500">{session.userAgent}</div>
          </div>
          <form
            action={async () => {
              "use server";
              await auth.api.revokeSession({
                body: { token: session.token },
                headers: headersList,
              });
            }}
          >
            <Button variant="destructive" size="sm" type="submit">
              Revoke
            </Button>
          </form>
        </div>
      ))}
    </div>
  );
}
