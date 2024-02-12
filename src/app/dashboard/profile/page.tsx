"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session } = useSession();
  console.log(session?.user?.image);
  return (
    <div>
      <h1>Page Profile</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.name}</p>
      <Image
        src={session?.user?.image ?? ""}
        width={100}
        height={100}
        alt="s"
      />
    </div>
  );
}
