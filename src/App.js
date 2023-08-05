import { RouterProvider,createBrowserRouter } from "react-router-dom";
import CourseDetails from "./components/courseDetails";
import UserDetails from "./components/userDetails";
import AdminDash from "./components/adminDash";
import GenerateToken from "./components/generateToken";
import Home from "./components/home";
import Payment from "./components/payment";
import VerifyToken from "./components/verifyToken";
import ResetPass from "./components/resetPass";
import Register from "./components/register";
import Login from "./components/login";

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const router = createBrowserRouter([
    {

      path:"/login",
      element:<Login/>
    },
    {

      path:"/register",
      element:<Register/>
    },
    {

      path:"/",
      element:<Home/>
    },
    {

      path:"/verify",
      element:<VerifyToken/>
    },
    {

      path:"/resetPassword",
      element:<ResetPass/>
    },
    {

      path:"/generateToken",
      element:<GenerateToken/>
    },
    {

      path:"/payment",
      element:<Payment/>
    },
    {

      path:"/courseId",
      element:<CourseDetails/>
    },
    {

      path:"/editCourse",
      element:<AdminDash/>
    },
     {

      path:"/userDetails",
      element:<UserDetails/>
    }, 
  ]

  )
  return (
    <div className="App">
        <RouterProvider router={router}/>
          </div>
  );
}

export default App;
