import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slice";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  async function getUser() {
    try {
      const jwt = localStorage.getItem("jwt");
      const res = await axios.post(
        "https://back-end-mern-api.onrender.com/current-user",

        {
          jwt,
        }
      );
      const userData = res.data;
      console.log(userData);
      if (res.status === 200) {
        dispatch(login(userData.data));
      }
    } catch (error) {
      console.log("Error getting cookie:", error);
    }
  }
  useEffect(() => {
    if (!user) {
      getUser();
    }
  });

  return (
    <div className="rounded-md border-black border-2 h-screen">
      <div className="flex flex-row pt-5 flex-wrap justify-start">
        <img src="./apiImg.webp" className="h-[500px] p-10" />
        <div className="border-black pt-10 border2 flex flex-col gap-8 text-black justify-start">
          <h2 className=" text-4xl font-bold text-gray-700">
            Did you say an API ?
          </h2>
          <div className="flex gap-3 items-center justify-start">
            <svg
              width="36"
              height="21"
              viewBox="0 0 36 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12H33.5M33.5 12L22 2M33.5 12L22 19.5"
                stroke="#4a5568"
                strokeWidth="3"
              />
            </svg>
            <h2 className="text-gray-700 text-2xl font-bold">
              I got it. You are in the right place!
            </h2>
          </div>
          <p className="text-3xl md:text-5xl font-bold max-w-[600px] text-[#1218AA]">
            It will help you overcome your boredom.
          </p>
          <div className="flex gap-5 items-center text-center ">
            <svg
              width="32"
              height="36"
              viewBox="0 0 62 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.5612 18.3617L34.8812 19.6411L36.0268 18.9877L49.5522 11.2733L41.12 23.3342L40.2473 24.5825L41.7397 24.887L56.9977 28L41.7397 31.113L40.2473 31.4175L41.12 32.6658L49.5522 44.7267L36.0268 37.0123L34.8812 36.3589L34.5612 37.6383L31 51.8782L27.4388 37.6383L27.1188 36.3589L25.9732 37.0123L12.4478 44.7267L20.88 32.6658L21.7527 31.4175L20.2603 31.113L5.00233 28L20.2603 24.887L21.7527 24.5825L20.88 23.3342L12.4478 11.2733L25.9732 18.9877L27.1188 19.6411L27.4388 18.3617L31 4.12177L34.5612 18.3617Z"
                fill="#4a5568"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
            <p className="text-3xl font-bold text-gray-700">
              Don’t say it loudly.
            </p>
          </div>
          <div className="flex md:gap-5 items-center text-center">
            <svg
              width="32"
              height="36"
              viewBox="0 0 62 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.5612 18.3617L34.8812 19.6411L36.0268 18.9877L49.5522 11.2733L41.12 23.3342L40.2473 24.5825L41.7397 24.887L56.9977 28L41.7397 31.113L40.2473 31.4175L41.12 32.6658L49.5522 44.7267L36.0268 37.0123L34.8812 36.3589L34.5612 37.6383L31 51.8782L27.4388 37.6383L27.1188 36.3589L25.9732 37.0123L12.4478 44.7267L20.88 32.6658L21.7527 31.4175L20.2603 31.113L5.00233 28L20.2603 24.887L21.7527 24.5825L20.88 23.3342L12.4478 11.2733L25.9732 18.9877L27.1188 19.6411L27.4388 18.3617L31 4.12177L34.5612 18.3617Z"
                fill="#4a5568"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
            <p className="text-2xl font-bold text-gray-700">
              Others will also know and try to steal your jokes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
