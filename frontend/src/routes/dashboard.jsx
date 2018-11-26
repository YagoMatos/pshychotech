import Dashboard from "../views/Dashboard/Dashboard.jsx";
import Notifications from "../views/Notifications/Notifications.jsx";
import Icons from "../views/Icons/Icons.jsx";
import TableList from "../views/TableList/TableList.jsx";
import PatientPage from "../views/UserPage/PatientPage.jsx";
import RegisterPage from "../views/UserPage/RegisterPage.jsx";
import SearchPage from "../views/UserPage/SearchPage.jsx";
import PersonPage from "../views/UserPage/PersonPage.jsx";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Menu",
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
    name: "agenda",
    icon: "nc-icon nc-calendar-60",
    component: Notifications
  },
  {
    path: "/user-page",
    name: "Pacientes",
    icon: "nc-icon nc-single-02",
    component: PatientPage
  },
  {
    path: "/tables",
    name: "Prontuário",
    icon: "nc-icon nc-tile-56",
    component: TableList
  },
  {
    path: "/patient-register",
    component: RegisterPage
  },
  {
    path: "/patient-search",
    component: SearchPage
  },
  {
    path: "/patient",
    component: PersonPage
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
