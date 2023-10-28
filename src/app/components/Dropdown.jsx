import { Avatar, Button, DropdownMenu } from "@radix-ui/themes";
import React from "react";
import AvatarBadge from "./Avatar";
import Link from "next/link";

const Dropdown = (props) => {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="cursor-pointer">
          <button className="outline-none border border-gray-500 rounded-lg">
            <AvatarBadge />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="mt-1">
          {props.links.map((link, index) => {
            if (link.text === "Logout")
              return (
                <DropdownMenu.Item key={index} color="red">
                  <Link href={`/${link.href}`}>{link.text}</Link>
                </DropdownMenu.Item>
              );
            else {
              return (
                <DropdownMenu.Item key={index}>
                  {" "}
                  <Link href={`${link.href}`}>{link.text}</Link>
                </DropdownMenu.Item>
              );
            }
          })}

          {/* <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
              <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

              <DropdownMenu.Separator />
              <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
          <DropdownMenu.Item>Share</DropdownMenu.Item>
          <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
            Delete
          </DropdownMenu.Item> */}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
};

export default Dropdown;
