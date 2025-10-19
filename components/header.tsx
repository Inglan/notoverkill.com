import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full border-b bg-background/50 sticky top-0 backdrop-blur-xl">
      <div className="container mx-auto p-2 flex flex-row">
        <Image src="/notoverkill.svg" alt="Logo" width={100} height={100} />
        <div className="grow"></div>
        <Button asChild>
          <Link href="https://sso.notoverkill.com">Log in</Link>
        </Button>
      </div>
    </div>
  );
}
