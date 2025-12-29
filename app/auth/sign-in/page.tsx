import Form from "./form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Form />
    </div>
  );
}
