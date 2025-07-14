import React from "react";
import Image from "next/image";

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen animate-bounce duration-400 ease-in-out infinite">
      <Image
        src="/images/c14-logo.png"
        alt="C14 Logo"
        width={200}
        height={200}
      />
      <p className="text-2xl font-bold">מטלת בית - C14</p>
    </div>
  );
}

export default Loading;
