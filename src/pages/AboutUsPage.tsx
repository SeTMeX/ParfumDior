// import Registration from "@/components/core/auth/Registration"
// import LogIn from "@/components/core/auth/LogIn"
import { useUserStore } from '@/stores/useUserStire'

const AboutUsPage = () =>{
    const { count, inc } = useUserStore()

    console.log("AboutUsPage rendered")
    return(
        <div>
           {/* <Registration/>
           <LogIn/> */}

           <div className="bg-red-500">
                <p>{count}</p>
                <button onClick={inc}>+1</button>
            </div>


        </div>
    )
}
export default AboutUsPage