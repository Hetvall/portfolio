import { Link } from "react-router-dom";
import profilePhoto from "../../../assets/Orange-Dark-Gray-Headshot.png";
import gitHubBlackIcon from "../../../assets/GitHub_Dark_Gray.png";
import linkedInIcon from "../../../assets/LinkedIn_Dark_Gray.png";
import whatsAppIcon from "../../../assets/Wsp_Dark_Gray.png";
import instagramIcon from "../../../assets/Instagram_Dark_Gray.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="flex-grow flex justify-center items-center bgImageHome flex-col sm:flex-row">
        <div className="text-center">
          <h1 className="text-5xl mb-3">👋Hello there!</h1>
          <h3 className="text-4xl">
            I am James Orozco,
            <span className="font-extrabold"> Front-End Developer</span>
          </h3>
          <div className="mt-8 sm:justify-start md:justify-start">
            <Link
              to="https://github.com/Hetvall"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-7 sm:w-8 xl:w-12 opacity-50 hover:opacity-100">
                <img src={gitHubBlackIcon} alt="GitHub Icon" />
              </button>
            </Link>

            <Link
              to="https://www.linkedin.com/in/james-orozco-922712291/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-7 sm:w-8 xl:w-12 ml-5 opacity-50 hover:opacity-100">
                <img src={linkedInIcon} alt="LinkedIn Icon" />
              </button>
            </Link>
            <Link
              to="https://api.whatsapp.com/send/?phone=3137112104&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-7 sm:w-8 xl:w-12 ml-5 opacity-50 hover:opacity-100">
                <img src={whatsAppIcon} alt="WhatsApp Icon" />
              </button>
            </Link>

            <Link
              to="https://www.instagram.com/orozcoh7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-7 sm:w-8 xl:w-12 ml-5 opacity-50 hover:opacity-100">
                <img src={instagramIcon} alt="Instagram Icon" />
              </button>
            </Link>
          </div>
        </div>
        <img
          className="sm:w-2/3 md:w-1/4 lg:w-1/3 sm:ml-0"
          src={profilePhoto}
          alt="personal photo"
        />
      </div>
    </div>
  );
};

export default Home;
