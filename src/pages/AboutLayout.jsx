import { Outlet } from "react-router-dom";
import SideBarAboutPage from "../components/SideBarAboutPage";

const AboutLayout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-20">
      <SideBarAboutPage />
      <Outlet />
    </div>
  );
};

export default AboutLayout;
