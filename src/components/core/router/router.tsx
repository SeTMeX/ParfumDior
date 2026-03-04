import AboutUsPage from "@/pages/AboutUsPage";
import HomePage from "@/pages/HomePage";
import TeamPage from "@/pages/TeamPage";

 export const  routes = [
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
        element:<AboutUsPage/>
    },
    {
        name:'Team',
        title:'Teampage',
        path:'/team',
        element:<TeamPage/>  
    }
 ]