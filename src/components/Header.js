import Navlinks from "./NavLinks";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-5 p-5 lg:py-4 lg:px-20 ">
      <div className="lg:py-0 lg:px-8  ">
        <h1 className="text-3xl font-bold w-full font-rubikMono text-gray-900  ">
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
