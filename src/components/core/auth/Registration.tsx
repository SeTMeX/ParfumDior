const Registration = () => {
    return (
        <div>
            <div className="max-w-75 w-full bg-[#111111] overflow-hidden rounded-2xl text-white border border-[#222]">

                <form className="relative flex flex-col px-6 pt-8 pb-6 gap-4 text-center">
                    <span className="font-bold text-[1.6rem] text-white">Sign Up</span>
                    <span className="text-[1rem] text-[#888]">Create a free account with your email.</span>

                    <div className="overflow-hidden rounded-lg bg-[#1a1a1a] my-2 w-full border border-[#2a2a2a]">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="bg-transparent border-0 border-b border-[#2a2a2a] outline-none h-10 w-full text-[.9rem] px-3.75 py-2 text-white placeholder-[#555]"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-transparent border-0 border-b border-[#2a2a2a] outline-none h-10 w-full text-[.9rem] px-3.75 py-2 text-white placeholder-[#555]"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="bg-transparent border-0 outline-none h-10 w-full text-[.9rem] px-3.75 py-2 text-white placeholder-[#555]"
                        />
                    </div>

                    <button className="bg-[#0066ff] text-white border-0 rounded-3xl py-2.5 px-4 text-[1rem] font-semibold cursor-pointer transition-colors duration-300 hover:bg-[#005ce6]">
                        Sign Up
                    </button>
                </form>

                <div className="px-4 py-4 text-[.85rem] bg-[#0d0d0d] border-t border-[#222] text-[#888]">
                    <p>Have an account?{" "}
                        <a href="" className="font-bold text-[#0066ff] transition-colors duration-300 hover:text-[#005ce6] hover:underline">
                            Log in
                        </a>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Registration;