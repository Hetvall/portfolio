import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <span className="mb-5">Go back to my portfolio</span>
      <Link
        style={{
          backgroundColor: "black",
          color: "white",
          width: "100px",
          display: "flex",
          justifyContent: "center",
          borderRadius: "5px",
        }}
        to={"/"}
      >
        Go Back
      </Link>
    </div>
  );
};

export default Error;
