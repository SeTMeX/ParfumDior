import { routes } from "./router"
import {Route, Routes} from "react-router-dom"
import RouterLayout from "./RouterLayout"

const AppRouter = () =>{
    return(
        <Routes>
        {routes.map((route) =>{
            return (
            <Route  
            key={route.path} 
            path={route.path} 
            element={<RouterLayout 
                hideNavbar = {route.hideNavbar}
                hideFooter = {route.hideFooter}
                >{route.element}</RouterLayout>}/>
        )})}
        </Routes>
    )
}
export default AppRouter