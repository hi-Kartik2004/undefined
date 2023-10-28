"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const success = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (status === "authenticated") {
    const userTypeParam = getParams()?.userType;
    const userType = userTypeParam ? parseInt(userTypeParam, 10) : null;

    if (userType !== null && userType !== undefined) {
      session["username"] = session.user.email.split("@")[0];
      session["userType"] = userType;
      sessionStorage.setItem("token", session.accessToken);
      sessionStorage.setItem("user", JSON.stringify(session));

      const routePath =
        userType === 1
          ? `/creator/${session.username}`
          : `/editor/${session.username}`;
      router.push(routePath);
    } else {
      console.error("Invalid userType parameter");
    }
  }

  return <div>loading...</div>;
};

export default success;