import Image from "next/image";
import Link from "next/link";
import HeaderAuth from "./header-auth";

export default function Header() {
  return (
    <div className="w-full border-b bg-background/50 sticky top-0 backdrop-blur-xl z-50">
      <nav className="max-w-4xl mx-auto h-15 flex flex-row items-center p-4">
        <Link href="/">
          <div className="text-2xl text-primary">notoverkill</div>
        </Link>
        <div className="grow"></div>
        <HeaderAuth />
      </nav>
    </div>
  );
}
