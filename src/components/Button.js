const Button = (props) => {
  return (
    <button className="flex justify-center bg-gray-200 px-6  py-1 rounded-xl">
      {props.text}
    </button>
  );
};
export default Button;
