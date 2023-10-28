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
    user = JSON.parse(user);
  }
  const session = null;
  // const { data: session, status } = useSession();
  // console.log(session);

  // if (status === "loading" && !token) {
  //   return <PageLoader />;
  // }

  if ((user && user.username !== params.id) || user.userType !== 1) {
    router.push(
      user.userType == 2
        ? `/editor/${user.username}`
        : `/creator/${user.username}`
    );
    return <PageLoader />;
  }

  if (!token) {
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
        <div>Email : {session ? session.user.email : `${user.user.email}`}</div>
      </div>
      <div className="mt-5">
        <Link
          href="/logout"
          className="py-2 px-3 max-w-[300px] w-full bg-red-700 text-white text font-medium hover:bg-red-500 border border-slate-300 rounded-md"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Page;
