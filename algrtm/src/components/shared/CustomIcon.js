import Facebook from "../icons/Facebook";
import GitHub from "../icons/GitHub";
import Insta from "../icons/Insta";
import LinkedIn from "../icons/LinkedIn";
import Note from "../icons/Note";
import Twitter from "../icons/Twitter";

const icons = {
  Facebook: Facebook,
  GitHub: GitHub,
  Twitter: Twitter,
  Insta: Insta,
  LinkedIn: LinkedIn,
  Note: Note,
};

const CustomIcon = ({ name, ...props }) => {
  const Icon = icons[name];
  return <Icon {...props} />;
};

export default CustomIcon;
