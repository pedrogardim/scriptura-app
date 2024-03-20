"use client";

import { config } from "@repo/common";

export default function Web() {
  return (
    <div className="bg-slate-800 flex flex-1 flex-col justify-center items-center h-screen text-white">
      <span className="font-bold mb-5 text-3xl">Native</span>
      <button
        className="bg-slate-900 p-4 rounded-md"
        onClick={() => {
          console.log("Pressed!");
          alert("Pressed!");
        }}
      >
        {config.test}
      </button>
    </div>
  );
}
