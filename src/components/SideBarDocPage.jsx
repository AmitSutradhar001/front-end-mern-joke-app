import { NavLink, useLocation } from "react-router-dom";

const SideBarDocPage = () => {
  const location = useLocation();

  const isRootActive = location.pathname === "/documentation";

  return (
    <>
      <div className="mt-28 ml-10 flex justify-center items-center sticky">
        <div className="flex flex-row md:flex-col justify-center items-center gap-6 md:gap-12 md:w-[200px]  md:h-[250px] rounded-lg border-black border-2">
          <NavLink
            to="/documentation"
            className={() =>
              isRootActive
                ? "text-[#AF2EDC] hover:text-[#DCC72E] text-xl font-bold"
                : "text-[#DCC72E] hover:text-[#AF2EDC] text-xl font-bold"
            }
          >
            <h2>Random Joke</h2>
          </NavLink>
          <NavLink
            to="/documentation/jokewithid"
            className={({ isActive }) =>
              isActive
                ? "text-[#AF2EDC] hover:text-[#DCC72E] text-xl font-bold"
                : "text-[#DCC72E] hover:text-[#AF2EDC] text-xl font-bold"
            }
          >
            <h2>Joke with ID</h2>
          </NavLink>
          <NavLink
            to="/documentation/jokewithlimit"
            className={({ isActive }) =>
              isActive
                ? "text-[#AF2EDC] hover:text-[#DCC72E] text-xl font-bold"
                : "text-[#DCC72E] hover:text-[#AF2EDC] text-xl font-bold"
            }
          >
            <h2>Joke with Limit</h2>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default SideBarDocPage;
