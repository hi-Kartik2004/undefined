"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import PageLoader from "@/app/components/pageloader/Pageloader";

const page = ({ params }) => {
  const { status } = useSession();
  const router = useRouter();
  const token = sessionStorage.getItem("token");
  let user = sessionStorage.getItem("user");
  user = JSON.parse(user);
  console.log(user);

  if (user && user.username !== params.id) {
    router.replace(
      user.userType == 1
        ? `../../creator/${user.username}/drafts`
        : `../../editor/${user.username}/drafts`
    );
    return <PageLoader />;
  }

  if (status === "loading") {
    return <PageLoader />;
  }

  if (status !== "authenticated" && !token) {
    router.push("/login");
    return <PageLoader />;
  }
  return <div>drafts</div>;
};

export default page;
