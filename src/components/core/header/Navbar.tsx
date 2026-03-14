import { useEffect, useState } from "react";
import { Heart, ShoppingCart, Home, Sun, Moon, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { i18n, t } = useTranslation();
    const location = useLocation();

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
                        <button
                            onClick={() => changeLng("ro")}
                            className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-2 py-1.5 transition text-sm tracking-wide"
                        >
                            RO
                        </button>
                        <button
                            onClick={() => changeLng("en")}
                            className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-2 py-1.5 transition text-sm tracking-wide"
                        >
                            EN
                        </button>
                    </div>
                </div>

                {/* CENTER — hidden on mobile */}
                <div className="hidden md:flex items-center gap-1.5 text-muted-foreground bg-card rounded-2xl px-1.5 py-2">
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
                    <div className="hidden md:flex items-center gap-1.5 text-muted-foreground rounded-2xl px-2 py-1.5">
                        <button className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-4 py-1.5 transition text-sm tracking-wide">
                            {t("navBar.leftDiv.sign-in")}
                        </button>
                        <button className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-4 py-1.5 transition text-sm tracking-wide">
                            {t("navBar.leftDiv.log-in")}
                        </button>
                    </div>

                    <button className="hidden md:block p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                        <Heart size={20} />
                    </button>

                    <div className="hidden md:block relative">
                        <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                            <ShoppingCart size={20} />
                        </button>
                        <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs px-1.5 rounded-full">
                            1
                        </span>
                    </div>

                    {/* Mobile-only: cart + hamburger */}
                    <div className="flex md:hidden items-center gap-2">
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

            {/* MOBILE DROPDOWN MENU */}
            {menuOpen && (
                <div className="md:hidden backdrop-blur-md bg-background/95 border-t border-border px-6 py-5 flex flex-col gap-5">

                    {/* Theme + Language */}
                    <div className="flex items-center gap-3">
                        <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                            <Sun size={18} />
                        </button>
                        <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                            <Moon size={18} />
                        </button>
                        <div className="flex items-center gap-1.5 ml-1">
                            <button
                                onClick={() => changeLng("ro")}
                                className="hover:bg-accent hover:text-accent-foreground bg-secondary rounded-lg font-medium px-3 py-1.5 transition text-sm tracking-wide"
                            >
                                RO
                            </button>
                            <button
                                onClick={() => changeLng("en")}
                                className="hover:bg-accent hover:text-accent-foreground bg-secondary rounded-lg font-medium px-3 py-1.5 transition text-sm tracking-wide"
                            >
                                EN
                            </button>
                        </div>
                    </div>

                    {/* Nav links */}
                    <div className="flex flex-col gap-1 text-muted-foreground">
                        <Link
                            to="/"
                            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition text-sm font-medium"
                        >
                            <Home size={18} />
                            Home
                        </Link>
                        <Link
                            to="/features"
                            className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition text-sm font-medium"
                        >
                            {t("navBar.centralDiv.features")}
                        </Link>
                        <Link
                            to="/solutions"
                            className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition text-sm font-medium"
                        >
                            {t("navBar.centralDiv.solutions")}
                        </Link>
                        <Link
                            to="/company"
                            className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition text-sm font-medium"
                        >
                            {t("navBar.centralDiv.company")}
                        </Link>
                        <Link
                            to="/get-started"
                            className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition text-sm font-medium"
                        >
                            {t("navBar.centralDiv.get-started")}
                        </Link>
                    </div>

                    {/* Auth buttons */}
                    <div className="flex gap-2 pt-2 border-t border-border">
                        <button className="flex-1 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg font-medium py-2 transition text-sm tracking-wide">
                            {t("navBar.leftDiv.sign-in")}
                        </button>
                        <button className="flex-1 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg font-medium py-2 transition text-sm tracking-wide">
                            {t("navBar.leftDiv.log-in")}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;