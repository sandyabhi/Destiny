import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="pt-2 px-8 h-[300px] bg-white text-black flex flex-col items-center">
      <div className="py-4 flex flex-col items-center">
        <img className="w-10 h-10" src="assets/pink-inky.png" />
        <p className="text-blue-600 text-3xl font-semibold">ahead</p>
      </div>

      <div className="py-4 flex items-center gap-10">
        <span className="flex flex-row items-center">
          <span className="p-2 bg-teal-400 rounded-full mr-2">
            <FaLocationDot />
          </span>

          <p>AuguststaBe 26, 10117 Berlin</p>
        </span>
        <span className="flex flex-row items-center">
          <span className="p-2 bg-teal-400 rounded-full mr-2">
            <AiOutlineMail />
          </span>
          <p>hi@ahead-app.com</p>
        </span>
      </div>

      <div className="py-4">
        <img className="w-32 h-10" src="assets/appleStore.jpg" />
      </div>

      <div className="py-4">© 2023 Ahead app, All right reserved</div>
    </div>
  );
};

export default Footer;
