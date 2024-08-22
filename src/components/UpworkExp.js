const Experience = (props) => {
  const { year, title } = props;
  return (
    <div className="flex flex-col gap-4 self-stretch p-8 bg-white shadow-lg">
      <img className="w-28 h-7" src="/UpworkLogo.png" />
      <p className="text-base items-start font-normal text-gray-700">{year}</p>
      <p className="text-lg font-semibold text-gray-900">{title}</p>
      <ul className="list-disc ml-5 text-gray-600 ">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
        <li>Sed quis justo ac magna.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
    </div>
  );
};
export default Experience;
