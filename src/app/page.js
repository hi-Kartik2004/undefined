"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const {status} = useSession();

  return (
    <main>
      <h1>Hello there!</h1>
      <div className="flex flex-col gap-2">
        {
          status === 'authenticated'? 
            (<Link href="/profile">profile</Link>)
            :
            (<div className="flex flex-col">
            <Link href="/login">login</Link>
            <Link href="/register">sign Up</Link>
            <Link href="/validate-otp">Validate-otp</Link>
            </div>)

        }
        
      </div>
    </main>
  );
}
