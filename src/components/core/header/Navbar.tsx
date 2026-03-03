import { useEffect, useState } from "react";
import { Heart, ShoppingCart, Home, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between text-white">

                {/* sectia de stinga */}
                <div className="flex items-center gap-6 flex-1">
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full hover:bg-white/20 transition">
                            <Sun size={20} />
                        </button>
                        <button className="p-2 rounded-full hover:bg-white/20 transition">
                            <Moon size={20} />
                        </button>
                    </div>
                </div>

                {/* sectia centrala */}
                <div className="flex items-center gap-1.5 text-white/80 bg-gray-900 rounded-2xl px-1.5 py-2">
                    <Link
                        to="/"
                        className="flex items-center gap-2 px-3 py-1.5 hover:text-white transition"
                    >
                        <Home size={20} />
                    </Link>

                    <Link
                        to="/features"
                        className="hover:bg-white hover:text-black bg-white/5 rounded-md font-medium px-4 py-1.5 transition text-sm tracking-wide"
                    >
                        FEATURES
                    </Link>

                    <Link
                        to="/solutions"
                        className="hover:bg-white hover:text-black bg-white/5 rounded-md font-medium px-4 py-1.5 transition text-sm tracking-wide"
                    >
                        SOLUTIONS
                    </Link>

                    <Link
                        to="/company"
                        className=" hover:bg-white hover:text-black bg-white/5 rounded-md font-medium px-4 py-1.5 transition text-sm tracking-wide"
                    >
                        COMPANY
                    </Link>

                    <Link
                        to="/get-started"
                        className=" hover:bg-white hover:text-black bg-white/5 rounded-md font-medium px-4 py-1.5 transition text-sm tracking-wide"
                    >
                        GET STARTED
                    </Link>
                </div>

                {/* sectia dreapta */}
                <div className="flex items-center gap-4 flex-1 justify-end">

                    {/* singin login */}
                    <div className="flex items-center gap-1.5 text-white/80 bg-transparent rounded-2xl px-2 py-1.5">
                        <button className="hover:bg-white hover:text-black bg-white/5 hover:scale-110 rounded-lg font-medium px-4 py-1.5 transition text-sm tracking-wide">
                            Sign In
                        </button>
                        <button className="hover:bg-white hover:text-black bg-white/5 hover:scale-110 rounded-lg font-medium px-4 py-1.5 transition text-sm tracking-wide">
                            Log In
                        </button>
                    </div>

                    <button className="p-2 rounded-full hover:bg-white/20 transition">
                        <Heart size={20} />
                    </button>

                    <div className="relative">
                        <button className="p-2 rounded-full hover:bg-white/20 transition">
                            <ShoppingCart size={20} />
                        </button>

                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">
                            1
                        </span>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;