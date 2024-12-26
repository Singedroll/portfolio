const Experience = (props) => {
  const { year, title } = props;
  return (
    <div className="flex lg:flex-row flex-col gap-4 self-stretch p-8 bg-white shadow-lg lg:justify-between">
      <img className="w-28 h-7" src="/UpworkLogo.png" />
      <p className="text-base font-normal text-gray-700 lg:order-last">
        {year}
      </p>
      <div className="flex flex-col lg:flex-col lg:gap-2">
        <p className="text-lg font-semibold text-gray-900">{title}</p>
        <ul className="list-disc ml-5 text-gray-600">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
          <li>Sed quis justo ac magna.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
    </div>
  );
};
export default Experience;
