const IconWithName = (props) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      {props.icon}
      <p> {props.iconName} </p>
    </div>
  );
};
export default IconWithName;
