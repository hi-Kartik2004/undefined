"use client";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PageLoader from "@/app/components/pageloader/Pageloader";

const Page = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <PageLoader />;
  }

  if (status === "authenticated") {
    // Redirect on the server side
    if (typeof window === "undefined") {
      router.replace("/profile");
      return null;
    }

    // Redirect on the client side
    router.push("/profile");
    return <PageLoader />;
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
