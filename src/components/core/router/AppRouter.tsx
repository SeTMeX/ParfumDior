import { routes } from "./router"
import {Route, Routes} from "react-router-dom"
import RouterLayout from "./RouterLayout"
import AuthLayout from "@/components/layouts/AuthLayout.tsx";

const AppRouter = () =>{
    return(
        <Routes>
        {routes.map((route) =>{
            const page = route.isAuth ? (
                <AuthLayout>{route.element}</AuthLayout>
            ):(route.element)

            return (
            <Route  
            key={route.path} 
            path={route.path} 
            element={<RouterLayout 
                hideNavbar = {route.hideNavbar}
                hideFooter = {route.hideFooter}
                >{page}</RouterLayout>}/>
        )})}
        </Routes>
    )
}
export default AppRouter