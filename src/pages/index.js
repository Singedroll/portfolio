import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
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
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutmeSection from "../components/AboutmeSection";
const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <div className="container mx-auto">
      <div>
        {/*  ---------Header--------- */}
        <Header />
        {/* ---------Hero---------*/}
        <Hero />
      </div>
      <div className="my-16 md:px-20 md:py-24 ">
        <AboutmeSection />
      </div>
      {/* ---------Skills--------- */}

      <IconSet />

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
          <Experience year="Dec 2015 - May 2017" title="Full Stack Developer" />
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
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
            className="rounded-xl bg-cover bg-no-repeat"
          />
        </div>
      </div>
      <div className="p-8 flex flex-col gap-6">
        <span className="font-semibold text-balance text-lg ">MentorHub</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
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
  );
}

export default Home;
