"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import PageLoader from "@/app/components/pageloader/Pageloader";

const Success = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const userType = searchParams.get("userType");

  if (status === "loading") {
    return <PageLoader />;
  }

  if (status === "authenticated") {
    if (userType !== null && typeof window !== "undefined") {
      // Check if window is undefined, not if it's not undefined
      session["username"] = session.user.email.split("@")[0];
      session["userType"] = parseInt(userType, 10); // Parse userType as an integer
      sessionStorage.setItem("token", session.accessToken);
      sessionStorage.setItem("user", JSON.stringify(session));
      console.log(session); // Fix typo: "lop" should be "log"

      const routePath =
        userType === "1" // Compare userType as a string
          ? `/creator/${session.username}`
          : `/editor/${session.username}`;
      router.push(routePath);
    } else {
      console.error("Invalid userType parameter");
    }
  }

  return <PageLoader />;
};

export default Success;
