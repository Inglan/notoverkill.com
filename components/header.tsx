import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full border-b bg-background/50 sticky top-0 backdrop-blur-xl z-50">
      <nav className="max-w-4xl mx-auto h-15 flex flex-row items-center p-4">
        <Link href="/">
          <Image
            src="/notoverkill.svg"
            alt="Logo"
            width={275 / 2}
            height={76 / 2}
          />
        </Link>
      </nav>
    </div>
  );
}
