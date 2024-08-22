import ForwardIcon from "./icons/ForwardIcon";
import CatIcon from "./icons/CatIcon";
import FigmaIcon2 from "./icons/FigmaIcon2";
import PhoneIcon from "./icons/PhoneIcon";

const ContactMe2 = ({ text }) => {
  return (
    <div className="flex gap-4 item-center justify-center">
      <PhoneIcon />
      <span className="text-lg font-semibold">{text}</span>
      <ForwardIcon />
    </div>
  );
};
export default ContactMe2;
