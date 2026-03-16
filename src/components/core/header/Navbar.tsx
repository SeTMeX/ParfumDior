import { useEffect, useState } from "react";
import { User, ShoppingCart, Home, Sun, Moon, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavbarMobileMenu from "@/components/core/header/NavbarMobileMenu.tsx";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
<<<<<<< HEAD
    const [menuOpen, setMenuOpen] = useState(false);
    const { i18n, t } = useTranslation();
    const location = useLocation();
=======
    const{i18n} = useTranslation()
    const{t} = useTranslation()

>>>>>>> 902aedf96e58136f3bf41d7768c4752ef9b20c00

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const changeLng = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled || menuOpen
                    ? "backdrop-blur-md bg-background/80 border-b border-border shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between text-foreground">

                {/* LEFT — hidden on mobile */}
                <div className="hidden md:flex items-center gap-6 flex-1">
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                            <Sun size={20} />
                        </button>
                        <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                            <Moon size={20} />
                        </button>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground rounded-2xl px-1 py-1.5">
<<<<<<< HEAD
                        <button
                            onClick={() => changeLng("ro") }
                            className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-2 py-1.5 transition text-sm tracking-wide"
                        >
                            RO
                        </button>
                        <button
                            onClick={() => changeLng("en")}
                            className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-2 py-1.5 transition text-sm tracking-wide"
                        >
=======
                        <button onClick={()=>{
                            changeLng('ro')
                        }} className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-2 py-1.5 transition text-sm tracking-wide">
                            RO
                        </button>

                        <button onClick={()=>{
                            changeLng('en')
                        }} className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-2 py-1.5 transition text-sm tracking-wide">
>>>>>>> 902aedf96e58136f3bf41d7768c4752ef9b20c00
                            EN
                        </button>
                    </div>
                </div>

<<<<<<< HEAD
                {/* CENTER — hidden on mobile */}
                <div className="hidden md:flex items-center gap-1.5 text-muted-foreground bg-card rounded-2xl px-1.5 py-2">
=======

                {/* center section */}
                <div className="flex items-center gap-1.5 text-muted-foreground bg-card rounded-2xl px-1.5 py-2">
>>>>>>> 902aedf96e58136f3bf41d7768c4752ef9b20c00
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

                {/* RIGHT — desktop buttons hidden on mobile, hamburger visible only on mobile */}
                <div className="flex items-center gap-4 flex-1 justify-end">
<<<<<<< HEAD
                    <div className="hidden md:flex items-center gap-1.5 text-muted-foreground rounded-2xl px-2 py-1.5">
                        <button className=" hover:text-accent-foreground hover:bg-authbtn bg-secondary hover:scale-110 rounded-lg font-medium px-4 py-1.5 transition text-sm tracking-wide">
                            {t("navBar.leftDiv.sign-in")}
                        </button>
                        <button className=" hover:text-accent-foreground hover:bg-authbtn bg-secondary hover:scale-110 rounded-lg font-medium px-4 py-1.5 transition text-sm tracking-wide">
=======

                    {/* signin login */}
                    <div className="flex items-center gap-1.5 text-muted-foreground rounded-2xl px-2 py-1.5">
                        <button className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-4 py-1.5 transition text-sm tracking-wide">
                            {t("navBar.leftDiv.sign-in")}
                        </button>
                        <button className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-4 py-1.5 transition text-sm tracking-wide">
>>>>>>> 902aedf96e58136f3bf41d7768c4752ef9b20c00
                            {t("navBar.leftDiv.log-in")}
                        </button>
                    </div>

                    <button className="hidden md:block p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                        <User size={25} />
                    </button>

                    <div className="hidden md:block relative">
                        <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                            <ShoppingCart size={20} />
                        </button>
                        <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs px-1.5 rounded-full">
                            1
                        </span>
                    </div>

                    {/* Mobile-only: cart + user + hamburger */}
                    <div className="flex md:hidden items-center gap-2">
                        <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                            <User size={22} />
                        </button>
                        <div className="relative">
                            <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                                <ShoppingCart size={20} />
                            </button>
                            <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs px-1.5 rounded-full">
                                1
                            </span>
                        </div>
                        <button
                            className="p-2 rounded-full hover:bg-accent transition text-muted-foreground"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>
            {menuOpen && <NavbarMobileMenu onChangeLng={changeLng} cartCount={1} />}
        </nav>
    );
};

export default Navbar;