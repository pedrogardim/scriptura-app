"use client";

import { config } from "@repo/common";
import { Button, Icon, Text } from "@components";

export default function Web() {
  return (
    <div className="bg-slate-800 flex flex-1 flex-col justify-center items-center h-screen text-white">
      <Text bold className="text-white text-4xl">
        Native
      </Text>
      <Button label="lol" />
      <Icon name="book-cross" />
    </div>
  );
}
