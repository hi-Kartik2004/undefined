"use client";
import Link from "next/link";
import React from "react";
import Dropdown from "./Dropdown";
import { CgOptions } from "react-icons/cg";

const DraftCard = ({ details }) => {
  let user;
  if (typeof window !== "undefined") {
    user = sessionStorage.getItem("user");
    user = JSON.parse(user);
  }

  return (
    <div className="bg-black px-2 py-2 flex flex-col max-w-[375px] w-full rounded-xl">
      <img
        src={details.thumbnail}
        alt="thumbnail"
        className="rounded-xl mb-2"
      />
      <Link
        href={`drafts/?play=${details.url}`}
        className="text-md overflow-hidden overflow-ellipsis whitespace-normal max-w-[calc(100% - 1.5rem)] line-clamp-2 text-color"
      >
        {details.title}
      </Link>

      <div className="flex justify-between mt-2 items-end">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-light">{details.editorUsername}</p>
          <p className="text-xs text-light">{details.timestamp}</p>
        </div>
        <div>
          <div className="flex flex-col gap-1 items-end">
            <div className="max-w-[50px]">
              <Dropdown
                icon={<CgOptions />}
                links={[
                  {
                    text: "Play Video",
                    href: `/${
                      user && user.userType === 1 ? "creator" : "editor"
                    }/${user && user.username}/drafts?play=${details.url}`,
                  },
                  {
                    text: "Publish on Youtube",
                    href: `/${
                      user && user.userType === 1 ? "creator" : "editor"
                    }/${user && user.username}/drafts?publish=${
                      details.draftId
                    }`,
                  },
                  {
                    text: "View Issues",
                    href: `/${
                      user && user.userType === 1 ? "creator" : "editor"
                    }/${user && user.username}/issues?draft=${details.draftId}`,
                  },
                  {
                    text: "Raise Issue",
                    href: `/${
                      user && user.userType === 1 ? "creator" : "editor"
                    }/${user && user.username}/issues?raise=${details.draftId}`,
                  },
                  {
                    text: "Delete Draft",
                    href: `/${
                      user && user.userType === 1 ? "creator" : "editor"
                    }/${user && user.username}/drafts?delete=${
                      details.draftId
                    }`,
                  },
                ]}
              />
            </div>

            <p className="text-xs text-light bg-light p-1 rounded-md">
              {details.status === -1 ? (
                <span className="text-xs text-red-700">Unresolved Issues</span>
              ) : details.status === 1 ? (
                <span className="text-xs text-green-700">Published</span>
              ) : (
                "Unpublished"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftCard;
