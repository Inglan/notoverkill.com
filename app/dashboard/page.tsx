"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useAction } from "convex/react";

export default function DashboardPage() {
  const getApplications = useAction(api.auth.getApplications);

  return (
    <div>
      <Button
        onClick={async () => {
          console.log(await getApplications());
        }}
      ></Button>
    </div>
  );
}
