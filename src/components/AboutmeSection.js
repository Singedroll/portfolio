import Button from "./Button";
import AboutMe from "./AboutMeText";
import Image from "next/image";
const AboutmeSection = () => {
  return (
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
        <AboutMe />{" "}
      </div>
      <div className="mt-4">
        One last thing, I'm available for freelance work, so feel free to reach
        out and say hello! I promise I don't bite 😉
      </div>
    </div>
  );
};
export default AboutmeSection;
