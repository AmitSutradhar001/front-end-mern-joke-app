import { NavLink, useLocation } from "react-router-dom";

const SideBarAboutPage = () => {
  const location = useLocation();

  const isRootActive = location.pathname === "/aboutme";

  return (
    <div className="mt-16 ml-10 sticky flex flex-col justify-center items-center gap-5">
      <img src="/me.png" alt="owner" className="rounded-full w-32" />
      <div className="flex md:flex-col justify-center items-center p-2 gap-12 md:w-[200px] md:h-[250px] rounded-lg border-black border-2">
        <NavLink
          to="/aboutme"
          className={() =>
            isRootActive
              ? "text-[#AF2EDC] hover:text-[#DCC72E] text-xl font-bold"
              : "text-[#DCC72E] hover:text-[#AF2EDC] text-xl font-bold"
          }
        >
          <h2>About</h2>
        </NavLink>
        <NavLink
          to="/aboutme/skills"
          className={({ isActive }) =>
            isActive
              ? "text-[#AF2EDC] hover:text-[#DCC72E] text-xl font-bold"
              : "text-[#DCC72E] hover:text-[#AF2EDC] text-xl font-bold"
          }
        >
          <h2>Skills</h2>
        </NavLink>
        <NavLink
          to="/aboutme/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#AF2EDC] hover:text-[#DCC72E] text-xl font-bold"
              : "text-[#DCC72E] hover:text-[#AF2EDC] text-xl font-bold"
          }
        >
          <h2>Contact</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBarAboutPage;
