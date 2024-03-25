"use client";

import { Button, Icon, Text } from "@components";

export default function Web() {
  return (
    <div className="bg-slate-300 flex flex-1 flex-col text-gray-500">
      <Text bold className="text-4xl">
        Web
      </Text>
      <Button label="lol" />
      <Icon name="book-cross" />
    </div>
  );
}
