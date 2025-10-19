import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full border-b bg-background/50 sticky top-0 backdrop-blur-xl z-50">
      <div className="container mx-auto">
        <nav className="max-w-4xl mx-auto p-2 flex flex-row">
          <Image src="/notoverkill.svg" alt="Logo" width={275} height={76} />
          <div className="grow"></div>
          <Button className="hidden" asChild>
            <Link href="https://sso.notoverkill.com">Log in</Link>
          </Button>
        </nav>
      </div>
    </div>
  );
}
