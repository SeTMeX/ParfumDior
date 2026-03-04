import LogIn from "@/components/core/auth/LogIn"
import Footer from "@/components/core/footer/Footer"
import Navbar from "@/components/core/header/Navbar"

const HomePage =() => {
    return(
        <div>
            <Navbar/>
            <LogIn/>
            <Footer/>
        </div>
    )
}
export default HomePage