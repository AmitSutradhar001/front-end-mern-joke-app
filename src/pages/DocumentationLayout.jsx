import { Outlet } from "react-router-dom";
import SideBarDocPage from "../components/SideBarDocPage";

const Documentation = () => {
  return (
    <div className="flex flex-col md:flex-row gap-20">
      <SideBarDocPage />
      <Outlet />
    </div>
  );
};

export default Documentation;
