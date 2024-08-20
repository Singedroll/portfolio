import AboutMeText from "./AboutMeData";
import AboutMeText2 from "./AboutMeData2";
const datas = [
  "I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code.",
  "Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.",
  "With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub.",
  "Finally, some quick bits about me.",
];
const quirks = [
  "B.E. in Computer Engineering",
  "Full time freelancer",
  "Avid learner",
];
const AboutMe = () => {
  return (
    <div className="flex flex-col gap-4">
      {datas.map((data, index) => {
        return <AboutMeText key={index} text={data} />;
      })}
      <ul className="flex flex-wrap">
        {quirks.map((quirk, index, array) => {
          return <AboutMeText2 key={index} text={quirk} />;
        })}
      </ul>
    </div>
  );
};

export default AboutMe;
