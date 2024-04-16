// TODO add proper links
const Footer = () => {
  return (
    <footer
      className="bg-neutralLight-neutral100 py-4 flex justify-center items-center bottom-0 w-full text-neutralLight-neutral10"
      style={{ height: "4rem", flexShrink: 0 }}
    >
      <div className="flex gap-[0.5rem] px-[1rem] py-[0.1875rem] items-center text-neutralLight-neutral10">
        <a href="#" className="p3 p-[0.625rem] animationSmall">
          Privacy policy
        </a>
        <a href="#" className="p3 p-[0.625rem] animationSmall">
          Newsletter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
