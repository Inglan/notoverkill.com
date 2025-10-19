import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="w-full border-b">
      <div className="container mx-auto p-2 flex flex-row">
        <Image src="/notoverkill.svg" alt="Logo" width={100} height={100} />
        <div className="grow"></div>
        <Button>Log in</Button>
      </div>
    </div>
  );
}
