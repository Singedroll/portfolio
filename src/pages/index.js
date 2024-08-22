import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import AboutMe from "../components/AboutMeText";
import Button from "../components/Button";
import IconSet from "../components/IconSet";
import Experience from "../components/UpworkExp";
import ButtonSet from "../components/ButtonSet";
import ShareIcon from "../components/icons/Shareicon";
import CatIcon from "../components/icons/CatIcon";
import BirdIcon from "../components/icons/BirdIcon";
import FigmaIcon2 from "../components/icons/FigmaIcon2";
import ContactMe from "../components/ContactMe";
import ContactMe2 from "../components/ContactMe2";
import TrademarkIcon from "../components/icons/TrademarkIcon";
const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    //
    <div className="  rounded-lg max-w-[400px] mx-auto relative">
      <div className="flex justify-between items-center mb-5 p-5">
        <h1 className="text-2xl font-bold w-20 font-rubikMono ">TOM</h1>
        <div className="flex flex-col items-center">
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </div>
      </div>
      {/* ---------Hero---------*/}
      <div className="flex flex-col items-center shadow-2xl px-4 py-16">
        <Image
          src="/profile-image-url.png"
          alt="Tom"
          width={280}
          height={300}
          className="border-t-8 border-transparent mb-5"
        />
        <div className="self-center mt-10 flex flex-col gap-11 p-5">
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
            <p className="text-sm text-gray-800 flex items-center mb-1 ml-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                  stroke="#4B5563"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="#4B5563"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Ulaanbaatar, Mongolia
            </p>
            <p className="text-sm text-gray-800 flex items-center ml-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="8" y="8" width="8" height="8" rx="4" fill="#10B981" />
              </svg>
              Available for new projects
            </p>
          </div>
          <div className="mt-4 text-lg flex ">
            <CatIcon />

            <BirdIcon />

            <FigmaIcon2 />
          </div>
        </div>
        <div className="px-4 py-16 bg-gray-50">
          <div className="flex  items-center flex-col justify-between">
            <Button text="About me"></Button>
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
          <div className="mt-4">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </div>
        </div>
        <div className="my-16 ">
          <Button text="skills" />
        </div>
        <div className="flex items-center justify-center text-gray-600 text-lg">
          The skills, tools and technologies I am really good at:
        </div>
        <div>
          <IconSet />
        </div>
        <div className=" bg-gray-50 px-4 py-16">
          <div className="flex flex-col items-center justify-center self-stretch mb-6">
            <div className="mb-4">
              <Button text="experience" />
            </div>
            <p className="text-center">
              Here is a quick summary of my most recent experiences:
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Experience
              year="Nov 2021 - Present"
              title="Sr. Frontend Developer"
            />
            <Experience year="Jul 2017 - Oct 2021" title="Team Lead" />
            <Experience
              year="Dec 2015 - May 2017"
              title="Full Stack Developer"
            />
          </div>
        </div>
        <div className="px-4 py-16 flex flex-col justify-center items-center">
          <div className="my-16">
            <Button text="Work" />
          </div>
          <p className="text-center text-lg font-normal text-gray-600">
            Some of the noteworthy projects I have built:
          </p>
        </div>

        <div className="flex flex-col gap-6 bg-gray-50 shadow p-8 rounded-t-xl rounded-b-none">
          <div>
            <Image
              src="/ub-cab.png"
              alt="ubcab"
              layout="responsive"
              width={279}
              height={192}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="p-8 flex flex-col gap-6">
          <span className="font-semibold text-balance text-lg">UBCab</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </span>
          <div>
            <ButtonSet />
          </div>{" "}
          <div className="flex items-center gap-3 self-stretch">
            <ShareIcon />
          </div>
        </div>

        <div className="flex flex-col gap-6 bg-gray-50  p-8 rounded-t-xl rounded-b-none">
          <div>
            <Image
              src="/mentor-hub.png"
              alt="mentor hub"
              layout="responsive"
              width={279}
              height={192}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="p-8 flex flex-col gap-6">
          <span className="font-semibold text-balance text-lg ">MentorHub</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </span>
          <div>
            <ButtonSet />
          </div>{" "}
          <div className="flex items-center gap-3 self-stretch">
            <ShareIcon />
          </div>
        </div>
        <div className="flex flex-col gap-6 bg-gray-50 shadow p-8 rounded-t-xl rounded-b-none">
          <div>
            <Image
              src="/itoim.jpg"
              alt="itoim"
              layout="responsive"
              width={279}
              height={192}
              className="rounded-xl flex justify-center items-center self-stretch"
            />
          </div>
        </div>
        <div className="p-8 flex flex-col gap-6">
          <span className="font-semibold text-balance text-lg">UBCab</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </span>
          <div>
            <ButtonSet />
          </div>{" "}
          <div className="flex items-center gap-3 self-stretch">
            <ShareIcon />
          </div>
        </div>
        <div className="px-4 py-16 flex flex-col justify-center items-center gap-6">
          <Button text="Get in touch" />
          <p className="text-xl text-center">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
          <div>
            <ContactMe text="tom@pinecone.mn" />
            <ContactMe2 text="+976 88112233" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base font-normal">
              You may also find me on these platforms!
            </p>
            <div className="flex gap-1 justify-center">
              <CatIcon />
              <BirdIcon />
              <FigmaIcon2 />
            </div>
          </div>
        </div>
        <div className="flex  justify-center items-center gap-2 bg-gray-50 py-6">
          <TrademarkIcon />
          <p className="text-gray-600 ">
            2024 | Greetings with ❤️️ from Ulaanbaatar
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
