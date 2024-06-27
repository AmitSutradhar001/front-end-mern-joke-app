import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.profile.user);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="w-full h-screen flex justify-center flex-col items-center border-black border-2 gap-5 rounded-lg">
      <h2 className="text-6xl text-[#8C7E18] text-center font-semibold">
        Welcome To The API !
      </h2>
      <h2 className="text-3xl text-[#3D3B2A] font-semibold">
        Here is our API.
      </h2>
      <h2 className="text-6xl text-center max-w-[800px] text-[#3D3B2A] font-semibold">
        You will not be border
        <span className="text-[#D066EA]"> even if you want !</span>
      </h2>
      <Link to="/documentation">
        <button className="flex hover:scale-125 mt-4 hover:duration-300 hover:ease-in-out gap-3   justify-center items-center font-bold min-w-32 w-60 py-2 px-3 rounded-xl bg-[#DCC72E] text-white">
          Get Started
          <svg
            width="30"
            height="16"
            viewBox="0 0 36 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12H33.5M33.5 12L22 2M33.5 12L22 19.5"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
