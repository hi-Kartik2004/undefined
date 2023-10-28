"use client";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PageLoader from "@/app/components/pageloader/Pageloader";
import Link from "next/link";

const Page = ({ params }) => {
  let token = null;
  let user = {};
  const router = useRouter();
  if (typeof window !== "undefined") {
    token = sessionStorage.getItem("token");
    user = sessionStorage.getItem("user");
  }
  const { data: session, status } = useSession();
  user = JSON.parse(user);

  if (status === "loading" && !token) {
    return <PageLoader />;
  }

  if (user && user.username !== params.id) {
    router.push(
      user.userType == 2
        ? `/editor/${user.username}`
        : `/creator/${user.username}`
    );
    return <PageLoader />;
  }

  if (!session && !token) {
    router.push("/login");
    return <PageLoader />;
  }

  return (
    <div className="h-full min-h-screen">
      hello! you are successfully authenticated
      <div className="center flex flex-col">
        <div>
          User profile Image :
          {session && session.user.image ? (
            <Image
              src={session.user.image}
              width={200}
              height={180}
              alt="Profile image"
            />
          ) : (
            <img
              src={user.image}
              width={200}
              height={180}
              alt="user profile image from email"
            />
          )}
        </div>

        <div>UserName : {session ? session.user.name : `${user.username}`}</div>
        <div>Email : {session ? session.user.email : `${user.email}`}</div>
      </div>
      <Link
        href="/logout"
        className="p-3 mx-5 mt- bg-white text-red-500 rounded-md hover:bg-red-300 hover:text-white"
      >
        Logout
      </Link>
    </div>
  );
};

export default Page;
