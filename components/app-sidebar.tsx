import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Check,
  CircleCheck,
  HelpCircle,
  Home,
  KeyRound,
  Laptop,
  Logs,
  User,
} from "lucide-react";
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
    name: "Audit Log",
    href: "/account/log",
    icon: Logs,
  },
  {
    name: "Account",
    href: "/account/details",
    icon: User,
  },
  {
    name: "Support",
    href: "/account/support",
    icon: HelpCircle,
  },
  {
    name: "Status",
    href: "/account/status",
    icon: CircleCheck,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild>
            <Link href="/">
              <div className="text-2xl text-primary">notoverkill</div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
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
