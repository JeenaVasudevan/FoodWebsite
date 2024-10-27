import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from '../ErrorPage';
import { UserLayout } from '../layout/userLayout';
import { Home } from '../pages/user/Home';
import { FoodList } from '../pages/user/FoodList';
import { FoodDetails } from '../pages/user/FoodDetails';
import { SignupPage } from '../pages/shared/SignupPage';
import { LoginPage } from '../pages/shared/LoginPage';
import { Cart } from '../pages/user/Cart';
import { Payment } from '../pages/user/Payment';
import { Review } from '../pages/user/Review';
import { Address } from '../pages/user/Address';
import { Profile } from '../pages/user/Profile';
import { ProtectRoute } from './ProtectRoute';
import { AdminLayout } from '../layout/adminLayout';
import { Order } from '../pages/user/Order.JSX';
import About from '../pages/user/About';




export const router = createBrowserRouter([
    {
      path: "",
      element:<UserLayout />,
      errorElement:<ErrorPage />,
      children:[
        {
          path:"/sign-up",
          element:<SignupPage />
        },
        {
          path:"/log-in",
          element:<LoginPage />
        },
        {
          path:"/",
          element:<Home />
        },
        {
          path:"about",
          element:<About />
        },
        {
          path:"food",
          element:<FoodList />
        },
        {
          path:"food/:id",
          element:<FoodDetails />
        },
        {
          path:"cart",
          element:<Cart />
        },
        {
          path:"payment",
          element:<Payment />
        },
        {
          path:"review",
          element:<Review />
        },
        {
          path:"address",
          element:<Address />
        },
        {
          path:"order",
          element:<Order />
        },
        {
          path: "/user",
          element :<ProtectRoute />,
          children: [
              {
                  path: "profile",
                  element:<Profile />
              },
              {
                  path: "cart",
                  element:<Cart />
              },
              {
                  path: "order",
                  element:<Order />
              },
          ],
     },
      ]
    },
    {
      path:"/log-in",
      element:<AdminLayout />,
      children:[
        {
          path:"/log-in",
          element:<LoginPage role='admin'/>
        }
      ]
    }
  ]);
