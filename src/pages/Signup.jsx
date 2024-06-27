import { useEffect, useState } from "react";
import Button from "../components/Button";
import InputLabel from "../components/Input&Label";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

const Signup = () => {
  const [err, setErr] = useState("");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = getCookie("jwt");
    if (token) {
      navigate("/welcome");
    }
  }, [navigate]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErr("");
    setPending(true);

    const formData = new FormData(event.target);

    try {
      const response = await axios.post(
        "https://back-end-mern-api.onrender.com/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErr(error.response.data.message);
      } else {
        setErr("An unexpected error occurred.");
      }
    } finally {
      setPending(false);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center border-black border-2 rounded-lg">
      <form className="flex flex-col flex-wrap gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-5">
          <InputLabel
            label={"First Name"}
            inputClasses={""}
            inputType={"text"}
            placeholder={"Enter Your First Name..."}
            name={"fName"}
            id={"sFname"}
          />
          <InputLabel
            label={"Last Name"}
            inputClasses={""}
            inputType={"text"}
            placeholder={"Enter Your Last Name..."}
            name={"lName"}
            id={"sLname"}
          />
        </div>
        <InputLabel
          label={"Email"}
          inputClasses={"w-96"}
          inputType={"email"}
          placeholder={"Enter Your Email..."}
          name={"email"}
          id={"sEmail"}
        />
        <InputLabel
          label={"Password"}
          inputClasses={"w-96"}
          inputType={"password"}
          placeholder={"Enter Your Password..."}
          name={"password"}
          id={"sPassword"}
        />
        <input type="file" name="file" />
        <div className="flex flex-col justify-center items-center">
          <Button
            text={"Signup"}
            type={"submit"}
            classes={"bg-sky-500 w-32 text-white"}
            pending={pending}
          />
          <p className="text-red-600 text-xl font-semibold">{err}</p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
