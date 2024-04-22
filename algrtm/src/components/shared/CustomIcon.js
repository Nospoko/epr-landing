import ArrowDown from "../icons/ArrowDown";
import ArrowUp from "../icons/ArrowUp";
import Facebook from "../icons/Facebook";
import Github from "../icons/Github";
import Insta from "../icons/Insta";
import Linkedin from "../icons/Linkedin";
import Note from "../icons/Note";
import Twitter from "../icons/Twitter";
import ArrowUpRight from "../icons/ArrowUpRight";

const icons = {
  Facebook: Facebook,
  Github: Github,
  Twitter: Twitter,
  Insta: Insta,
  Linkedin: Linkedin,
  Note: Note,
  ArrowUp: ArrowUp,
  ArrowDown: ArrowDown,
  ArrowUpRight: ArrowUpRight,
};

const CustomIcon = ({ name, ...props }) => {
  const Icon = icons[name];
  return <Icon {...props} />;
};

export default CustomIcon;
