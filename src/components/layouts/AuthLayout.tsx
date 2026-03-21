import type {ReactNode} from "react";
import {Navigate} from "react-router-dom";

interface AuthLayoutProps{
    children: ReactNode;
}

const AuthLayout =({children}:AuthLayoutProps)=>{


    const token = localStorage.getItem("accessToken");
    if(!token){
        return <Navigate to="/" />;

    }

    return (
        <>
            {children}
        </>
    )
}
export default AuthLayout