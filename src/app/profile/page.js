"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const { status, data: session } = useSession();

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status !== "authenticated") {
    // You might want to return a loading spinner or something while the session is being checked.
    router.push("/login");
  }

  return (
    <div>
      hello! you are successfully authenticated
      <div className="center flex flex-col">
        <div>
          User profile Image :
          <Image src={session?.user?.image} width={200} height={180} />
        </div>

        <div>UserName : {session?.user?.name}</div>
        <div>Email : {session?.user?.email}</div>
      </div>
      <button
        className="p-3 m-5 bg-white text-red-500 rounded-md hover:bg-red-300 hover:text-white"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
};

export default Page;
