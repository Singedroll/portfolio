import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import AboutMe from "../components/AboutMeText";
import AboutMeText from "@/components/AboutMeData";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    //
    <header className=" p-5 rounded-lg max-w-[400px] mx-auto relative">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold w-20 font-rubikMono ">TOM</h1>
        <div className="flex flex-col items-center">
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </div>
      </div>
      {/* ---------Hero---------*/}
      <div className="flex flex-col items-center ">
        <Image
          src="/profile-image-url.png"
          alt="Tom"
          width={280}
          height={300}
          className="border-t-8 border-transparent mb-5"
        />
        <div className="self-center mt-10 flex flex-col gap-11">
          <div>
            <h2 className="font-semibold text-4xl gray-900">
              Hi, I'm Tom
              <span role="img" aria-label="waving hand">
                👋
              </span>
            </h2>
            <p className="text-gray-800 font-normal text-sm my-2">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-800 flex items-center">
              <Image
                src="/location-icon.png"
                alt="Location"
                width={24}
                height={24}
                className="m-2 "
              />
              Ulaanbaatar, Mongolia
            </p>
            <p className="text-sm text-green-600 flex items-center">
              <span className="flex justify-center items-center w-2 h-2 rounded-full bg-emerald-500 m-2 ml-3 "></span>
              <span className="ml-2">Available for new projects</span>
            </p>
          </div>
          <div className="mt-4 text-lg flex ">
            <Image
              src="/icon-cat-light.png"
              alt="Location"
              width={24}
              height={24}
              className="m-2 "
            />
            <Image
              src="/icon-bird-light.png"
              alt="Location"
              width={24}
              height={24}
              className="m-2 "
            />
            <Image
              src="/icon-figma-light.png"
              alt="Location"
              width={24}
              height={24}
              className="m-2 "
            />
          </div>
        </div>
        <div className="px-4 py-16">
          <div className="flex  items-center flex-col justify-between">
            <button className=" flex justify-center items-center rounded-xl px-1 py-4 w-28 h-7 bg-gray-200">
              About me
            </button>
            <div>
              <Image
                src="/about-me.png"
                alt="about me"
                width={280}
                height={360}
                className="m-2"
              />
            </div>
            <span className="font-semibold text-2xl tracking-tight text-gray-900 mb-4">
              Curious about me? Here you have it:{" "}
            </span>
            <AboutMe />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
