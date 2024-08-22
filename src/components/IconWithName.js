const IconWithName = (props) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <div className=" flex items-center justify-center"> {props.icon}</div>
      <p className="text-center"> {props.iconName} </p>
    </div>
  );
};
export default IconWithName;
