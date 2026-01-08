import { auth } from "@/lib/auth";
import Form from "./form";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const headersList = await headers();

  const session = await auth.api.getSession({
    headers: headersList,
  });

  if (session) redirect("/");

  const redirectUrl = (await searchParams).redirect;

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Form
        redirectUrl={typeof redirectUrl === "string" ? redirectUrl : "/account"}
      />
    </div>
  );
}
