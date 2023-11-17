"use client";
import Image from "next/image";
import BackgroundComponent from "./BackgroundComponent";
import DeveloperButton from "./DeveloperButton";

export default function Home() {
  document.title = "RE:Z Weather";
  return (
    <>
      <div>
        <div className=" absolute text-9xl">BGMovie</div>
        
        <BackgroundComponent />
        BGMovie
        <div className=" absolute text-2xl">
          HELLO NEXT
        </div>

∏        <DeveloperButton />
      </div>
    </>
  );
}
