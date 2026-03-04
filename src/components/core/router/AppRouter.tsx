import { routes } from "./router"
import {Route, Routes} from "react-router-dom"

const AppRouter = () =>{
    return(
        <Routes>
        {routes.map((route) =>{
            return <Route key={route.path} path={route.path} element={route.element}/>
        })}
        </Routes>
    )
}
export default AppRouter