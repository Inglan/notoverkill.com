import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-4 flex flex-col gap-4">
        <Skeleton className="w-[100px] h-10" />
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-36" />
          ))}
        </div>
      </div>
    </>
  );
}
