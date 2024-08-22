import IconWithName from "./IconWithName";
import JavascriptIcon from "./icons/JavascriptIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import ReactIcon from "./icons/ReactIcon";
import NodeIcon from "./icons/NodeIcon";
import ExpressIcon from "./icons/ExpressIcon";
import NestIcon from "./icons/NestIcon";
import SocketIoIcon from "./icons/SocketIoIcon";
import MongoDb from "./icons/MongoDb";
import SassIcon from "./icons/SassIcon";
import FigmaIcon from "./icons/FigmaIcon";
import CypressIcon from "./icons/CypressIcon";
import Storybookicon from "./icons/Storybookicon";
import GitIcon from "./icons/GitIcon";

const AppDatas = [
  { name: "Javascript", icon: <JavascriptIcon /> },
  { name: "Typescript", icon: <TypescriptIcon /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "Next.js", icon: <img src="icon-nextjs.png" /> },
  { name: "Node.js", icon: <NodeIcon /> },
  { name: "Express", icon: <ExpressIcon /> },
  { name: "Nest.js", icon: <NestIcon /> },
  { name: "Socket.io", icon: <SocketIoIcon /> },
  { name: "Socket.io", icon: <img src="icon-postgresql.png" /> },
  { name: "MongoDb", icon: <MongoDb /> },
  { name: "Sass/Scss", icon: <SassIcon /> },
  { name: "Tailwindcss", icon: <img src="icon-tailwindcss.png" /> },
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "Cypress", icon: <CypressIcon /> },
  { name: "Storybook", icon: <Storybookicon /> },
  { name: "Git", icon: <GitIcon /> },

  ,
];

const IconSet = () => {
  return (
    <div className="mt-6 grid gap-12 grid-cols-3 grid-rows-3">
      {AppDatas.map((AppData, index) => {
        return (
          <IconWithName
            key={index}
            iconName={AppData.name}
            icon={AppData.icon}
          />
        );
      })}
    </div>
  );
};
export default IconSet;
