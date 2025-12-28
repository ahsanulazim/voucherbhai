import { Outlet } from "react-router";
import Drawer from "./../src/components/Drawer";

const MainLayout = () => {
  return (
    <Drawer>
      <Outlet />
    </Drawer>
  );
};

export default MainLayout;
