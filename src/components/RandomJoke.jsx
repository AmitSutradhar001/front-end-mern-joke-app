import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const RandomJoke = () => {
  const [joke, setJoke] = useState();
  const user = useSelector((state) => state.profile.user);
  const handleAPI = async () => {
    if (!user) {
      setJoke({
        message: "Please Login to get the user key!",
      });
      return;
    }
    try {
      const res = await axios.get(
        `https://rest-api-jokes-app.onrender.com/api/${user.userKey}`
      );
      console.log(res.data);
      setJoke(res.data);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke({ error: "Failed to fetch joke." });
    }
  };

  return (
    <div className="sm:border-2 sm:ml-5 md:ml-10 border-black rounded-lg flex flex-col justify-start">
      <h2 className="text-2xl font-bold px-5 pt-5">Random Jokes</h2>
      <h2 className="text-lg font-bold px-5 pt-7">
        In Random Jokes you will get a new joke every time you request on the
        server.
      </h2>
      <div className="flex flex-col md:flex-row md:gap-10">
        <h2 className="text-2xl font-bold px-5 pt-7">End Point:</h2>
        <h2 className="text-lg font-semibold px-5 pt-8">
          https://rest-api-jokes-app.onrender.com/api/key
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:gap-10">
        <h2 className="text-2xl font-bold px-5 pt-7">Example:</h2>
        <h2 className="text-lg font-semibold px-5 pt-8">
          https://rest-api-jokes-app.onrender.com/api/asdfghjkl
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:gap-10">
        <h2 className="text-2xl font-bold px-5 pt-7">Demo:</h2>
        <p className="text-lg font-semibold px-5 pt-8">
          axios.get(`https://rest-api-jokes-app.onrender.com/api/asdfghjkl`)
          <br />
          .then((response) =&gt; console.log(response));
        </p>
      </div>
      <div className="flex justify-center items-center py-5 px-5">
        <div className="w-[400px] h-[200px] bg-green-300 rounded-lg flex flex-col gap-5 justify-center items-center">
          <textarea
            value={JSON.stringify(joke, null, 2)} // Convert joke object to JSON string
            className="bg-white w-[300px] outline-none resize-none rounded-lg h-[100px] px-4 py-2"
            readOnly // Make textarea read-only
          />
          <button
            onClick={handleAPI}
            className="bg-[#DCC72E] text-lg font-semibold px-10 rounded-xl mt-3"
          >
            Get Joke
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomJoke;
