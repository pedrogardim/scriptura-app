"use client";

import { config } from "@repo/common";
import { Button } from "@components";

export default function Web() {
  return (
    <div className="bg-slate-800 flex flex-1 flex-col justify-center items-center h-screen text-white">
      <span className="font-bold mb-5 text-3xl">Native</span>
      <Button label="lol" />
    </div>
  );
}
