import NavLink from "./NavLink";
import LightTheme from "./icons/LigthThemeIcon";
import DButton from "./DTDLbtn";

const LinkArray = [
  { name: "About" },
  { name: "Work" },
  { name: "Testomonials" },
  { name: "Contact" },
];

const Navlinks = () => {
  return (
    <div className=" gap-6 hidden lg:flex">
      {LinkArray.map((link, index) => {
        return <NavLink key={index} text={link.name} />;
      })}
      <div className=":w-px h-6 bg-gray-100"></div>
      <LightTheme />
      <DButton text="Download CV" />
    </div>
  );
};

export default Navlinks;
