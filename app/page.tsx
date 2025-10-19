import HomelabScroller from "@/components/homelabscroller";

export default function Home() {
  return (
    <>
      <main className="container mx-auto">
        <div className="h-96 flex justify-center flex-col gap-4 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl">
            My homelab
            <br />
            <span className="text-primary">is not overkill</span>
          </h1>
          <h2 className="text-xl">Not even a bit</h2>
        </div>
        <div className="p-4 flex flex-col gap-2 max-w-4xl mx-auto">
          <h2 className="text-2xl">
            If you don't believe me, look at these setups:
          </h2>
          <HomelabScroller />
          <div className="text-foreground/50 text-sm">From r/homelab</div>
        </div>
      </main>
    </>
  );
}
