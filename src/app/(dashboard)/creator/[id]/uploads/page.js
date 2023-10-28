"use client";
import React, { useEffect, useState } from "react";
import UploadCard from "@/app/components/UploadCard";
import DashboardHeading from "@/app/components/DashboardHeading";
import DashboardTopbar from "@/app/components/DashboardTopbar";
import Sidebar from "@/app/components/Sidebar";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import PageLoader from "@/app/components/pageloader/Pageloader";

const page = ({ params }) => {
  let resp = [
    {
      id: 1,
      title:
        "Title of the collection of raw videos goes here and if long it might be...",
      files: [
        "file_name.mp4",
        "fileName.com",
        "fileName.png",
        "fileName.jpeg",
        "fileName.mp3",
        "filename.vid",
        "fileName.dev.com",
      ],
      count: -1,
      time: "2019-01-20",
      status: 1,
    },
    {
      id: 2,
      title:
        "Title of the collection of raw videos goes here and if long it might be...",
      files: [
        "file_name.mp4",
        "fileName.com",
        "fileName.png",
        "fileName.jpeg",
        "fileName.mp3",
        "filename.vid",
        "fileName.dev.com",
      ],
      count: -1,
      time: "2023-01-20",
      status: 2,
    },
    {
      id: 3,
      title:
        "Title of the collection of raw videos goes here and if long it might be...",
      files: [
        "file_name.mp4",
        "fileName.com",
        "fileName.png",
        "fileName.jpeg",
        "fileName.mp3",
        "filename.vid",
        "fileName.dev.com",
      ],
      count: -1,
      time: "2023-01-20",
      status: 3,
    },
    {
      id: 4,
      title:
        "Title of the collection of raw videos goes here and if long it might be...",
      files: [
        "file_name.mp4",
        "fileName.com",
        "fileName.png",
        "fileName.jpeg",
        "fileName.mp3",
        "filename.vid",
        "fileName.dev.com",
      ],
      count: -1,
      time: "2023-01-20",
      status: 0,
    },

    {
      id: 5,
      title:
        "Title of the collection of raw videos goes here and if long it might be...",
      files: [
        "file_name.mp4",
        "fileName.com",
        "fileName.png",
        "fileName.jpeg",
        "fileName.mp3",
        "filename.vid",
        "fileName.dev.com",
      ],
      count: -1,
      time: "2023-01-20",
      status: 3,
    },

    {
      id: 6,
      title:
        "Title of the collection of raw videos goes here and if long it might be...",
      files: [
        "file_name.mp4",
        "fileName.com",
        "fileName.png",
        "fileName.jpeg",
        "fileName.mp3",
        "filename.vid",
        "fileName.dev.com",
      ],
      count: -1,
      time: "2023-01-20",
      status: 3,
    },

    {
      id: 7,
      title:
        "Title of the collection of raw videos goes here and if long it might be...",
      files: [
        "file_name.mp4",
        "fileName.com",
        "fileName.png",
        "fileName.jpeg",
        "fileName.mp3",
        "filename.vid",
        "fileName.dev.com",
      ],
      count: -1,
      time: "2023-01-01",
      status: 3,
    },
  ];

  const { status } = useSession();
  const router = useRouter();
  let token = null,
    user = {};
  if (typeof window !== "undefined") {
    token = sessionStorage.getItem("token");
    user = sessionStorage.getItem("user");
  }

  user = JSON.parse(user);
  console.log(user);

  resp.forEach((upload) => {
    upload.count = upload.files.length;
  });

  resp.sort((a, b) => a.status - b.status);

  function getQueryParams(url) {
    const parameters = {};
    const queryString = url.split("?")[1];
    if (queryString) {
      const pairs = queryString.split("&");
      pairs.forEach((pair) => {
        const [key, value] = pair.split("=");
        parameters[key] = decodeURIComponent(value);
      });
    }

    console.log(parameters);
    return parameters;
  }

  const [uploads, setUploads] = useState([resp]);
  useEffect(() => {
    const queryParams = getQueryParams(window.location.href);
    const selectedOption = queryParams.filter;
    setUploads([]);
    let filteredUploads = resp;

    switch (selectedOption) {
      case "progress":
        filteredUploads = resp.filter((upload) => upload.status === 2);
        break;
      case "download-pending":
        filteredUploads = resp.filter((upload) => upload.status === 1);
        break;
      case "review-pending":
        filteredUploads = resp.filter((upload) => upload.status === 3);
        break;
      case "issues-raised":
        filteredUploads = resp.filter((upload) => upload.status === 0);
        break;
      case "oldest-first":
        filteredUploads = [...resp].sort(
          (a, b) => new Date(a.time) - new Date(b.time)
        );
        break;
      case "newest-first":
        filteredUploads = [...resp].sort(
          (a, b) => new Date(b.time) - new Date(a.time)
        );
        break;
      default:
        break;
    }

    setUploads(filteredUploads);
  }, [window.location.href]);

  if (user && user.username !== params.id) {
    router.replace(
      user.userType == 2
        ? `../../editor/${user.username}/uploads`
        : `../../creator/${user.username}/uploads`
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

  return (
    <>
      <DashboardHeading text="Uploads" count={uploads.length} />

      <div className="flex flex-wrap gap-10 justify-center mt-5">
        {uploads.map((upload, index) => (
          <div key={index}>
            <UploadCard details={upload} />
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
