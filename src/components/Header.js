import { Rubik_Mono_One } from "next/font/google";
import Navlinks from "./NavLinks";

// Import Rubik Mono One with the specified weight
const rubikMono = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400", // Specify the available weight
});

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-5 p-5 lg:py-4 lg:px-20">
      <div className="lg:py-0 lg:px-8">
        <h1
          className={`${rubikMono.className} text-gray-900 text-center
            text-[36px] leading-[36px] tracking-[-0.6px]
            w-[76px] h-[36px]`}
        >
          TOM
        </h1>
      </div>
      <Navlinks />
      <div className="md:flex flex-col items-center lg:hidden">
        <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-800"></div>
      </div>
    </div>
  );
};

export default Header;
