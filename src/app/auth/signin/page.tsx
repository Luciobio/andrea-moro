import { titleFont } from "@/config/fonts";
import { SigninForm } from "./ui/SigninForm";
import { redirect } from "next/navigation";
import { auth } from "@/auth.config";

export default async function LoginPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Ingresar</h1>

      <SigninForm />
    </div>
  );
}
