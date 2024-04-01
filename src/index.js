import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import JoinAsAstrologer from './components/JoinAsAstrologer';
import Testimonials from './components/Testimonials';
import Header from './components/Header';
import Body from './components/Body';


const Layout = () => (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
const router=createBrowserRouter(
    [{
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/astrologer/register",
                element:<JoinAsAstrologer/>
            },
            {
                path:"/testimonials",
                element:<Testimonials/>
            }
        ]
    }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
