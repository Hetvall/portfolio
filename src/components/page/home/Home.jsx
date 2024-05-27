import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="flex-grow flex justify-center items-center bgImageHome">
        <div className="text-center">
          <h1 className="text-5xl mb-3">👋Hello there!</h1>
          <h3 className="text-4xl">
            I am James Orozco,
            <span className="font-extrabold"> Front-End Developer</span>
          </h3>
          <div className="mt-8">
            <Link to="https://github.com/Hetvall">
              <button className="">
                <img
                  src={"src/assets/GitHub_Dark_Gray.png"}
                  alt="GitHub Icon"
                  className="w-7 sm:w-8 xl:w-12 opacity-50 hover:opacity-100 "
                />
              </button>
            </Link>

            <Link to="https://www.linkedin.com/in/james-orozco-922712291/">
              <button>
                <img
                  src={"src/assets/LinkedIn_dark_Gray.png"}
                  alt="LinkedIn Icon"
                  className="w-7 sm:w-8 xl:w-12 ml-5 opacity-50 hover:opacity-100 "
                />
              </button>
            </Link>
            <Link to="https://api.whatsapp.com/send/?phone=3137112104&text&type=phone_number&app_absent=0">
              <button>
                <img
                  src={"src/assets/Wsp_dark_Gray.png"}
                  alt="WhatsApp Icon"
                  className="w-7 sm:w-8 xl:w-12 ml-5 opacity-50 hover:opacity-100 "
                />
              </button>
            </Link>

            <Link to="https://www.instagram.com/orozcoh7/">
              <button>
                <img
                  src={"src/assets/Instagram_Dark_Gray.png"}
                  alt="Instagram Icon"
                  className="w-7 sm:w-8 xl:w-12 ml-5 opacity-50 hover:opacity-100 "
                />
              </button>
            </Link>
          </div>
        </div>

        <img
          className="w-1/3 ml-20"
          src={"src/assets/Orange-Dark-Gray-Headshot.png"}
          alt="personal photo"
        />
      </div>
    </div>
  );
};

export default Home;
