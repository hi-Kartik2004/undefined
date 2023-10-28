"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import PageLoader from "@/app/components/pageloader/Pageloader";

const Logout = () => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    const handleLogout = async () => {
      if (status === "authenticated") {
        await signOut();
      }

      if (typeof window !== "undefined") {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
      }

      router.push("/login");
    };

    handleLogout();
  }, [router, status]);

  return <PageLoader />;
};

export default Logout;
