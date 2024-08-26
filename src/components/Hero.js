import CatIcon from "./icons/CatIcon";
import FigmaIcon2 from "./icons/FigmaIcon2";
import BirdIcon from "./icons/BirdIcon";
import LocationIcon from "./icons/Locationicon";
import AvailableDot from "./icons/AvailableDot";

const Hero = () => {
  return (
    <div className="md:py-24 md:px-20 md:flex md:flex-row-reverse md:gap-12 px-4">
      <div className="flex justify-center md:justify-end mb-12 md:flex-1">
        {/* Image container */}
        <div className="w-full max-w-md mx-auto md:max-w-full flex justify-center md:justify-end">
          <img
            src="/profile-image-url.png"
            alt="Tom"
            className="w-hero-mobile h-hero-mobile md:w-hero-desktop md:h-hero-desktop object-cover"
          />
        </div>
      </div>
      <div className="flex md:flex-1">
        <div className="md:flex-1 flex flex-col">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2
                className="text-mobile-hero md:text-tablet-hero lg:text-desktop-hero
                  leading-mobile-hero md:leading-tablet-hero lg:leading-desktop-hero
                  tracking-hero font-semibold mb-2 text-left"
              >
                Hi, I'm Tom
                <span role="img" aria-label="waving hand">
                  👋
                </span>
              </h2>
              <p>
                I specialize in full stack development, particularly with
                React.js and Node.js. My main goal is to create exceptional
                digital experiences that are fast, visually appealing, and
                accessible to everyone. With over 7 years of experience in web
                development, I continue to find joy in crafting innovative
                solutions and designs.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-800 flex items-center mb-1 ml-1">
                <LocationIcon />
                Ulaanbaatar, Mongolia
              </p>

              <p className="text-sm text-gray-800 flex items-center ml-1">
                <AvailableDot />
                Available for new projects
              </p>
            </div>
            <div className="mt-4 text-lg flex">
              <CatIcon />
              <BirdIcon />
              <FigmaIcon2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
