"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { ChevronUp } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Skeleton } from "./ui/skeleton";

export default function FooterAuth() {
  const session = authClient.useSession();
  const router = useRouter();

  return (
    <SidebarMenuItem>
      {session.isPending ? (
        <SidebarMenuButton>
          <Skeleton className="w-full h-full" />
        </SidebarMenuButton>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              {session.data?.user.name || session.data?.user.email}
              <ChevronUp className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={async () => {
                await authClient.signOut();
                router.push("/auth/sign-in");
              }}
            >
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </SidebarMenuItem>
  );
}
