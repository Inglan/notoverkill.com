import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-96 flex justify-center items-center flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">My homelab is not overkill</h1>
          <h2 className="text-xl">Not even a bit</h2>
        </div>
      </div>
    </>
  );
}
