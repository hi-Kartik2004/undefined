"use client";
import session from "express-session";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { status } = useSession();
  const token = sessionStorage.getItem("token");

  return (
    <main>
      <h1>Hello there!</h1>
      <div className="flex flex-col gap-2">
        {status === "authenticated" || token ? (
          <Link href="/profile">profile</Link>
        ) : (
          <div className="flex flex-col">
            <Link href="/login">login</Link>
            <Link href="/register">sign Up</Link>
            <Link href="/otp">Validate-otp</Link>
          </div>
        )}
      </div>
    </main>
  );
}
