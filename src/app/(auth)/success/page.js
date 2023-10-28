import React from "react";
import { useRouter } from "next/navigation";

const success = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>loading...</div>;
  }
  if (status === "authenticated") {
    session["username"] = session.user.email.split("@")[0];
    session["userType"] = getParams().userType;
    sessionStorage.setItem("token", session.accessToken);
    sessionStorage.setItem("user", JSON.stringify(session));
    router.push(
      `/${session.userType === 1 ? "creator" : "editor"}/${session.username}`
    );
  }

  return <div>loading...</div>;
};

export default success;
