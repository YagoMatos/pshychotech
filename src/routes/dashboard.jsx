import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import TableList from "views/TableList/TableList.jsx";
import UserPage from "views/UserPage/UserPage.jsx";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: TableList
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
