import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import FormElements from "@/components/dashboard/FormElements";
import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Cursos | Dashboard",
  description: "This is Cursos page for dashboard",
};

const Cursos = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth/signin?returnTo=/dashboard");
  }
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Cursos" />
        <FormElements />
      </div>
    </DefaultLayout>
  );
};

export default Cursos;
