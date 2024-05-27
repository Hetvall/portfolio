import { Link } from "react-router-dom";
import cvIcon from "../../../assets/CV Icon-Dark-Gray.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center mt-10 bgImageHome">
      <div className="flex-initial flex justify-center items-center mt-40">
        <div className="text-center">
          <h1 className="text-6xl mb-10 font-bold">About Me</h1>
          <div>
            <p>
              I consider myself as someone who never give up, I am constantly
              working to get better, to learn and improve professionally and
              personally.
            </p>
            <p>
              I have been coding for more than a year now in personal projects,
              and It became my new passion instantly,
            </p>
            <p>
              looking forward to improve with every project I work on while
              studying in online courses.
            </p>
            <p>
              Other words to describe myself would be hard worker, quick
              learner, team worker & perfectionist,
            </p>
            <p>
              I like to keep the code as clean, readable & organized as
              possible, giving my best to achieve and get the best result
              possible.
            </p>

            <br />

            <h2 className="font-bold mt-10">
              Here is my CV for further information!
            </h2>
            <div className="mt-10">
              <Link to="https://heyzine.com/flip-book/687a4a9a29.html">
                <img
                  src={cvIcon}
                  alt=""
                  style={{ width: 80, height: 80 }}
                  className="mx-auto duration-500 hover:scale-110  hover:shadow-orange-400"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
