const DButton = (props) => {
  return (
    <button className="flex  items-center justify-center bg-gray-900 text-gray-50 px-4  py-1 rounded-xl">
      {props.text}
    </button>
  );
};
export default DButton;
