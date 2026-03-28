import { useEffect, useState } from "react";
import {
  User,
  ShoppingCart,
  Home,
  Sun,
  Moon,
  Menu,
  X,
  Heart,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavbarMobileMenu from "@/components/core/header/NavbarMobileMenu.tsx";
import Registration from "@/components/core/auth/Registration.tsx";
import LogIn from "@/components/core/auth/LogIn.tsx";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const changeLng = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isAuth = localStorage.getItem("accessToken");
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "backdrop-blur-md bg-background/80 border-b border-border shadow-lg"
          : "bg-background border-b border-border shadow-md"
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
              onClick={() => {
                changeLng("ro");
              }}
              className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-2 py-1.5 transition text-sm tracking-wide"
            >
              RO
            </button>

            <button
              onClick={() => {
                changeLng("en");
              }}
              className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-2 py-1.5 transition text-sm tracking-wide"
            >
              EN
            </button>
          </div>
        </div>

        {/* RIGHT — desktop buttons hidden on mobile, hamburger visible only on mobile */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          {/* signin login */}

          {isAuth ? (
            <div className="flex gap-2 items-center">
              <Link to="/user">
                <button className="hidden md:block p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                  <User size={25} />
                </button>
              </Link>

              <button className="hidden md:block p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                <Heart size={20} />
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-1.5 text-muted-foreground rounded-2xl px-2 py-1.5">
              <button
                className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-4 py-1.5 transition text-sm tracking-wide"
                onClick={() => {
                  setShowRegister(true);
                }}
              >
                {t("navBar.leftDiv.sign-in")}
              </button>
              <button
                className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-4 py-1.5 transition text-sm tracking-wide"
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                {t("navBar.leftDiv.log-in")}
              </button>
            </div>
          )}

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
      {menuOpen && (
        <NavbarMobileMenu
          onChangeLng={changeLng}
          onShowRegister={() => setShowRegister(true)}
          onShowLogin={() => setShowLogin(true)}
          cartCount={1}
        />
      )}

      <LogIn show={showLogin} onClose={() => setShowLogin(false)} />
      <Registration
        show={showRegister}
        onClose={() => setShowRegister(false)}
      />
    </nav>
  );
};

export default Navbar;
