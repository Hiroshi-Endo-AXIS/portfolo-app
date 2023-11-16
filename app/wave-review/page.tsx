"use client"
import Image from "next/image";
import BackgroundComponent from "./BackgroundComponent";
import DeveloperButton from "./DeveloperButton";
import WeatherBase from "./WeatherBase";

export default function Home() {
  return (
    <>
      <>
        <div>
          <BackgroundComponent />
          <div>HELLO NEXT</div>
          <DeveloperButton />
          <WeatherBase />
        </div>
       
      </>
    </>
  );
}
