"use client";
import Image from "next/image";
import BackgroundComponent from "./BackgroundComponent";
import ButtonSiteMap from "./ButtonSiteMap";

export default function Home() {
  return (
    <>
      <>
        <div>
          <div className=" text-9xl">
            RE:Z SOFTWAREZ
          </div>
          <BackgroundComponent />

          <ButtonSiteMap />
        </div>
      </>
    </>
  );
}
