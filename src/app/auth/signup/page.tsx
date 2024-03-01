import { titleFont } from "@/config/fonts";
import { SignupForm } from "./ui/SignupForm";
import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function NewAccountPage() {
  const session: any = await auth();
  if (!session?.user?.roles.includes("admin")) {
    redirect("/auth/signin?returnTo=/dashboard");
  }
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Nueva cuenta</h1>

      <SignupForm />
    </div>
  );
}
