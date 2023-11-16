"use client"
import Image from "next/image";
import BackgroundComponent from "./BackgroundComponent";
import DeveloperButton from "./DeveloperButton";
import WeatherPage from "./WeatherPage";

export default function Home() {
  return (
    <>
      <>
        <div>
          <BackgroundComponent />
          <div>HELLO NEXT</div>
          <DeveloperButton />
          <WeatherPage />
        </div>
       
      </>
    </>
  );
}
