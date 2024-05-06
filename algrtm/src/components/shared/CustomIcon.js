import ArrowDown from "../icons/ArrowDown";
import ArrowUp from "../icons/ArrowUp";
import Facebook from "../icons/Facebook";
import Github from "../icons/Github";
import Insta from "../icons/Insta";
import Linkedin from "../icons/Linkedin";
import Note from "../icons/Note";
import Twitter from "../icons/Twitter";
import ArrowUpRight from "../icons/ArrowUpRight";
import Python from "../logos/Python";
import Pandas from "../logos/Pandas";
import Hugging from "../logos/Hugging";
import Numpy from "../logos/Numpy";
import Redis from "../logos/Redis";
import Postgresql from "../logos/Postgresql";
import AWS from "../logos/AWS";
import Docker from "../logos/Docker";
import Pytorch from "../logos/Pytorch";
import Streamlit from "../logos/Streamlit";
import ArrowDownLong from "../icons/ArrowDownLong";
import CurvedArrow from "../icons/CurvedArrow";

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
  Python: Python,
  Pandas: Pandas,
  Hugging: Hugging,
  Numpy: Numpy,
  Redis: Redis,
  Postgresql: Postgresql,
  AWS: AWS,
  Docker: Docker,
  Pytorch: Pytorch,
  Streamlit: Streamlit,
  ArrowDownLong: ArrowDownLong,
  CurvedArrow: CurvedArrow,
};

const CustomIcon = ({ name, ...props }) => {
  const Icon = icons[name];
  return <Icon {...props} />;
};

export default CustomIcon;
