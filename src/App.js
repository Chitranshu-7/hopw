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
import Dashboardreq from "./Componants/Dashboardreq";
import Feedback from "./Componants/Feedback";
import Feedbackfir from "./Componants/Feedbackfir";
import Otp from "./Componants/Otp";
import Providefeedback from "./Componants/Providefeedback";
import Registration from "./Componants/Registration";
import ResetOtp from "./Componants/ResetOtp";
import ResetPassword from "./Componants/ResetPassword";
import Trackfir from "./Componants/Trackfir";
import Rajasthanportal from "./PoliceStation/Rajasthanportal";
import FeebackCard from "./PoliceStation/FeebackCard";
import Feedbackfri from "./PoliceStation/Feedbackfri";
import Loginpolice from "./PoliceStation/Loginpolice";
import Updatefri from "./PoliceStation/Updatefri";
import VerifyEmail from "./PoliceStation/VerifyEmail";
import Pendingrticket from "./HighAuthority/Pendingticket";
import Showapprovedticket from "./HighAuthority/Showapprovedticket";
import Approveticket from "./HighAuthority/Approveticket";
import Meetingdashboard from "./HighAuthority/Meetingdashboard";
import AddFir from "./HighAuthority/AddFir";
import Firdash from "./PoliceStation/Firdash";
import Complainreview from "./PoliceStation/Complainreview";
import Dashboardfeedback from "./Componants/Dashboardfeedback";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chatgrow",
    element: <Chatgrow />,
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
    element: <Otphighauth />,
  },
  {
    path: "/authreset",
    element: <ResetPasswordAuth />,
  },
  {
    path: "/policerating",
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
  {
    path:'/pendingticket',
    element:<Pendingrticket/>
    
  },
  {
    path:'/rating',
    element:<Polishstationrating/>
  },
  {
    path:'/showapprove',
    element:<Showapprovedticket/>
  },
  {
    path: "/advanceapoint",
    element: <Advanceapoint />,
  },
  {
    path:"/approveticket",
    element:<Approveticket/>
  },
  {
    path:'/meetingdashboard',
    element:<Meetingdashboard/>

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
    path: "/appointment",
    element: <Appointment />,
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
    path: "/dashboardreq",
    element: <Dashboardreq />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/feedbackfir",
    element: <Feedbackfir />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/otp",
    element: <Otp />,
  },
  {
    path: "/providefeedback",
    element: <Providefeedback />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
 
  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
  {
    path: "/resetotp",
    element: <ResetOtp />,
  },
  {
    path: "/trackfir",
    element: <Trackfir />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/chatgrow",
    element: <Chatgrow />,
  },

  // PoliceStationPortal

  {
    path:"/rajasthanportal",
    element:<Rajasthanportal/>
  },
  {
    path:"/feedbackcard",
    element:<FeebackCard/>
  },
  {
    path:"/feedbackfri",
    element:<Feedbackfri/>

  },
  {
    path:"/loginpolice",
    element:<Loginpolice/>
  },
  {
    path:"/updatefri",
    element:<Updatefri/>
  },
  {
    path:"/verifyemail",
    element:<VerifyEmail/>
  },
  {
    path: "/pendingreq",
    element: <Pendingreq />,
  },
  {
    path:"/Addfir",
    element:<AddFir/>
  },
  {
    path:"firdash",
    element:<Firdash/>
  },{
    path:"/complainreview",
    element:<Complainreview/>
  },
  {
    path:"/dashboardfeedback",
    element:<Dashboardfeedback/>
  }

]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
