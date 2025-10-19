import HomelabScroller from "@/components/homelabscroller";

export default function Home() {
  return (
    <>
      <div className="h-96 flex justify-center items-center flex-col gap-2 p-2">
        <h1 className="text-4xl">My homelab is not overkill</h1>
        <h2 className="text-xl">Not even a bit</h2>
      </div>
      <div className="container mx-auto p-2 flex flex-col gap-2">
        <h2 className="text-2xl">
          If you don't believe me, look at these setups:
        </h2>
        <HomelabScroller />
        <div className="text-foreground/50 text-sm">From r/homelab</div>
      </div>
    </>
  );
}
