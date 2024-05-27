import htmlIcon from "../../../assets/Icon-22.png";
import reactIcon from "../../../assets/Icon-21.png";
import jsIcon from "../../../assets/Icon-23.png";
import gitIcon from "../../../assets/Icon-16.png";
import viteIcon from "../../../assets/Icon-17.png";
import tailwindIcon from "../../../assets/Icon-18.png";
import sassIcon from "../../../assets/Icon-19.png";
import firebaseIcon from "../../../assets/Icon-20.png";
import cssIcon from "../../../assets/Icon-15.png";

const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center mt-20 min-h-screen bgImageSkills">
      <h1 className="text-6xl mb-10 font-bold">Skills</h1>
      <div className="flex flex-col sm:flex-row flex-wrap justify-evenly cursor-pointer">
        {[
          { icon: reactIcon, name: "React Js" },
          { icon: jsIcon, name: "JavaScript" },
          { icon: viteIcon, name: "VITE" },
          { icon: gitIcon, name: "Git" },
          { icon: firebaseIcon, name: "Firebase" },
          { icon: htmlIcon, name: "HTML" },
          { icon: cssIcon, name: "CSS" },
          { icon: tailwindIcon, name: "Tailwind CSS" },
          { icon: sassIcon, name: "SASS" },
        ].map((skill, index) => (
          <div
            key={index}
            className="w-full sm:w-1/3 xl:w-1/4 h-48 xl:h-32 bg-customGray mb-5 sm:m-2 xl:m-5 rounded-xl flex flex-col items-center justify-center shadow-lg duration-500 hover:scale-110 hover:shadow-orange-400"
          >
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              style={{ width: 40, height: 40 }}
              className="bg-customGray"
            />
            <h2 className="bg-customGray text-white  mt-2">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
