import { useEffect, useState } from "react";
import { Heart, ShoppingCart, Home, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Registration from "@/components/core/auth/Registration.tsx";
import LogIn from "@/components/core/auth/LogIn.tsx";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showAuth, setShowAuth] = useState(false)
    const [isLogin, setIsLogin] = useState(false)

    const{i18n} = useTranslation()
    const{t} = useTranslation()


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const changeLng = (lng:string) =>{
        i18n.changeLanguage(lng)
    }
    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "backdrop-blur-md bg-background/80 border-b border-border shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between text-foreground">

                {/* left section */}
                <div className="flex items-center gap-6 flex-1">
                    <div className="flex items-center gap-2 ">
                        <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                            <Sun size={20} />
                        </button>
                        <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                            <Moon size={20} />
                        </button>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground rounded-2xl px-1 py-1.5">
                        <button onClick={()=>{
                            changeLng('ro')
                        }} className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-2 py-1.5 transition text-sm tracking-wide">
                            RO
                        </button>

                        <button onClick={()=>{
                            changeLng('en')
                        }} className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-2 py-1.5 transition text-sm tracking-wide">
                            EN
                        </button>
                    </div>
                </div>

                {/* center section */}
                <div className="flex items-center gap-1.5 text-muted-foreground bg-card rounded-2xl px-1.5 py-2">
                    <Link
                        to="/"
                        className="flex items-center gap-2 px-3 py-1.5 hover:text-foreground transition"
                    >
                        <Home size={20} />
                    </Link>

                    <Link
                        to="/features"
                        className="hover:bg-accent hover:text-accent-foreground bg-secondary rounded-md font-medium px-4 py-1.5 transition text-sm tracking-wide"
                    >
                        {t("navBar.centralDiv.features")}
                    </Link>

                    <Link
                        to="/solutions"
                        className="hover:bg-accent hover:text-accent-foreground bg-secondary rounded-md font-medium px-4 py-1.5 transition text-sm tracking-wide"
                    >
                        {t("navBar.centralDiv.solutions")}
                    </Link>

                    <Link
                        to="/company"
                        className="hover:bg-accent hover:text-accent-foreground bg-secondary rounded-md font-medium px-4 py-1.5 transition text-sm tracking-wide"
                    >
                        {t("navBar.centralDiv.company")}
                    </Link>

                    <Link
                        to="/get-started"
                        className="hover:bg-accent hover:text-accent-foreground bg-secondary rounded-md font-medium px-4 py-1.5 transition text-sm tracking-wide"
                    >
                        {t("navBar.centralDiv.get-started")}
                    </Link>
                </div>

                {/* right section */}
                <div className="flex items-center gap-4 flex-1 justify-end">

                    {/* signin login */}
                    <div className="flex items-center gap-1.5 text-muted-foreground rounded-2xl px-2 py-1.5">
                        <button className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-4 py-1.5 transition text-sm tracking-wide"
                            onClick={() => { setShowAuth(true); setIsLogin(false) }}>{t("navBar.leftDiv.sign-in")}</button>
                        <button className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-4 py-1.5 transition text-sm tracking-wide"
                            onClick={() => { setShowAuth(true); setIsLogin(true) }}>{t("navBar.leftDiv.log-in")}</button>
                    </div>

                    <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                        <Heart size={20} />
                    </button>

                    <div className="relative">
                        <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                            <ShoppingCart size={20} />
                        </button>

                        <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs px-1.5 rounded-full">
                            1
                        </span>
                    </div>
                </div>

            </div>

            {showAuth && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
                     onClick={() => setShowAuth(false)}>
                    <div onClick={(e) => e.stopPropagation()}>
                        {isLogin
                            ? <LogIn onSwitch={() => setIsLogin(false)} />
                            : <Registration onSwitch={() => setIsLogin(true)} />
                        }
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;