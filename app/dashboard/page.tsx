"use client";

import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  // const getApplications = useAction(api.auth.getApplications);

  return (
    <div>
      <Button
        onClick={async () => {
          // console.log(await getApplications());
        }}
      ></Button>
    </div>
  );
}
