// components/Footer.js

const Footer = () => {
  return (
    <footer
      className="bg-white py-4 flex justify-center items-center fixed bottom-0 w-full text-neutralLight-neutral10"
      style={{ height: "4rem", flexShrink: 0 }}
    >
      <div className="flex gap-[0.5rem] px-[1rem] py-[0.1875rem] items-center">
        <a href="#" className="p3 p-[0.625rem]">
          Privacy policy
        </a>
        <a href="#" className="p3 p-[0.625rem]">
          Newsletter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
