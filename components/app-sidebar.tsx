import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Check, Home, KeyRound, Laptop, User } from "lucide-react";
import Link from "next/link";

const items: {
  name: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}[] = [
  {
    name: "Home",
    href: "/account",
    icon: Home,
  },
  {
    name: "Sessions",
    href: "/account/sessions",
    icon: Laptop,
  },
  {
    name: "Authentication",
    href: "/account/auth",
    icon: KeyRound,
  },
  {
    name: "Consent",
    href: "/account/consent",
    icon: Check,
  },
  {
    name: "Account",
    href: "/account/details",
    icon: User,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          {items.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <Link href={item.href}>
                  <item.icon />
                  {item.name}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
