"use client";
import PageLoader from "@/app/components/pageloader/Pageloader";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const { status } = useSession();
  const router = useRouter();
  let token = null;
  if (typeof window !== "undefined") {
    token = sessionStorage.getItem("token");
  }

  if (status === "authenticated") {
    signOut();
    router.push("/login");
  } else {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
    }
    router.push("/login");
  }

  return <PageLoader />;
};

export default Logout;
