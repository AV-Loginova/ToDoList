import { useState } from "react";

export default function Home() {
  return (
    <div
      className="w-[90vw] bg-[#f0f8ff] lg:w-[40vw] 
    rounded-[10px] shadow-md p-[20px] min-h-[50vh] 
    flex flex-col items-center gap-[30px] text-slate-700 z-[1]"
    >
      <h1>Hello, {localStorage.getItem("name") || "friend"}!</h1>
      Welcome to your personal helper with your schedule and more.
    </div>
  );
}
