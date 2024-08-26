import Button from "./Button";
import AboutMe from "./AboutMeText";
import Image from "next/image";
const AboutmeSection = () => {
  return (
    <div className="px-4 py-16 bg-gray-50 md:px-8 md:py-0 ">
      <div className="flex items-center flex-col justify-center gap-12">
        <Button text="About me"></Button>
        <div className=" flex flex-col items-center justify-center md:flex-row sm:gap-12 md:gap-12">
          <div className="w-full max-w-md mx-auto md:max-w-full md:justify-start  items-center flex justify-center">
            <img
              src="/about-me.png"
              alt="about me"
              className="w-aboutme-mobile h-aboutme-mobile md:w-aboutme-desktop md:h-aboutme-desktop object-cover "
            />
          </div>
          <div>
            <div>
              <span className="font-semibold text-2xl tracking-tight text-gray-900 mb-4">
                Curious about me? Here you have it:
              </span>
              <AboutMe />
            </div>
            <div className="mt-4">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutmeSection;
