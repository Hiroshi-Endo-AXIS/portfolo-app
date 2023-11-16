import Image from "next/image";
import BackgroundComponent from "../wave-review/BackgroundComponent";
import DeveloperButton from "../wave-review/DeveloperButton";

export default function Home() {
  return (
    <>
      <>
        <div>
          <BackgroundComponent />
          <div className=" text-8xl">IM RE:Z</div>
          <DeveloperButton />
        </div>
       
      </>
    </>
  );
}
