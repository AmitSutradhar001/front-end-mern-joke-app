import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../store/slice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function toTitleCase(str) {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.profile.user);
  const [loading, setLoading] = useState(true);
  const handleChange = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.patch(
        `https://back-end-mern-api.onrender.com/changekey/${user.userKey}`
      );
      console.log(res);
      dispatch(login(res.data.data));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      setLoading(false);
    }
  }, [user, navigate]);

  if (loading) {
    return null;
  }

  const fName = toTitleCase(user.fName);
  const lName = toTitleCase(user.lName);
  console.log(user);
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center items-center md:justify-normal md:items-start md:gap-28 mx-10 my-5 md:mx-20 md:my-14">
      <img
        src={user.avtar}
        alt="User Avatar"
        className="w-44 h-44 rounded-full border-2 border-green-500"
      />
      <div className="w-full border-2 border-black rounded-xl mr-20">
        <h1 className="text-3xl font-bold text-[#DCC72E] pt-5 pl-5">Name</h1>
        <h1 className="text-2xl font-bold pt-3 pl-5 text-gray-800">
          {fName + " " + lName}
        </h1>
        <h1 className="text-3xl font-bold text-[#DCC72E] pt-7 pl-5">Email</h1>
        <h1 className="text-2xl font-bold pt-3 pl-5 text-gray-800">
          {user.email}
        </h1>
        <h1 className="text-3xl font-bold text-[#DCC72E] pt-7 pl-5">API Key</h1>
        <h1 className="text-2xl font-bold pt-3 pl-5 text-gray-800">
          {user.userKey}
        </h1>
        <div className="flex gap-10 flex-wrap items-center my-7">
          <svg
            width="42"
            height="42"
            viewBox="0 0 62 56"
            fill="#9A2EDC"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-5 hidden sm:block"
          >
            <path
              d="M34.5612 18.3617L34.8812 19.6411L36.0268 18.9877L49.5522 11.2733L41.12 23.3342L40.2473 24.5825L41.7397 24.887L56.9977 28L41.7397 31.113L40.2473 31.4175L41.12 32.6658L49.5522 44.7267L36.0268 37.0123L34.8812 36.3589L34.5612 37.6383L31 51.8782L27.4388 37.6383L27.1188 36.3589L25.9732 37.0123L12.4478 44.7267L20.88 32.6658L21.7527 31.4175L20.2603 31.113L5.00233 28L20.2603 24.887L21.7527 24.5825L20.88 23.3342L12.4478 11.2733L25.9732 18.9877L27.1188 19.6411L27.4388 18.3617L31 4.12177L34.5612 18.3617Z"
              fill="#fff"
              stroke="#9A2EDC"
              strokeWidth="3"
            />
          </svg>
          <h1 className="text-2xl ml-5 text-[#9A2EDC] font-semibold">
            New API Key Generate
          </h1>
          <button
            onClick={handleChange}
            className="bg-[#DCC72E] mr-5 outline-none hover:scale-110 hover: duration-300 hover:ease-in-out text-white font-bold px-10 rounded-lg ml-10 py-2"
          >
            New Key
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
