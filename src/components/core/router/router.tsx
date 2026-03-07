import AboutUsPage from "@/pages/AboutUsPage";
import HomePage from "@/pages/HomePage";
import TeamPage from "@/pages/TeamPage";
import type { ReactNode } from "react";

interface RoutesI {
    name: string,
    title: string,
    path: string,
    element: ReactNode,
    hideNavbar?:boolean,
    hideFooter?:boolean
}

 export const  routes:RoutesI[] = [
    {
        name:'Home',
        title:'MainPage',
        path:'/',
        element: <HomePage/>
    },
    {
        name:'AboutUs',
        title:'Secondpage',
        path:'/about',
        element:<AboutUsPage/>,
        hideFooter:true
    },
    {
        name:'Team',
        title:'Teampage',
        path:'/team',
        element:<TeamPage/>, 
        hideNavbar:true 
    }
 ]