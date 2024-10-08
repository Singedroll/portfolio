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
import CypressIcon from "./icons/Cypressicon";
import Storybookicon from "./icons/Storybookicon";
import GitIcon from "./icons/GitIcon";
import Button from "./Button";

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
    <div className="py-16 px-4 md:py-24 md:px-20">
      <div className="flex flex-col justify-center items-center py-0 px-8 gap-12">
        <div className="flex flex-col items-center gap-4">
          <div>
            <Button text="skills" />
          </div>
          <div className="flex items-center justify-center text-gray-600 text-lg">
            The skills, tools and technologies I am really good at:
          </div>
        </div>
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
      </div>
    </div>
  );
};
export default IconSet;
