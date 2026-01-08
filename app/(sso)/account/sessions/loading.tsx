import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex flex-col gap-2 p-2 w-full max-w-4xl mx-auto">
      <h1 className="text-4xl">Sessions</h1>
      <div className="py-8 w-full flex justify-center items-center">
        <Spinner />
      </div>
    </div>
  );
}
