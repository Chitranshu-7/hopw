import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Componants/Home";
import Authrityemailverify from "./HighAuthority/Authrityemailverify";
import Otphighauth from "./HighAuthority/Otphighauth";
import ResetPasswordAuth from "./HighAuthority/ResetPasswordAuth";
import AuthResgister from "./HighAuthority/AuthResgister";
import HomeAuth from "./HighAuthority/HomeAuth";
import Polishstationrating from "./HighAuthority/Polishstationrating";
import Navbar from "./Componants/Navbar";
import Advanceapoint from "./Componants/Advanceapoint";
import Appointment from "./Componants/Appointment";
import Approveapoint from "./Componants/Approveapoint";
import Approvedreq from "./Componants/Approvedreq";
import Citizenport from "./Componants/Citizenport";
import Complaint from "./Componants/Complaint";
import Pendingreq from "./Componants/Pendingreq";
import Login from "./Componants/Login";
import ForgotPassword from "./Componants/ForgotPassword";
import Chatgrow from "./Componants/Chatgrow";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/chatgrow",
    element:<Chatgrow/>
  },
  {
    path: "/homeauth",
    element: <HomeAuth />,
  },
  {
    path: "/authverify",
    element: <Authrityemailverify />,
  },
  {
    path: "/authotp",
    element: <Otphighauth />
  },
  {
    path: "/authreset",
    element: <ResetPasswordAuth />,
  },
  {
    path: "/policefrating",
    element: <Polishstationrating />,
  },
  {
    path: "/authlogin",
    element: <AuthResgister />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },

  // Citizen Port

  {
    path: "/citizenport",
    element: <Citizenport />,
  },

  {
    path: "/approveapoint",
    element: <Approveapoint />,
  },
  {
    path: "/approvedreq",
    element: <Approvedreq />,
  },

  {
    path: "/complaint",
    element: <Complaint />,
  },
  {
    path: "/pendingreq",
    element: <Pendingreq />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/chatgrow",
    element:<Chatgrow/>
  },
 
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
