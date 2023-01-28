import { NavLink } from "react-router-dom";
import images from "../../constants/images";

const routes = [
  {
    path: "/",
    name: "Dashboard",
  },
  {
    path: "/profile",
    name: "Profile",
  },
  {
    path: "/messages",
    name: "Messages",
  },
  {
    path: "/wallet",
    name: "Wallet",
  },
  {
    path: "/analytics",
    name: "Analytics",
  },
  {
    path: "/order",
    name: "Order",
  },
  {
    path: "/settings",
    name: "Settings",
  },
  {
    path: "/support",
    name: "Support",
  },
];

const SideBar = ({ children }) => {
  return (
    <>
      <div className="flex shadow-md rounded-lg bg-white">
        <nav className="bg-gray-800 p-4 h-screen border-r-4 border-500">
          <img src={images.coinLogo} alt="app__logo" className="w-40 h-10" />
          {routes.map((route, index) => {
            return (
              <NavLink
                to={route.path}
                key={index}
                className="text-white font-medium block mr-14 py-2"
              >
                {route.name}
              </NavLink>
            );
          })}
        </nav>
      </div>
      <main className="mt-14 ml-4">{children}</main>
    </>
  );
};

export default SideBar;
