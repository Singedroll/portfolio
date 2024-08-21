const Button = (props) => {
  return (
    <button className="flex justify-center items-center  bg-gray-200 px-4 py-4 rounded-xl h-7">
      {props.text}
    </button>
  );
};
export default Button;
