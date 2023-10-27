import { useRouter } from "next/navigation";
import React, { useState } from "react";
import PageLoader from "../components/pageloader/Pageloader";
import { useSession } from "next-auth/react";

const Protection = () => {
  const { status } = useSession();
  const router = useRouter();
  const token = sessionStorage.getItem("token");

  if (status === "loading") {
    return <PageLoader />;
  }

  if (status === "authenticated" || token) {
    if (typeof window === "undefined") {
      router.replace("/profile");
      return null;
    }

    router.push("/profile");
    return <PageLoader />;
  }
};

export default Protection;
