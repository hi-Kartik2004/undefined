import { Flex } from "@radix-ui/themes";
import { Avatar } from "@radix-ui/themes";
import React from "react";

const AvatarBadge = (props) => {
  return (
    <>
      <Flex gap="2">
        {props.src ? (
          <Avatar src={props.src ? props.src : ""} />
        ) : (
          <Avatar fallback="K" />
        )}
      </Flex>
    </>
  );
};

export default AvatarBadge;
