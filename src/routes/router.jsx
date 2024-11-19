import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UserProfile from "../pages/UserProfile";
import UpdateProfile from "../pages/UpdateProfile";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Destination from "../pages/Destination";
import CategoryCard from "../components/CategoryCard";
import CardDetails from "../pages/CardDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children:[
          {
            path: '',
            element: <Navigate to='/adventure/Mountain Treks'></Navigate>
          },
          {
            path: '/adventure/:category',
            element: <CategoryCard></CategoryCard>,
            loader: ()=> fetch('../ecoData.json')
          }
        ]
      },
      {
        path: '/destination',
        element: <Destination></Destination>,
        loader: ()=> fetch('../ecoData.json')
      },
      {
        path: '/user-profile',
        element: <UserProfile></UserProfile>
      },
      {
        path: '/update-profile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/category/:id',
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: ()=> fetch("../ecoData.json")
      },
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },
]);
export default router;