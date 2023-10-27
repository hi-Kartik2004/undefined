"use client";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PageLoader from "@/app/components/pageloader/Pageloader";

const Page = ({ params }) => {
  const token = sessionStorage.getItem("token");
  let user = sessionStorage.getItem("user");
  const { data: session, status } = useSession();
  const router = useRouter();
  user = JSON.parse(user);

  if (status === "loading" && !token) {
    return <PageLoader />;
  }

  if (user && user.username !== params.id) {
    router.push(
      user.userType == 1
        ? `/creator/${user.username}`
        : `/editor/${user.username}`
    );
    return <PageLoader />;
  }

  if (!session && !token) {
    router.push("/login");
    return <PageLoader />;
  }

  return (
    <div>
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
