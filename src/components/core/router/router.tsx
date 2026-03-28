import AboutUsPage from "@/pages/AboutUsPage";
import HomePage from "@/pages/HomePage";
import TeamPage from "@/pages/TeamPage";
import UserPage from "@/pages/UserPage";
import type { ReactNode } from "react";

interface RoutesI {
    name: string,
    title: string,
    path: string,
    element: ReactNode,
    hideNavbar?:boolean,
    hideFooter?:boolean
    isAuth?:boolean
}

 export const  routes:RoutesI[] = [
    {
        name:'Home',
        title:'MainPage',
        path:'/',
        element: <HomePage/>,
        isAuth:false
    },
    {
        name:'AboutUs',
        title:'Secondpage',
        path:'/about',
        element:<AboutUsPage/>,
        hideFooter:true,
        isAuth:false
    },
    {
        name:'Team',
        title:'Teampage',
        path:'/team',
        element:<TeamPage/>, 
        hideNavbar:true,
        isAuth:false
    },
    {
        name: 'User',
        title: 'Userpage',
        path: '/user',
        element: <UserPage/>,
    }
 ]