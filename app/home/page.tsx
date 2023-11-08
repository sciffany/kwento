"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DynamicPage(props) {
  const { data: session } = useSession();
  const router = useRouter();

  if (session && session.user) {
    router.push("http://localhost:3000/admin/create");
  } else {
    return <button onClick={() => signIn()}>Sign in</button>;
  }
}
