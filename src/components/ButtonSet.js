import Button from "./Button";

const ButtonDatas = [
  { name: "React" },
  { name: "Next.js" },
  { name: "Typescript" },
  { name: "Nest.js" },
  { name: "PostGreSQL" },
  { name: "Tailwindcss" },
  { name: "Figma" },
  { name: "Cypress" },
  { name: "Storybook" },
  { name: "Git" },
];

const ButtonSet = () => {
  return (
    <div className="flex gap-2 content-center flex-wrap  items-center">
      {ButtonDatas.map((ButtonData, index) => {
        return <Button key={index} text={ButtonData.name} />;
      })}
    </div>
  );
};
export default ButtonSet;
