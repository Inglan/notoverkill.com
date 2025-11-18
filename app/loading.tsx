import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex flex-col gap-8">
      {/* Page title skeleton */}
      <Skeleton className="w-[100px] h-10" />

      {/* Ungrouped apps section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={`ungrouped-${index}`} className="w-full h-36" />
        ))}
      </div>

      {/* First grouped section */}
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[150px] h-8" />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={`group1-${index}`} className="w-full h-36" />
          ))}
        </div>
      </div>

      {/* Second grouped section */}
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[180px] h-8" />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={`group2-${index}`} className="w-full h-36" />
          ))}
        </div>
      </div>
    </div>
  );
}
