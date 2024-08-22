import MailIcon from "./icons/MailIcon";
import ForwardIcon from "./icons/ForwardIcon";
import CatIcon from "./icons/CatIcon";
import FigmaIcon2 from "./icons/FigmaIcon2";
import PhoneIcon from "./icons/PhoneIcon";

const ContactMe = ({ text }) => {
  return (
    <div className="flex gap-4 item-center justify-center">
      <MailIcon />
      <span className="text-lg font-semibold">{text}</span>
      <ForwardIcon />
    </div>
  );
};
export default ContactMe;
