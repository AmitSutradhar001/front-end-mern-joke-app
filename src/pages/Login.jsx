import { useState } from "react";
import Button from "../components/Button";
import InputLabel from "../components/Input&Label";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/slice";

const Login = () => {
  const [err, setErr] = useState("");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErr("");
    setPending((pev) => !pev);
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("lpassword");
    try {
      if (!email || !password) {
        setPending((pev) => !pev);
        return setErr("please fill the form!");
      }
      const res = await axios.post(
        "https://back-end-mern-api.onrender.com/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const userData = res.data;
      localStorage.setItem("jwt", userData.jwt);
      console.log(typeof res.status);
      if (res.status === 200) {
        dispatch(login(userData.data));
        navigate("/welcome");
      }
    } catch (error) {
      if (error.response) {
        setErr(error.response.data.message);
        console.error("Login failed:", error.response.data.message);
      } else {
        setErr(error.message);
        console.error("An error occurred:", error.message);
      }
    }
    setPending((pev) => !pev);
  };

  return (
    <div className="w-full h-screen  flex justify-center items-center border-black border-2 rounded-lg">
      <form className="flex flex-col flex-wrap gap-5" onSubmit={handleSubmit}>
        <InputLabel
          label={"Email"}
          inputClasses={"md:w-96 w-60"}
          inputType={"email"}
          placeholder={"Enter Your Email..."}
          name={"email"}
          id={"lEmail"}
        />
        <InputLabel
          label={"Password"}
          inputClasses={"md:w-96 w-60"}
          inputType={"password"}
          placeholder={"Enter Your Password..."}
          name={"lpassword"}
          id={"lPassword"}
        />
        <div className="flex flex-col gap-5 justify-center items-center">
          <Button
            text={"Login"}
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

export default Login;
