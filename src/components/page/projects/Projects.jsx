import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center mt-10 bgImageSkills">
      <h1 className="text-6xl mb-16 font-bold items-center">Projects</h1>
      <div className="flex flex-row justify-around w-full">
        <div className="flex flex-col items-center space-y-4 mt-10">
          <img
            src="src/assets/ecommerce.png"
            alt="interactive card"
            className="w-15 h-60 object-cover"
          />
          <h2 className="font-semibold text-2xl">Ecommerce</h2>
          <Link
            to="https://github.com/Hetvall/Ecommerce"
            className="flex justify-center"
          >
            <img
              style={{ width: "5%" }}
              src="src/assets/Github_Orange.png"
              alt="GitHub Orange Icon"
            />
          </Link>
          <span className="text-orange-400">
            React.Js | VITE | JS | FireBase | CSS | MUI | Yup & Formik
          </span>
          <p className="max-w-md text-center">
            Project created with React JS on CODERHOUSE course, it will allow
            you to add/remove products from the cart, count them, filter for
            category, it contains a form that checks if everything is okay to
            continue, then it will give you a confirmation code, then it updades
            all the information on Firebase.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-3 mt-10">
          <img
            src="src/assets/man-united-fan-page.png"
            alt="interactive card"
            className="w-15 h-60 object-cover"
          />
          <h2 className="font-semibold text-2xl">Manchester United Fan Page</h2>
          <Link
            to="https://github.com/Hetvall/Manchester-United-Heritage"
            className="flex justify-center"
          >
            <img
              style={{ width: "5%" }}
              src="src/assets/Github_Orange.png"
              alt="GitHub Orange Icon"
            />
          </Link>
          <span className="text-orange-400">
            React.Js | VITE | JS | FireBase | CSS | MUI
          </span>
          <p className="max-w-md text-center">
            Personal project created in order to improve my React skills, it is
            a fan page that will allow you to navigate through the website, it
            contains a Log in/Log out system, and Sign up if you are not
            registered, it is connected with FireBase Auth.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-3 mt-10">
          <img
            src="src/assets/interactive-card-details.png"
            alt="interactive card"
            className="w-15 h-60 object-cover"
          />
          <h2 className="font-semibold text-2xl">Interactive Card</h2>
          <Link
            to="https://github.com/Hetvall/InteractiveCardDetails"
            className="flex justify-center"
          >
            <img
              style={{ width: "5%" }}
              src="src/assets/Github_Orange.png"
              alt="GitHub Orange Icon"
            />
          </Link>
          <span className="text-orange-400">JS | CSS</span>
          <p className="max-w-md text-center">
            This website was created thanks to a challenge on Front-End mentor,
            it is an interactive card that will allow you to add the card
            information on the left while on the right it updates on real time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
