import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const navigate = useNavigate();
  const [login, setLoggedIn] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    navigate("/");
  };
  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [user, dispatch]);

  return (
    <div className="flex flex-wrap gap-10 md:gap-36 justify-around mt-8 w-full">
      <div>
        <Link to="/">
          <img src="/navbarLogo.png" className="h-[50px]" alt="Navbar Logo" />
        </Link>
      </div>
      <div className="flex flex-wrap justify-around gap-10">
        <NavLink
          to="/aboutme"
          className={({ isActive }) =>
            isActive ? "bg-green-300 rounded-xl" : ""
          }
        >
          <Button
            text={"About me"}
            classes={"text-black border-black border-2"}
          />
        </NavLink>
        <NavLink
          to="/documentation"
          className={({ isActive }) =>
            isActive ? "bg-green-300 rounded-xl" : ""
          }
        >
          <Button
            text={"Documentation"}
            classes={"text-black border-black border-2"}
          />
        </NavLink>
        {login ? (
          <>
            <NavLink
              to="/welcome"
              className={({ isActive }) =>
                isActive ? "bg-green-300 rounded-xl" : ""
              }
            >
              <Button
                text={"Welcome"}
                classes={"text-black border-black border-2"}
              />
            </NavLink>
            <div className="rounded-xl">
              <button
                onClick={handleLogout}
                className="text-black border-black border-2 flex hover:scale-125 hover:duration-300 hover:ease-in-out justify-center items-center font-bold min-w-32 py-2 px-3 rounded-lg"
              >
                Logout
              </button>
            </div>
            <NavLink className="rounded-xl" to="/profile">
              <img
                src={user.avtar}
                className="bg-white border-2 border-green-400 w-10 rounded-full"
                alt="Profile Avatar"
              />
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "bg-green-300 rounded-xl" : ""
              }
            >
              <Button
                text={"Signup"}
                classes={"text-black border-black border-2"}
              />
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "bg-green-300 rounded-xl" : ""
              }
            >
              <Button
                text={"Login"}
                classes={"text-black border-black border-2"}
              />
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
