import Facebook from "../icons/Facebook";
import Github from "../icons/Github";
import Insta from "../icons/Insta";
import Linkedin from "../icons/Linkedin";
import Note from "../icons/Note";
import Twitter from "../icons/Twitter";

const icons = {
  Facebook: Facebook,
  Github: Github,
  Twitter: Twitter,
  Insta: Insta,
  Linkedin: Linkedin,
  Note: Note,
};

const CustomIcon = ({ name, ...props }) => {
  const Icon = icons[name];
  return <Icon {...props} />;
};

export default CustomIcon;
