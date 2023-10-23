"use client";
import React, { useEffect, useState } from "react";
import UploadCard from "@/app/components/UploadCard";
import DashboardHeading from "@/app/components/DashboardHeading";
import DashboardTopbar from "@/app/components/DashboardTopbar";
import Sidebar from "@/app/components/Sidebar";
import { BiMenuAltLeft } from "react-icons/bi";

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

  const [uploads, setUploads] = useState([]);
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

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="max-w-[1480px] md:px-0 px-1 w-full flex md:gap-12 gap-6">
        <div className="hidden sm:block">
          <Sidebar />
        </div>

        <div className="dashboard w-full max-h-[95vh] my-4 bg-light rounded-xl border border-gray-500 py-4 px-4 flex flex-col md:gap-6 gap-10 overflow-auto">
          <div className="fixed bottom-0 left-0 w-full md:border-none border md:border-gray-500 rounded-lg p-2 md:bg-light md:bg-light card-color z-10 md:static">
            <DashboardTopbar userId={params.id} />
          </div>

          <DashboardHeading count={uploads.length} />

          <div className="flex flex-wrap gap-11 justify-center">
            {uploads.map((upload, index) => (
              <div key={index}>
                <UploadCard details={upload} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
