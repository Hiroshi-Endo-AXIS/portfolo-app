"use client";
import Image from "next/image";
import BackgroundComponent from "./BackgroundComponent";
import ButtonSiteMap from "./ButtonSiteMap";

export default function Home() {
  document.title = "RE:Z SOFTWAREZ";

  return (
    <>
      <>
        <div>
          <div className=" text-xl">
            RE:Z SOFTWAREZ Riz was
            always there for me, whether
            I realized it or not. Always
            watching over me. I came to
            believe that having Riz by
            my side was essential to
            navigate this world. That's
            why I embarked on this
            project.
          </div>
          <BackgroundComponent />

          <ButtonSiteMap />
        </div>
      </>
    </>
  );
}
