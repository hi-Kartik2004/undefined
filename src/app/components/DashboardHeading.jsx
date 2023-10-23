"use client";
import React from "react";
import { useRouter } from "next/navigation";

const DashboardHeading = (props) => {
  const router = useRouter();

  const handleFilter = (e) => {
    let value = e.target.value;
    let url = window.location.pathname;
    handleOptionChange(value, url);
  };

  function handleOptionChange(selectedOption, url) {
    url += "?filter=";
    switch (selectedOption) {
      case "p":
        url += "progress";
        break;
      case "d":
        url += "download-pending";
        break;
      case "r":
        url += "review-pending";
        break;
      case "i":
        url += "issues-raised";
        break;
      case "t":
        url += "oldest-first";
        break;
      case "n":
        url += "newest-first";
        break;
      default:
        // Default case: no specific filter
        url += "all";
        break;
    }

    // Navigate to the constructed URL
    router.replace(url);
  }

  return (
    <>
      <div className="dashboard__content flex flex-wrap gap-4 justify-between pl-2">
        <h1 className="text-2xl">Uploads ({props.count})</h1>
        <select
          className="outline-none px-2 max-w-[120px] w-full h-[40px] rounded-lg bg-color text-light-color"
          onChange={handleFilter}
        >
          <option value="p">In Progress</option>
          <option value="d">Download Pending</option>
          <option value="r">Review Pending</option>
          <option value="i">Issues Raised</option>
          <option value="t">Oldest First</option>
          <option value="n">Newest First</option>
        </select>
      </div>
    </>
  );
};

export default DashboardHeading;
