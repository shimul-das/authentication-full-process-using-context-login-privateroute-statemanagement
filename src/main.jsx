import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Registration from './Components/Registration.jsx';
import AuthProviders from './Provider/AuthProviders.jsx';
import PrivateRoute from './Components/routes/PrivateRoute.jsx';
import Orders from './Components/Orders.jsx';
import Profile from './Components/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element:<Registration></Registration>,
      },
      {
        path: "/orders",
        element:<PrivateRoute><Orders></Orders></PrivateRoute>,
      },
      {
        path: "/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
