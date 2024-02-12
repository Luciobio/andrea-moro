import { redirect } from "next/navigation";

export default async function DashboardPage() {
  redirect("/dashboard");
  return (
    <div>
      <h1>Hellou Dashboard</h1>
    </div>
  );
}
