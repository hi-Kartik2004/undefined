"use client";
import DashboardHeading from "@/app/components/DashboardHeading";
import Dropdown from "@/app/components/Dropdown";
import GetUser from "@/app/components/GetUser";
import IssueCard from "@/app/components/IssueCard";
import { useRouter } from "next/navigation";
import React from "react";
import { BsFillFilterSquareFill } from "react-icons/bs";

const issues = ({ params }) => {
  let token = null;
  let user = {};
  const router = useRouter();
  if (typeof window !== "undefined") {
    token = sessionStorage.getItem("token");
    user = sessionStorage.getItem("user");
    user = JSON.parse(user);
  }
  // const { data: session, status } = useSession();
  // console.log(session);

  // if (status === "loading" && !token) {
  //   return <PageLoader />;
  // }

  if ((user && user.username !== params.id) && user.userType !== 1) {
    router.push(
      user.userType == 2
        ? `/editor/${user.username}/drafts`
        : `/creator/${user.username}/drafts`
    );
    return <PageLoader />;
  }

  if (!token) {
    router.push("/login");
    return <PageLoader />;
  }

  const issues = [
    {
      _id: 1,
      title: "Issue 1",
      description: "Issue 1 description",
      status: "open",
      priority: "high",
      userType: 1,
      userId: 1,
      draftId: 1,
      comments: [],
      createdAt: "2021-10-11T12:00:00.000Z",
      updatedAt: "2021-10-11T12:00:00.000Z",
    },
    {
      _id: 2,
      title: "Issue 2",
      description: "Issue 2 description",
      status: "open",
      priority: "medium",
      userType: 1,
      userId: 1,
      draftId: 2,
      comments: [],
      createdAt: "2021-10-11T12:00:00.000Z",
      updatedAt: "2021-10-11T12:00:00.000Z",
    },
  ];

  const getUniqueDrafts = (issues) => {
    const uniqueDrafts = [];
    issues.forEach((issue) => {
      if (!uniqueDrafts.includes(issue.draftId)) {
        uniqueDrafts.push(issue.draftId);
      }
    });
    return uniqueDrafts;
  };

  const uniqueDrafts = getUniqueDrafts(issues);

  return (
    <>
      <div className="flex justify-between">
        <DashboardHeading text="All Issues" count={issues.length} />

        <Dropdown
          text="Filter by drafts 👇"
          links={uniqueDrafts.map((draftId) => ({
            text: draftId,
            href: `/${user && user.userType === 1 ? "creator" : "editor"}/${
              user && user.username
            }/issues?draftId=${draftId}`,
          }))}
        />
      </div>

      <div className="flex max-w-full justify-center w-full items-center flex-wrap gap-10 mt-5">
        {issues.map((issue, index) => (
          <div
            className="flex max-w-[550px] w-full items-center justify-center"
            key={index}
          >
            <IssueCard details={issue} />
          </div>
        ))}
      </div>
    </>
  );
};

export default issues;
